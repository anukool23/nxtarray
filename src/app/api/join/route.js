import { NextResponse } from "next/server";
import logger from "@/helper/logger";
import { uploadToS3 } from "@/helper/upload2aws";
import { connectDb } from "@/config/mongodb";
import Join from "@/models/join";
import { sendEmailForJoin } from "@/helper/sendEmailForJoin";

connectDb();
export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");

    // Convert form data to object, excluding file
    const payload = {};
    for (const [key, value] of data.entries()) {
      if (key !== "file") payload[key] = value;
    }

    if (file && typeof file === "object") {
      const fileUrl = await uploadToS3(file, "join-us");
      payload.filepath = fileUrl; 
      logger.info("📎 Received file on /api/join :  ", file.name, file.size, file.type);
    }

    logger.info(`📩 Received contact form : ${JSON.stringify(payload)}`);
    const joinUs = new Join(payload);
    const savedData = await joinUs.save();
    logger.info("Saved data in Database form /api/join",JSON.stringify(savedData))
    const emailResult = sendEmailForJoin(payload)
    logger.info("Mail triggered successfully for /api/contact",JSON.stringify(emailResult))
    

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    logger.error(`❌ Error processing form on /api/join: ${error.message}`);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
