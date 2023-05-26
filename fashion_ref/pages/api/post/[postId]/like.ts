import { getSession } from '@/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next';

const { Post } = require('../../../../models');

interface LikePostSuccessResponse {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LikePostSuccessResponse | FailureResponse>
) {
  if (req.method !== 'PATCH') {
    return;
  }

  const { postId } = req.query;
  const { userId } = getSession(req);

  try {
    const post = await Post.findOne({
      where: { id: parseInt(postId as string) },
    });
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.');
    }
    await post.addLikers(userId);
    const response: LikePostSuccessResponse = {
      PostId: post.id,
    };
    res.json(response);
  } catch (error) {
    const response: FailureResponse = {
      data: {
        message: 'likePostFailure',
        error: error,
      },
    };
    res.status(201).json(response);
    console.error(error);
  }
}
