import { NextFunction, Request, Response } from 'express';
import lodash from 'lodash';

import { factory } from '../../utils/Others/factory';

const validateCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //fetch id at authorization header
    const id = req.headers.authorization as string;

    //valdiate header and getting the result
    const authId = factory.getAuthHeaderLogic(id);
    if (authId.status !== 200) {
      return res.status(authId.status).json({data: authId.message})
    }

    //fetch user information by Id
    const result = await factory.userLogic().fetchUserInfo(parseInt(authId.message));
    if (result.status !== 200) {
      return res.status(result.status).json({ data: result.message });
    }

    //merge result using lodash
    lodash.merge(req, { User: result.message });
    next();
  } catch (error) {
    console.log('validateCurrentUser Controller:', error);
    res.status(500).json({ error });
  }
};

export default validateCurrentUser;
