import type { NextApiRequest, NextApiResponse } from 'next';

const { Workspace, Reference, SavedHashs } = require('../../../models');

interface AddReferenceSuccessResponse extends WorkspaceInfo {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AddReferenceSuccessResponse | FailureResponse>
) {
  try {
    const savedHash = await SavedHashs.findOne({
      id: req.body.id,
    });

    if (savedHash) {
      await SavedHashs.destroy({
        where: { id: req.body.id },
      });
    }

    const ws = await Workspace.findOne({
      where: { id: req.body.workspaceId },
      include: [
        {
          model: Reference,
          order: [['createdAt', 'ASC']],
          include: [
            {
              model: SavedHashs,
              order: [['createdAt', 'DESC']],
            },
          ],
        },
      ],
      order: [[Reference, 'createdAt', 'DESC']],
    });

    const response: AddReferenceSuccessResponse = {
      id: ws.id,
      name: ws.name,
      isPremium: ws.isPremium,
      code: ws.code,
      References: ws.References,
    };

    res.json(response);
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'deleteSavedTagsFailure',
        error: err,
      },
    };
    res.status(401).send(response);
    console.log(err);
  }
}
