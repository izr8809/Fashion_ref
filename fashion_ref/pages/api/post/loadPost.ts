import type { NextApiRequest, NextApiResponse } from 'next';
import { Sequelize, Op } from 'sequelize';

const { Hashtag, Post, User, Image } = require('../../../models');

interface LoadPostSuccessResponse {
  posts: PostInfo[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoadPostSuccessResponse | FailureResponse>
) {
  if (req.method !== 'GET') {
    return;
  }
  try {
    if (req.query.sort === 'likes') {
      const limit = 24;
      const order = ((req.query.order || 'desc') as string).toUpperCase();
      const page = parseInt((req.query.page || '1') as string);
      const postsByLike = await Post.findAll({
        include: [
          {
            model: User,
            as: 'Likers',
            attributes: [],
          },
        ],
        attributes: [
          [Sequelize.fn('COUNT', Sequelize.col('Likers.id')), 'likes'],
          'id',
          // ...Object.keys(Post.getAttributes()),
        ],
        subQuery: false,
        group: [Sequelize.col('Post.id')],
        order: [['likes', order]],
        offset: (page - 1) * limit,
        limit,
      });

      const postIds = postsByLike.map((e: any) => e.id);

      const posts = await Post.findAll({
        where: { ReferenceId: req.query.referenceId },
        include: [
          {
            model: Image,
            order: [['id', 'DESC']],
          },
          {
            model: Hashtag,
            order: [['createdAt', 'DESC']],
            attributes: ['name'],
            through: { attributes: [] },
          },
          {
            model: User,
            as: 'Likers',
            attributes: ['name', 'id'],
            through: { attributes: [] },
          },
        ],
        order: Sequelize.literal(`FIELD(Post.id, ${postIds.join(',')})`),
      });

      const response: LoadPostSuccessResponse = {
        posts: posts,
      };
      res.status(200).json(response);
      return;
    }

    var where: any = { ReferenceId: req.query.referenceId };
    if (parseInt(req.query.lastId as string, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId as string, 10) };
    }
    const posts = await Post.findAll({
      where: where,
      limit: 24,
      order: [['createdAt', 'DESC']],
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
      ],
    });

    const response: LoadPostSuccessResponse = {
      posts: posts,
    };
    res.status(200).json(response);
  } catch (error) {
    const response: FailureResponse = {
      data: {
        error: error,
        message: 'loadPostFailure',
      },
    };
    res.status(201).json(response);
    console.error(error);
  }
}
