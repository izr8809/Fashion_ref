import type { NextApiRequest, NextApiResponse } from 'next';
import { destroySession, getSession } from '@/lib/session';

interface LogoutSuccessResponse {
  data: {
    message: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LogoutSuccessResponse | FailureResponse>
) {
  if (req.method !== 'GET') {
    return;
  }

  const { userId } = getSession(req);

  if (!userId) {
    const response: FailureResponse = {
      data: {
        message: 'logoutFailure',
      },
    };
    res.status(400).send(response);
  } else {
    destroySession(res);
    const response: LogoutSuccessResponse = {
      data: {
        message: 'ok',
      },
    };
    res.status(200).json(response);
  }
}
