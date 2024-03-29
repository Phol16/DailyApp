import { Request, Response } from 'express';

import { ISignIn, IUser } from '../../utils/Types/dataTypes';
import { factory } from '../../utils/Others/factory';

const AuthServices = factory.authenticationLogic();

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, username, password, image, role } =
      req.body as IUser;

    const userInformaton: IUser = {
      firstName,
      lastName,
      email,
      username,
      password,
      image,
      role,
    };

    const result = await AuthServices.createUserService(userInformaton);

    res.status(result.status).json({ data: result.message });
  } catch (error) {
    console.log('register Controller:', error);
    res.status(500).json({ error });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as ISignIn;

    const result = await AuthServices.signInUser(email, password);

    res.status(result.status).json({ data: result.message });
  } catch (error) {
    console.log('signIn Controller:', error);
    res.status(500).json({ error });
  }
};
