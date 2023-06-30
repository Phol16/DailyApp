import { Request, Response, NextFunction } from 'express';
import { IUser } from '../../utils/Types/dataTypes';

const validateRegisterInput = (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, username, password } = req.body as IUser;

  if (!firstName || !lastName || !username || !password) {
    return res.status(400).json({ error: 'Missing Details' });
  }

  next();
};

export default validateRegisterInput;
