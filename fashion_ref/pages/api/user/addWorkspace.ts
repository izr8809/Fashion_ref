import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@/lib/session';
const {
  User,
  Hashtag,
  Workspace,
  Reference,
  SavedHashs,
} = require('../../../models');

interface AddWorkspaceSuccessResponse extends UserInfo {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AddWorkspaceSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  const { userId } = getSession(req);

  try {
    if (req.body.name) {
      const workspace = await Workspace.findOne({
        where: { name: req.body.name },
      });
      if (workspace) {
        res.status(400).send({ data: { message: 'already exist' } });
      } else {
        const newWorkspace = await Workspace.create({
          name: req.body.name,
          isPremium: false,
          code: req.body.name + Math.floor(Math.random() * 10000),
        });
        const user = await User.findOne({
          where: { id: userId },
        });

        await newWorkspace.addUser(user);
        await newWorkspace.addWorkspaceAdministrators(user);

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
          ],
          order: [[Workspace, Reference, 'createdAt', 'DESC']],
        });
        const response: AddWorkspaceSuccessResponse = {
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
      }
    } else {
      const response: FailureResponse = {
        data: {
          message: 'addWorkspaceFailure',
        },
      };
      res.status(400).send(response);
    }
  } catch (err) {
    console.log(err);
    const response: FailureResponse = {
      data: {
        message: 'addWorkspaceFailure',
        error: err,
      },
    };
    res.status(400).send(response);
  }
}
