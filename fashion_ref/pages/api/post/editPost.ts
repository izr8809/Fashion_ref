import { upload } from '@/lib/aws-config';
import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

const { Post, Hashtag, Image, Reference } = require('../../../models');

interface NextApiRequestExtended extends NextApiRequest {
  file: any;
  files: any;
}

interface EditPostSuccessResponse extends PostInfo {}

const router = nextConnect<NextApiRequestExtended, NextApiResponse>();

router.use(upload.array('image')).post(async (req, res) => {
  try {
    const updatePost = await Post.update(
      {
        link: req.body.link,
        brand: req.body.brand,
        category: req.body.category,
        season: req.body.season,
        reason: req.body.reason,
      },
      {
        where: { id: parseInt(req.body.postId, 10) },
      }
    );
    const post = await Post.findOne({
      where: { id: parseInt(req.body.postId, 10) },
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
          model: Reference,
          order: [['createdAt', 'DESC']],
        },
      ],
    });

    const ref = await Reference.findOne({
      where: { id: req.body.referenceId },
      include: [
        {
          model: Hashtag,
          order: [['createdAt', 'DESC']],
        },
      ],
    });

    //remove and add hashtags
    let hashtags = await post.getHashtags();
    await post.removeHashtags(hashtags.map((v: any) => v));
    await ref.removeHashtags(hashtags.map((v: any) => v));

    //add hashtags again
    hashtags = (await req.body.hashtag.match(/#[^\s#]+/g)) || [];
    hashtags.push('#' + req.body.category); //category
    hashtags.push('#' + req.body.season); //season
    hashtags.push('#' + req.body.brand); //brand
    hashtags.push('#' + req.body.name); // userName
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
    await ref.addHashtags(editedResult.map((v) => v[0]));

    //remove imagespath
    let images = await post.getImages();
    await post.removeImages(images.map((v: any) => v));

    //add imagepath
    if (req.body.imagePath) {
      if (Array.isArray(req.body.imagePath)) {
        // 이미지를 여러 개
        const images = await Promise.all(
          req.body.imagePath.map((image: string) =>
            Image.create({ src: image })
          )
        );
        await post.addImages(images);
      } else {
        // 이미지를 하나
        const image = await Image.create({ src: req.body.imagePath });
        await post.addImages(image);
      }
    }

    //add imagepath
    if (Array.isArray(req.files)) {
      // 이미지를 여러 개
      const images = await Promise.all(
        req.files.map((image) =>
          Image.create({ src: image.location, name: image.originalname })
        )
      );
      await post.addImages(images);
    } else {
      // 이미지를 하나
      if (req.files) {
        const image = await Image.create({ src: (req.files as any)[0].path });
        await post.addImages(image);
      }
    }

    //다시 한번 가져오기
    const newPost = await Post.findOne({
      where: { id: parseInt(req.body.postId, 10) },
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
          model: Reference,
          order: [['createdAt', 'DESC']],
        },
      ],
    });

    const response: EditPostSuccessResponse = {
      id: newPost.id,
      name: newPost.name,
      link: newPost.link,
      brand: newPost.brand,
      category: newPost.category,
      season: newPost.season,
      userId: newPost.userId,
      ReferenceId: newPost.ReferenceId,
      Images: newPost.Images,
      Hashtags: newPost.Hashtags,
      Likers: newPost.Likers,
      References: newPost.References,
      reason: newPost.reason,
    };

    res.json(response);
  } catch (error) {
    const response: FailureResponse = {
      data: {
        message: 'editPostFailure',
        error: error,
      },
    };
    res.status(201).send(response);
    console.error(error);
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default router;
