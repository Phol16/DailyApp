import { Request, Response } from 'express';
import { authenticationRepository } from '../../database/authentication-database';
import { AuthenticationService } from '../../services/authentication-service';
import { IUser } from '../../utils/Types/authenticationTypes';

const database = new authenticationRepository();
const service = new AuthenticationService(database);

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
    res.json({ result });
  } catch (error) {
    console.log('registerController:', error);
    res.status(500).json({ error });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as { email: string; password: string };

    const result = await service.signInUser(email, password);
    res.json({ result });
  } catch (error) {
    console.log('signInController:', error);
    res.status(500).json({ error });
  }
};
