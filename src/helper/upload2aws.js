import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import crypto from "crypto";

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

/**
 * Uploads a file buffer to S3.
 * @param {Object} file - File object from formData.get('file')
 * @param {string} folder - Optional folder name in S3 bucket
 * @returns {Promise<string>} Public URL of uploaded file
 */
export async function uploadToS3(file, folder = "uploads") {
    if (!file || typeof file !== "object") {
        throw new Error("Invalid file provided");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = file.name.split(".").pop();
    const fileName = `${crypto.randomBytes(16).toString("hex")}.${ext}`;

    const key = `${folder}/${fileName}`;

    const uploadParams = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: file.type,
        // ACL: "public-read"
    };

    await s3.send(new PutObjectCommand(uploadParams));

    return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
}
