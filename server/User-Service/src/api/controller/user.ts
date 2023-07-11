import { Request, Response } from 'express';
import lodash from 'lodash';

import { IUser } from '../../utils/Types/dataTypes';
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

export const updateUserInfo = async (req: Request, res: Response) => {
  try {
    let { firstName, lastName, username, image } = req.body as IUser;
    const currentUser = lodash.get(req, 'currentUser') as unknown as IUser;
    if (!currentUser) {
      return res.status(500).json({ data: 'currentUser details are missing' });
    }

    const currentUserId = currentUser.id as number;

    if (!image) {
      image = null;
    }

    const updatedUser = {
      firstName,
      lastName,
      username,
      image,
      email: currentUser.email,
      password: currentUser.password,
      role: currentUser.role,
    };

    const result = await UserServices.updateUserInfo(currentUserId, updatedUser);

    res.status(result.status).json({ data: result.message });
  } catch (error) {
    console.log('UpdateUserInfo Controller:', error);
    res.status(500).json({ error });
  }
};

export const deleteUserInfo = async (req: Request, res: Response) => {
  try {
    const currentUserId = lodash.get(req, 'currentUser.id') as unknown as number;
    if (!currentUserId) {
      res.status(400).json({ data: 'current User Unkown' });
    }

    const result = await UserServices.deleteUserInfo(currentUserId);

    res.status(result.status).json({ data: result.message });
  } catch (error) {
    console.log('DeleteUnserInfo Controller:', error);
    res.status(500).json({ data: 'Something went wrong' });
  }
};
