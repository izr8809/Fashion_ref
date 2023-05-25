import type { NextApiRequest, NextApiResponse } from 'next';
import { Op } from 'sequelize';
const { User, Post, Hashtag, Reference, Image } = require('../../../models');

interface HashtagSearchSuccessResponse {
  posts: PostInfo[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HashtagSearchSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const hashtags = req.body.hashtags.match(/#[^\s#]+/g);
    var hashtagjson: any = [];
    for (let i = 0; i < hashtags.length; i++) {
      hashtagjson = [...hashtagjson, { name: hashtags[i].split('#')[1] }];
    }
    var where = {};
    const posts = await Post.findAll({
      where: {},
      // limit: 24, limit 나중에 줘야함
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Hashtag,
          where: {
            [Op.or]: hashtagjson,
          },
          order: [['createdAt', 'DESC']],
        },
        {
          model: Image,
          order: [['id', 'DESC']],
        },
        {
          model: User,
          as: 'Likers',
        },
        {
          model: Reference,
          order: [['createdAt', 'DESC']],
          where: { id: parseInt(req.body.referenceId, 10) },
        },
      ],
    });

    var PostIdlist: any = [];
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].Hashtags.length == hashtags.length)
        PostIdlist = [...PostIdlist, { id: posts[i].id }];
    }
    where = {};
    const postsAllHashtags = await Post.findAll({
      where: {
        [Op.or]: PostIdlist,
      },
      // limit: 100,
      order: [['createdAt', 'DESC']],
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
          model: User,
          as: 'Likers',
        },
        {
          model: Reference,
          order: [['createdAt', 'DESC']],
          where: { id: parseInt(req.body.referenceId, 10) },
        },
      ],
    });
    const response: HashtagSearchSuccessResponse = {
      posts: postsAllHashtags,
    };

    res.status(200).json(response);
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'hashtagSearchFailure',
        error: err,
      },
    };
    res.status(201).json(response);

    console.log(err);
  }
}
