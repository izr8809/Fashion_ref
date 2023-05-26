import { getSession } from '@/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next';

const { Post } = require('../../../../models');

interface UnlikePostSuccessResponse {
  PostId: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UnlikePostSuccessResponse | FailureResponse>
) {
  if (req.method !== 'DELETE') {
    return;
  }

  const { postId } = req.query;

  const { userId } = getSession(req);

  try {
    const post = await Post.findOne({
      where: { id: parseInt(postId as string) },
    });
    if (!post) {
      return res
        .status(403)
        .send({ data: { message: '게시글이 존재하지 않습니다.' } });
    }
    await post.removeLikers(userId);
    const response: UnlikePostSuccessResponse = {
      PostId: post.id,
    };
    res.json(response);
  } catch (error) {
    const response: FailureResponse = {
      data: {
        message: 'unlikePostFailure',
        error: error,
      },
    };
    res.status(201).json(response);
    console.error(error);
  }
}
