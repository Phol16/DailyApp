import { Request, Response } from 'express';
import { factory } from '../../utils/Others/factory';

const UserServices = factory.userLogic();

export const currentUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body as { id: number }; //TBD(body || header)

    const result = await UserServices.fetchCurrentUserInformation(id);

    res.status(result.status).json({ data: result.message });
  } catch (error) {
    console.log('currentUserController:', error);
    res.status(500).json({ error });
  }
};
