import { getSession } from '@/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next';

const { Hashtag, Post, User, Image } = require('../../../models');

interface GetUserPostSuccessResponse {
  posts: PostInfo[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetUserPostSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }
  const { userId } = getSession(req);

  //login 상태일때만
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
          },
          // {
          //   model: Workspace,
          //   where:{ id: parseInt(req.body.workspaceId, 10)},
          //   order: [["createdAt", "DESC"]],
          // }
        ],
      });

      const response: GetUserPostSuccessResponse = {
        posts: posts,
      };

      res.json(response);
    } catch (err) {
      const response: FailureResponse = {
        data: {
          message: 'getUserPostFailure',
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
