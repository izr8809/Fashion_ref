import type { NextApiRequest, NextApiResponse } from 'next';

const { Hashtag, Reference } = require('../../../models');

interface GetHashtagsSuccessResponse {
  hashtags: {
    id: number;
    name: string;
    References: {
      id: number;
      name: string;
      WorkspaceId: number;
    }[];
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetHashtagsSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }
  try {
    const where = {};
    const hashtags = await Hashtag.findAll({
      where,
      // limit: 10,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Reference,
          where: { id: parseInt(req.body.referenceId, 10) },
        },
      ],
    });
    res.status(200).json({ hashtags });
  } catch (error) {
    const response: FailureResponse = {
      data: {
        message: 'getHashtagsFailure',
        error: error,
      },
    };
    res.status(400).send(response);
    console.error(error);
  }
}
