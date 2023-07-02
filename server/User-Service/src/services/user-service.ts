import { IUserRepoFunctionality } from '../utils/Types/dataTypes';

export class userService {
  constructor(private _userRepostory: IUserRepoFunctionality) {}

  public async fetchCurrentUserInformation(id: number) {
    try {
      if (!id && typeof id !== 'number') {
        return {
          status: 400,
          message: 'Invalid ID',
        };
      }

      const currentUserInformation = await this._userRepostory.getCurrentUser(id);
      return {
        status: 200,
        message: currentUserInformation,
      };
    } catch (error) {
      console.log('fetchCurrentUserInformation userService:', error);
      return {
        status: 500,
        message: error,
      };
    }
  }
}
