import { Request, Response } from 'express';
import lodash from 'lodash';

import { factory } from '../../utils/Others/factory';

const UserServices = factory.userLogic();

export const getUserInfo = (req: Request, res: Response) => {
  try {
    const currentUser = lodash.get(req, 'currentUser');

    res.status(200).json({ data: currentUser });
  } catch (error) {
    console.log('UserInfo Controller:', error);
    res.status(500).json({ error });
  }
};

//Todo User APIs
