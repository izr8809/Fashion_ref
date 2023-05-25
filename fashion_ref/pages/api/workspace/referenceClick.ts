import { getSession } from '@/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next';

const { User } = require('../../../models');

interface ReferenceClickSuccessResponse {
  referenceId: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReferenceClickSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const { userId } = getSession(req);
    const { referenceId } = req.body;

    const updatedUser = await User.update(
      {
        lastWorkspaceId: req.body.workspaceId,
        lastReferenceId: req.body.referenceId,
      },
      {
        where: { id: userId },
      }
    );

    const response: ReferenceClickSuccessResponse = {
      referenceId,
    };
    res.json(response);
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'referenceClickFailure',
        error: err,
      },
    };
    res.status(401).send(response);
    console.log(err);
  }
}
