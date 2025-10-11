import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./sesClient";
import logger from "./logger";

// USER EMAIL TEMPLATE (Applicant)
const generateEmailHtml = (userName = "Applicant", position = "the position") => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Application Received</title>
  <style>
    @media (max-width:600px){
      .container{width:100%!important;padding:15px!important;}
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,sans-serif;color:#333;">
  <table width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f6f8;padding:30px 0;">
    <tr>
      <td align="center">
        <table class="container" width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color:#007bff;color:#ffffff;text-align:center;padding:25px;font-size:24px;font-weight:bold;">
              NxtArray Careers
            </td>
          </tr>
          <tr>
            <td style="padding:30px;font-size:16px;line-height:1.6;">
              <p>Hi ${userName},</p>
              <p>Thank you for applying at <strong>NxtArray</strong>! 🎉</p>
              <p>We’ve successfully received your application and our hiring team is currently reviewing your profile. If your qualifications match our needs, we’ll reach out to you soon to discuss next steps.</p>
              <p>In the meantime, feel free to explore more about us at <a href="https://nxtarray.com" style="color:#007bff;text-decoration:none;">nxtarray.com</a>.</p>
              <p>We appreciate your interest in joining our team!</p>
              <p>Warm regards,<br/><strong>The NxtArray HR Team</strong></p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f0f0f0;text-align:center;padding:20px;font-size:12px;color:#777;">
              © ${new Date().getFullYear()} NxtArray. All rights reserved.<br/>
              <a href="mailto:engage@nxtarray.com" style="color:#007bff;text-decoration:none;">engage@nxtarray.com</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// ADMIN EMAIL TEMPLATE
const generateAdminEmailHtml = (payload) => {
  const rows = Object.entries(payload)
    .map(
      ([key, value]) =>
        `<tr>
          <td style="border:1px solid #ddd;padding:10px;font-weight:bold;background-color:#f9f9f9;">${key}</td>
          <td style="border:1px solid #ddd;padding:10px;">${value || "N/A"}</td>
        </tr>`
    )
    .join("");

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Job Application</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f6f6f6;font-family:Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f6f6;padding:30px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.1);">
            <tr>
              <td style="background-color:#28a745;color:#ffffff;padding:20px;text-align:center;font-size:22px;font-weight:bold;">
                📩 New Job Application Received
              </td>
            </tr>
            <tr>
              <td style="padding:25px;color:#333333;font-size:15px;line-height:1.5;">
                <p>A new applicant has submitted their details on the career portal. Here are the details:</p>
                <table style="border-collapse:collapse;width:100%;margin-top:10px;font-size:14px;">
                  ${rows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f0f0f0;text-align:center;padding:15px;font-size:12px;color:#555;">
                © ${new Date().getFullYear()} NxtArray Careers | Internal Notification
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

// COMMANDS
const createSendEmailCommand = (toAddress, fromAddress, userName, position) => {
  return new SendEmailCommand({
    Destination: { ToAddresses: [toAddress] },
    Message: {
      Body: {
        Html: { Charset: "UTF-8", Data: generateEmailHtml(userName, position) },
        Text: {
          Charset: "UTF-8",
          Data: `Hi ${userName},\n\nThank you for applying for ${position} at NxtArray. Our team will reach out soon.\n\n– The NxtArray HR Team`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Application Received – NxtArray Careers`,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [fromAddress],
  });
};

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
            "Phone": `${payload?.countryCode || ""} ${payload?.phone || ""}`,
            "Position Applied For": payload?.division || "N/A",
            "Summary": payload?.opportunity || "N/A",
            "Resume File": payload?.filepath || "N/A",
            "Source": payload?.hearAboutUs || "N/A"
          }),
        },
        Text: {
          Charset: "UTF-8",
          Data: `New Job Application Received:\n${JSON.stringify(payload, null, 2)}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `New Job Application – ${payload?.name || "Applicant"}`,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [fromAddress],
  });
};

// SEND EMAIL FUNCTION
export const sendEmailForJoin = async (payload) => {
  const sendEmailCommandToUser = createSendEmailCommand(
    payload?.email,
    process.env.NOREPLY_EMAIL,
    payload?.name || "Applicant",
    payload?.division || "a position"
  );

  const sendEmailCommandToAdmin = createSendEmailCommandToAdmin(
    process.env.RECEIVER_ADMIN_EMAIL,
    process.env.ADMIN_EMAIL,
    payload
  );

  try {
    const [userRes, adminRes] = await Promise.all([
      sesClient.send(sendEmailCommandToUser),
      sesClient.send(sendEmailCommandToAdmin),
    ]);

    logger.info("✅ User email sent for /api/join:", userRes.MessageId);
    logger.info("✅ Admin email sent for /api/join:", adminRes.MessageId);
    return { userRes, adminRes };
  } catch (error) {
    logger.error("❌ Error sending email for /api/join:", error);
    throw error;
  }
};
