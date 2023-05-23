import { S3Client } from '@aws-sdk/client-s3';

export default new S3Client({ region: process.env.AWS_S3_REGION });
