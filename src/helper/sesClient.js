import { SESClient } from "@aws-sdk/client-ses";

const REGION = process.env.AWS_REGION;

export const sesClient = new SESClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SES_SECRET_KEY
  }
});
