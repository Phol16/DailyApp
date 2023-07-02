import { Request, Response } from 'express';

import { factory } from '../../utils/Others/factory';

const UserServices = factory.userLogic();

const validateCurrentUser = async (req: Request, res: Response) => {
  try {
    const id = req.headers.authorization as string;

    const authId = factory.getAuthHeaderLogic(id);
    if (authId.status !== 200) {
      return { error: authId.message };
    }

    const result = await UserServices.fetchCurrentUserInformation(
      parseInt(authId.message)
    );

  } catch (error) {
    console.log('currentUserController:', error);
    res.status(500).json({ error });
  }
};

export default validateCurrentUser;
