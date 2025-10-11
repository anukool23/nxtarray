import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./sesClient";
import logger from "./logger";

// HTML Email Template for user
const generateEmailHtml = (userName = "User") => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You Email</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f6f6f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f6f6;padding:20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="background-color:#007bff;color:#ffffff;padding:20px;text-align:center;font-size:24px;font-weight:bold;">
              Thank You for Your Interest!
            </td>
          </tr>
          <tr>
            <td style="padding:30px;color:#333333;font-size:16px;line-height:1.5;">
              <p>Hi ${userName},</p>
              <p>We are excited to see your interest in our services. Our team will connect with you shortly to assist you further.</p>
              <p>If you have any questions in the meantime, feel free to contact us at <a href="mailto:engage@nxtarray.com" style="color:#007bff;text-decoration:none;">engage@nxtarray.com</a>.</p>
              <p>Best Regards,<br/><strong>The NxtArray Team</strong></p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f0f0f0;padding:20px;text-align:center;font-size:12px;color:#555555;">
              © ${new Date().getFullYear()} NxtArray. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// HTML Email Template for Admin (Tabular Payload)
const generateAdminEmailHtml = (payload) => {
    const rows = Object.entries(payload)
        .map(
            ([key, value]) =>
                `<tr><td style="border:1px solid #ddd;padding:8px;font-weight:bold;">${key}</td><td style="border:1px solid #ddd;padding:8px;">${value}</td></tr>`
        )
        .join("");

    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New User Interest</title>
  </head>
  <body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f6f6f6;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f6f6;padding:20px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="background-color:#28a745;color:#ffffff;padding:20px;text-align:center;font-size:24px;font-weight:bold;">
                New User Interest Received
              </td>
            </tr>
            <tr>
              <td style="padding:20px;color:#333333;font-size:16px;line-height:1.5;">
                <p>A new user has shown interest. Here are the details:</p>
                <table style="border-collapse:collapse;width:100%;margin-top:10px;">
                  ${rows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f0f0f0;padding:20px;text-align:center;font-size:12px;color:#555555;">
                © ${new Date().getFullYear()} NxtArray. All rights reserved.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};

// Command for user email
const createSendEmailCommand = (toAddress, fromAddress, userName) => {
    return new SendEmailCommand({
        Destination: { ToAddresses: [toAddress] },
        Message: {
            Body: {
                Html: { Charset: "UTF-8", Data: generateEmailHtml(userName) },
                Text: {
                    Charset: "UTF-8",
                    Data: `Hi ${userName},\n\nThank you for showing interest in us. Our team will connect with you shortly.\n\n- The NxtArray Team`,
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Thank you for showing interest in us",
            },
        },
        Source: fromAddress,
        ReplyToAddresses: [fromAddress],
    });
};

// Command for admin email
const createSendEmailCommandToAdmin = (toAddress, fromAddress, payload) => {
    return new SendEmailCommand({
        Destination: { ToAddresses: [toAddress] },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: generateAdminEmailHtml({
                        Name: payload?.name,
                        Email: payload?.email,
                        "Contact Details": `${payload?.countryCode}-${payload?.phone}`,
                        Company: payload?.company || "NULL",
                        "From where he came to know about us":
                            payload?.hearAboutUs,
                        "What type of service user required": payload?.division,
                        Requirements: payload?.opportunity,
                        Attachments: payload?.filepath || "NULL",
                    }),
                },
                Text: {
                    Charset: "UTF-8",
                    Data: `New user interest received:\n${JSON.stringify(
                        payload,
                        null,
                        2
                    )}`,
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: "New User Interest Notification",
            },
        },
        Source: fromAddress,
        ReplyToAddresses: [fromAddress],
    });
};

// Send email function
export const sendEmailToUser = async (payload) => {
    const sendEmailCommandToUser = createSendEmailCommand(
        payload?.email,
        process.env.NOREPLY_EMAIL,
        payload?.name || "User"
    );

    const sendEmailCommandToAdmin = createSendEmailCommandToAdmin(
        process.env.RECEIVER_ADMIN_EMAIL, // admin email
        process.env.ADMIN_EMAIL,
        payload
        
      );
    try {
        const response = await sesClient.send(sendEmailCommandToUser);
        const responseAdmin = await sesClient.send(sendEmailCommandToAdmin);
        logger.info("User email sent for /api/contact:", response.MessageId);
        logger.info("Admin email sent for /api/contact:", responseAdmin.MessageId);
        return response;
    } catch (error) {
        logger.error("Error sending email for /api/contact:", error);
        throw error;
    }
};
