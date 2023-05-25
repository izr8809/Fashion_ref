import { getSession } from '@/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next';

const { Hashtag, Reference, Post, User } = require('../../../models');

interface GetUserLikedPostSuccessResponse {
  posts: PostInfo[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetUserLikedPostSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  //login 상태일때만
  const { userId } = getSession(req);
  if (userId) {
    try {
      var where = {};
      const posts = await Post.findAll({
        where: {
          UserId: userId,
          ReferenceId: req.body.referenceId,
        },
        // limit: 24, limit 나중에 줘야함
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
            where: {
              id: userId,
            },
          },
          {
            model: Reference,
            where: { id: parseInt(req.body.referenceId, 10) },
            order: [['createdAt', 'DESC']],
          },
        ],
      });
      const response: GetUserLikedPostSuccessResponse = {
        posts: posts,
      };
      res.status(200).json(response);
    } catch (err) {
      const response: FailureResponse = {
        data: {
          message: 'getUserLikedPostFailure',
          error: err,
        },
      };
      res.status(201).send(response);
      console.log(err);
    }
  } else {
    const response: FailureResponse = {
      data: {
        message: 'notLoggedIn',
      },
    };
    res.status(404).json(response);
  }
}
