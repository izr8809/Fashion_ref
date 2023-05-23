import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import s3 from '@/lib/aws-config';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { v4 as uuidv4 } from 'uuid';
import { getSession } from '@/lib/session';

const { User, Post, Hashtag, Image, Reference } = require('../../../models');

interface NextApiRequestExtended extends NextApiRequest {
  file: any;
  files: any;
}

interface AddPostSuccessResponse extends PostInfo {}

const router = nextConnect<NextApiRequestExtended, NextApiResponse>();

const upload = multer({
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

router.use(upload.array('image')).post(async (req, res) => {
  try {
    const { name, userId } = getSession(req);
    if (!req.files) {
      return res.send({ data: { message: 'no file' } });
    }

    const { link, brand, category, season, reason } = req.body;

    let hashtags = await req.body.hashtag.match(/#[^\s#]+/g);
    const post = await Post.create({
      link,
      brand,
      category,
      season,
      reason,
      name,
      UserId: userId,
    });

    if (!hashtags) {
      hashtags = [];
    }

    hashtags.push('#' + category); //category
    hashtags.push('#' + season); //season
    hashtags.push('#' + brand); //brand
    hashtags.push('#' + name); // userName

    const result = await Promise.all(
      hashtags.map((tag: any) =>
        Hashtag.findOrCreate({
          where: { name: tag.slice(1).toUpperCase() },
        })
      )
    ); // [[노드, true], [리액트, true]]

    //hash 중복제거
    const editedResult = result.filter(
      (v, i) => result.findIndex((x) => x[0].name === v[0].name) === i
    );

    await post.addHashtags(editedResult.map((v) => v[0]));

    if (Array.isArray(req.files)) {
      // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png]
      const images = await Promise.all(
        req.files.map((image) =>
          Image.create({ src: image.location, name: image.originalname })
        )
      );
      await post.addImages(images);
    }

    const ref = await Reference.findOne({
      where: { id: parseInt(req.body.referenceId, 10) },
    });

    await post.setReference(ref);

    ref.addHashtags(editedResult.map((v) => v[0])); // 내일부터 다시 해

    const madePost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
          order: [['id', 'DESC']],
        },
        {
          model: Hashtag,
          order: [['createdAt', 'DESC']],
        },
        {
          model: User,
          as: 'Likers',
        },
        {
          model: Reference,
          order: [['createdAt', 'DESC']],
        },
      ],
    });
    const response: AddPostSuccessResponse = {
      id: madePost.id,
      name: madePost.name,
      brand: madePost.brand,
      category: madePost.category,
      season: madePost.season,
      userId: madePost.userId,
      ReferenceId: madePost.ReferenceId,
      Images: madePost.Images,
      Hashtags: madePost.Hashtags,
      Likers: madePost.Likers,
      References: madePost.References,
      reason: madePost.reason,
    };

    res.json(response);
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'addPostFailure',
        error: err,
      },
    };
    res.status(400).send(response);
    console.log(err);
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default router;
