import { NextResponse } from "next/server";
import logger from "@/helper/logger";
import { uploadToS3 } from "@/helper/upload2aws";
import Contact from "@/models/contact";
import {connectDb} from "@/config/mongodb";
import { sendEmailToUser } from '../../../helper/sendEmail';

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
connectDb();
export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");

    const payload = {};
    for (const [key, value] of data.entries()) {
      if (key !== "file") payload[key] = value;
    }
  
    if (file && typeof file === "object") {
      const fileUrl = await uploadToS3(file, "contact-us");
      payload.filepath = fileUrl; 
      logger.info("📎 Received file on /api/contact:", file.name, file.size, file.type);
    }
    logger.info(`📩 Received contact form on /api/contact: ${JSON.stringify(payload)}`);
    const newContact  = new Contact(payload);
    const savedData = await newContact.save();
    logger.info("Saved data in Database from /api/contact",JSON.stringify(savedData))
    const emailResult = await sendEmailToUser(payload);
    logger.info("Mail triggered successfully for /api/contact",JSON.stringify(emailResult))

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    logger.error(`❌ Error processing form on /api/contact: ${error.message}`);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
