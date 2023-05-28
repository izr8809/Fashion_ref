import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@/lib/session';
const { User, Workspace, Notification } = require('../../../models');

interface RequestDenySuccessResponse {
  Notifications: {
    notitype: string;
    content: string;
    workspaceId: number;
    From: number;
  }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RequestDenySuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  const { id } = req.body;

  const noti = await Notification.findOne({
    where: { id },
  });

  const ws = await Workspace.findOne({
    where: { id: noti.workspaceId },
  });

  const fromUser = await User.findOne({
    where: { id: noti.From },
  });

  const { userId } = getSession(req);

  const content = ws.name + ' 가입이 거절되었습니다';
  const newNoti = await Notification.create({
    From: userId,
    content: content,
    workspaceId: -1,
    notitype: 3,
  });
  await newNoti.addUser(fromUser);
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
  const response: RequestDenySuccessResponse = {
    Notifications: userInfo.Notifications,
  };

  res.json(response);
  try {
  } catch (err) {
    console.log(err);
    const response: FailureResponse = {
      data: {
        message: 'requestDenyFailure',
      },
    };
    res.status(400).send(response);
  }
}
