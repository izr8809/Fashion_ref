import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@/lib/session';
const { User, Notification } = require('../../../models');

interface DeleteNotiSuccessResponse {
  Notifications: {
    notitype: string;
    content: string;
    workspaceId: number;
    From: number;
  }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DeleteNotiSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  const { userId } = getSession(req);
  const { id } = req.body;

  const noti = await Notification.findOne({
    where: { id },
  });
  await Notification.destroy({
    where: { id: noti.id },
  });

  const userInfo = await User.findOne({
    where: { id: userId },
    include: [
      {
        model: Notification,
        order: [['createdAt', 'DESC']],
      },
    ],
  });
  const response: DeleteNotiSuccessResponse = {
    Notifications: userInfo.Notifications,
  };
  res.json(response);
  try {
  } catch (err) {
    console.log(err);
    const response: FailureResponse = {
      data: {
        message: 'deleteNotiFailure',
        error: err,
      },
    };
    res.status(400).send(response);
  }
}
