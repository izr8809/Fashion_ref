import type { NextApiRequest, NextApiResponse } from 'next';

const {
  Hashtag,
  Workspace,
  Reference,
  SavedHashs,
  User,
} = require('../../../models');

interface DeleteMemeberSuccessResponse extends WorkspaceInfo {
  Users: [];
  WorkspaceAdministrators: [];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DeleteMemeberSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const { workspaceId } = req.body;
    const ws = await Workspace.findOne({
      where: { id: workspaceId },
    });
    const targetUser = await User.findOne({
      where: { id: workspaceId },
    });

    await ws.removeUser(targetUser);

    const updatedWs = await Workspace.findOne({
      where: { id: workspaceId },
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
      order: [[Reference, 'createdAt', 'DESC']],
    });

    const response: DeleteMemeberSuccessResponse = {
      id: updatedWs.id,
      name: updatedWs.name,
      isPremium: updatedWs.isPremium,
      code: updatedWs.code,
      References: updatedWs.References,
      Users: updatedWs.Users,
      WorkspaceAdministrators: updatedWs.WorkspaceAdministrators,
    };

    res.json(response);
  } catch (err) {
    console.log(err);
    const response: FailureResponse = {
      data: {
        message: 'deleteMemberFailure',
        error: err,
      },
    };
    res.status(401).send(response);
  }
}
