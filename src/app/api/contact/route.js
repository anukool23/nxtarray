import { NextResponse } from "next/server";
import logger from "@/helper/logger";
import { uploadToS3 } from "@/helper/upload2aws";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");

    // Convert form data to object, excluding file
    const payload = {};
    for (const [key, value] of data.entries()) {
      if (key !== "file") payload[key] = value;
    }

    // Handle file details if uploaded
    if (file && typeof file === "object") {
      // payload.filepath = `/uploads/${file.name}`; 
      const fileUrl = await uploadToS3(file, "contact-us");
      console.log("fileUrl", fileUrl);
      payload.filepath = fileUrl; // Update filepath to S3 URL
      logger.info("📎 Received file:", file.name, file.size, file.type);
    }

    console.log("📩 Received contact form:", payload);
    logger.info(`📩 Received contact form: ${JSON.stringify(payload)}`);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    logger.error(`❌ Error processing form: ${error.message}`);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
