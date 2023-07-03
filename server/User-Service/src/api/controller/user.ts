import { Request, Response } from 'express';
import lodash from 'lodash';

import { factory } from '../../utils/Others/factory';

const UserServices = factory.userLogic();

export const getUserInfo = (req: Request, res: Response) => {
  try {
    const user = lodash.get(req, 'User');

    res.status(200).json({ data: user });
  } catch (error) {
    console.log('UserInfo Controller:', error);
    res.status(500).json({ error });
  }
};

//Todo User APIs
