const { Image } = require("../models");
const fs = require("fs");
const uuid = require("uuid");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3")

const s3 = new S3Client();

async function upload() {
  const images = await Image.findAll();

  await Promise.all(images.map(image => loadAndUpdate(image)));

  return true;
}

async function loadAndUpdate(image) {
  if (image.name || image.src.startsWith("https://")) {
    return;
  }

  const re = /^uploads\/(.+)_\d+(\.\w+)$/;

  const [_, filename, ext] = image.src.match(re);
  const name = filename + ext;

  const file = fs.readFileSync(image.src);
  const key = uuid.v4() + ext;
  const command = new PutObjectCommand({
    Key: key,
    Bucket: "fashion-ref",
    ACL: "public-read",
    Body: file,
  });
  await s3.send(command);
  await image.update({
    name,
    src: `https://fashion-ref.s3.ap-northeast-2.amazonaws.com/${key}`,
  })
}




upload().then(e => console.log(e))