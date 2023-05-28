import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@/lib/session';
const {
  User,
  Hashtag,
  Workspace,
  Reference,
  SavedHashs,
  Notification,
} = require('../../../models');

interface LoadUserSuccessResponse extends UserInfo {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoadUserSuccessResponse | FailureResponse>
) {
  if (req.method !== 'GET') {
    return;
  }

  const { userId } = getSession(req);

  try {
    if (userId) {
      const userInfo = await User.findOne({
        where: { id: userId },
        include: [
          {
            model: Workspace,
            order: [['id', 'DESC']],
            include: [
              {
                model: Reference,
                order: [['createdAt', 'ASC']],
                include: [
                  {
                    model: Hashtag,
                    order: [['createdAt', 'DESC']],
                  },
                  {
                    model: SavedHashs,
                    order: [['createdAt', 'DESC']],
                  },
                ],
              },
              {
                model: User,
                order: [['createdAt', 'DESC']],
              },
              {
                model: User,
                as: 'WorkspaceAdministrators',
                order: [['createdAt', 'DESC']],
              },
            ],
          },
          {
            model: Notification,
            order: [['createdAt', 'DESC']],
          },
        ],
        order: [[Workspace, Reference, 'createdAt', 'DESC']],
      });

      const response: LoadUserSuccessResponse = {
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
        Workspaces: userInfo.Workspaces,
        Notifications: userInfo.Notifications,
        lastBoardId: userInfo.lastBoardId,
        lastReferenceId: userInfo.lastReferenceId,
        lastWorkspaceId: userInfo.lastWorkspaceId,
      };
      res.json(response);
    } else {
      const response: FailureResponse = {
        data: {
          message: 'loadUserFailure',
          error: null,
        },
      };
      res.status(201).json(response);
    }
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'loadUserFailure',
        error: null,
      },
    };
    res.status(400).json(response);
  }
}
