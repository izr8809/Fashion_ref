import { S3Client } from '@aws-sdk/client-s3';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { v4 as uuidv4 } from 'uuid';

const s3 = new S3Client({ region: process.env.AWS_S3_REGION });

export const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET!,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const [_, ext]: any = file.originalname.match(/(\.\w+)$/);
      const key = uuidv4() + ext;
      cb(null, key);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});
