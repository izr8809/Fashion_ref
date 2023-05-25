import type { NextApiRequest, NextApiResponse } from 'next';

const { Hashtag, Post } = require('../../../models');

interface DeletePostSuccessResponse {
  PostId: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DeletePostSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.body.postId) },
      include: [
        {
          model: Hashtag,
        },
      ],
    });

    if (!post) {
      res.status(403).send({ data: { message: '게시글이 없습니다.' } });
    } else {
      // 해시태그 가진 포스팅 하나 남은 경우 헤시태그제거
      const where = {};
      for (let i = 0; i < post.Hashtags.length; i++) {
        const postHasHashtag = await Post.findAll({
          where: { ReferenceId: req.body.referenceId },
          // limit: 24, limit 나중에 줘야함
          include: [
            {
              model: Hashtag,
              where: {
                name: post.Hashtags[i].name,
              },
            },
          ],
        });

        if (postHasHashtag.length == 1) {
          await Hashtag.destroy({
            where: {
              name: post.Hashtags[i].name,
            },
          });
        }
      }

      await Post.destroy({
        where: {
          id: parseInt(req.body.postId),
        },
      });
      const response: DeletePostSuccessResponse = {
        PostId: parseInt(req.body.postId, 10),
      };
      res.status(200).json(response);
    }
  } catch (error) {
    const response: FailureResponse = {
      data: {
        message: 'deletePostFailure',
        error: error,
      },
    };
    res.status(201).json(response);
    console.error(error);
  }
}
