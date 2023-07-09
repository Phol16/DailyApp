import { IPublisherInformation, IResult, IUserService } from '../utils/types';

export class userServices implements IUserService {
  constructor(private _userRepository: IUserService){}

  getUserByEmail(email: string): Promise<IResult> {
    throw new Error('Method not implemented.');
  }
  createUser(values: IPublisherInformation): Promise<IResult> {
    throw new Error('Method not implemented.');
  }
  updateUser(id: number, values: IPublisherInformation): Promise<IResult> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: number): Promise<IResult> {
    throw new Error('Method not implemented.');
  }
}
