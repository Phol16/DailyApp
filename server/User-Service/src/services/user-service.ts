import {
  IUserRepoFunctionality,
  IUserServiceFunctionality,
  Iresult,
} from '../utils/Types/dataTypes';

export class userService implements IUserServiceFunctionality {
  constructor(private _userRepostory: IUserRepoFunctionality) {}

  public async fetchUserInfo(id: number): Promise<Iresult> {
    try {
      if (!id) {
        return {
          status: 404,
          message: 'Missing Id',
        };
      }

      const result = await this._userRepostory.getCurrentUser(id);
      if (!result) {
        return {
          status: 404,
          message: 'User does not exist',
        };
      }

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('fetchUserInfo userService:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async updateUserInfo(): Promise<Iresult> {
    //Todo updateUserInfo codes
    throw new Error('Method not implemented.');
  }

  public async deleteUserInfo(): Promise<Iresult> {
    //Todo deleteUserInfo codes
    throw new Error('Method not implemented.');
  }
}
