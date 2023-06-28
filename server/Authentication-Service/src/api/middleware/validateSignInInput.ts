import { Request, Response, NextFunction } from 'express';

const validateSignInInput = async(req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as { email: string; password: string };
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing Details' });
  }
  next();
};

export default validateSignInInput;
