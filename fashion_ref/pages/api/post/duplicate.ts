import type { NextApiRequest, NextApiResponse } from 'next';

const { Hashtag, Reference, Post, Image, User } = require('../../../models');

interface DuplicatePostSuccessResponse extends PostInfo {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DuplicatePostSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.body.id) },
      include: [
        {
          model: Hashtag,
          order: [['createdAt', 'DESC']],
        },
        {
          model: Image,
          order: [['id', 'DESC']],
        },
        {
          model: Reference,
          order: [['createdAt', 'DESC']],
        },
      ],
    });
    if (!post) {
      return res
        .status(403)
        .send({ data: { message: '게시글이 존재하지 않습니다.' } });
    }

    const newPost = await Post.create({
      link: post.link,
      brand: post.brand,
      category: post.category,
      season: post.season,
      reason: post.reason,
      // name: req.body.userName,
      // UserId : req.body.userId,
      name: post.name,
      UserId: post.UserId,
    });

    let hashtags = post.Hashtags;
    const result = await Promise.all(
      hashtags.map((tag: any) =>
        Hashtag.findOrCreate({
          where: { name: tag.name },
        })
      )
    ); // [[노드, true], [리액트, true]]
    await newPost.addHashtags(result.map((v) => v[0]));

    //이미지 복사
    if (Array.isArray(post.Images)) {
      // 이미지를 여러 개
      const images = await Promise.all(
        post.Images.map((image: any) => Image.create({ src: image.src }))
      );
      await newPost.addImages(images);
    } else {
      // 이미지를 하나
      const image = await Image.create({ src: post.Images[0].src });
      await newPost.addImages(image);
    }

    const ref = await Reference.findOne({
      where: { id: req.body.referenceId },
    });

    await newPost.setReference(ref);

    const madePost = await Post.findOne({
      where: { id: newPost.id },
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

    const response: DuplicatePostSuccessResponse = {
      id: madePost.id,
      name: madePost.name,
      link: madePost.link,
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
  } catch (error) {
    const response: FailureResponse = {
      data: {
        message: 'duplicatePostFailure',
        error: error,
      },
    };
    res.status(201).json(response);
    console.error(error);
  }
}
