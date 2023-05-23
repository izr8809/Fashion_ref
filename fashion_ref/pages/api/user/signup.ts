import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { setSession } from '@/lib/session';

const { User, Workspace } = require('../../../models');

interface SignupSuccessResponse {
  userId: number;
  userName: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignupSuccessResponse | FailureResponse>
) {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const userInfo = await User.findOne({
      where: { email },
    });
    if (!userInfo) {
      //회원가입 성공
      const user = await User.create({
        email,
        name,
        password: hashedPassword,
      });
      //private workspace ==> ws_private_{id}
      const workspace = await Workspace.create({
        name: `private_${user.id}`,
        isPremium: 0,
        code: req.body.name + user.id,
      });
      await user.addWorkspace(workspace);
      await workspace.addWorkspaceAdministrators(user);

      const { password, ...userWithoutPassword } = user;
      setSession(res, { userId: user.id, name: user.name });

      const response: SignupSuccessResponse = {
        userId: userWithoutPassword.dataValues.id,
        userName: userWithoutPassword.dataValues.name,
      };
      res.status(201).json(response);
    } else {
      //이미 존재하는 ID
      res.status(400).send({ data: { message: 'signUpFailure' } });
    }
  } catch (err) {
    console.error(err);
  }
}
