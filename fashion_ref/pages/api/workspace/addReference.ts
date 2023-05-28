import type { NextApiRequest, NextApiResponse } from 'next';

const {
  Hashtag,
  Workspace,
  Reference,
  SavedHashs,
  User,
} = require('../../../models');

interface AddReferenceSuccessResponse extends WorkspaceInfo {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AddReferenceSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }
  try {
    const workspaceId = parseInt(req.body.workspaceId);

    const ws = await Workspace.findOne({
      where: { id: workspaceId },
    });

    const reference = await Reference.create({
      name: req.body.name,
    });

    await reference.setWorkspace(ws);

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
          model : User,
        }
      ],
      order: [[Reference, 'createdAt', 'DESC']],
    });
    const response: AddReferenceSuccessResponse = {
      id: updatedWs.id,
      name: updatedWs.name,
      isPremium: updatedWs.isPremium,
      code: updatedWs.code,
      Users : updatedWs.Users,
      References: updatedWs.References,
    };

    res.json(response);
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'addReferenceFailure',
        error: err,
      },
    };
    res.status(401).send(response);
    console.log(err);
  }
}
