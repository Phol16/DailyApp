import { Request, Response } from 'express';
import { ISignIn, IUser } from '../../utils/Types/dataTypes';
import { factory } from '../../utils/Others/factory';

const service = factory.authenticationLogic();

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, username, password, image } = req.body as IUser;

    const userInformaton: IUser = {
      firstName,
      lastName,
      email,
      username,
      password,
      image,
    };

    const result = await service.createUser(userInformaton);

    res.status(result.status).json({ data: result.message });
  } catch (error) {
    console.log('registerController:', error);
    res.status(500).json({ error });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as ISignIn;

    const result = await service.signInUser(email, password);
    res.status(result.status).json({ data: result.message });
  } catch (error) {
    console.log('signInController:', error);
    res.status(500).json({ error });
  }
};
