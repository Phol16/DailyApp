import { Request, Response, NextFunction } from 'express';

import { ISignIn } from '../../utils/Types/dataTypes';

const validateSignInInput = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as ISignIn;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing Details' });
  }

  next();
};

export default validateSignInInput;
