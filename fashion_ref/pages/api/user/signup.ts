import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt';
import { setSession } from '@/lib/session';
const { User, Workspace} = require("../../../models");


type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {email, name, password} = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);
    const userInfo = await User.findOne({
      where: { email },
    });
    if(userInfo) {
      return res.status(400).send({ data: null, message: "already exist" });
    }

    //회원가입 성공
    const user = await User.create({
      email,
      name,
      password: hashedPassword,
    });
    //private workspace ==> ws_private_{id}
    const workspace = await Workspace.create({
      name : `private_${user.id}`,
      isPremium : 0,
      code :  name + user.id
    })
    await user.addWorkspace(workspace);
    
    const { password : _, ...userWithoutPassword } = user;

    setSession(res, {userId: user.id, name: user.name});
    return res.status(201).json({
      userId: userWithoutPassword.dataValues.id,
      userName: userWithoutPassword.dataValues.name,
      message: "success",
    });
}
