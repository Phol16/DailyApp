import {
  IUser,
  IUserRepoFunctionality,
  IUserServiceFunctionality,
  Iresult,
} from '../utils/Types/dataTypes';

export class userService implements IUserServiceFunctionality {
  constructor(private _userRepository: IUserRepoFunctionality) {}

  //fetch user by Id Service
  public async fetchUserInfo(id: number): Promise<Iresult> {
    try {
      //check if id has data
      if (!id) {
        return {
          status: 404,
          message: 'Missing Id',
        };
      }

      //fetching user from database & check if user exist
      const result = await this._userRepository.getCurrentUser(id);
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

  //update user information Service
  public async updateUserInfo(id: number, value: IUser): Promise<Iresult> {
    try {
      //check if id has data
      if (!id) {
        return {
          status: 400,
          message: 'Invalid Id',
        };
      }

      // check if value has data
      if (!value) {
        return {
          status: 400,
          message: 'Invalid User Details',
        };
      }

      //updating user in database & check if update was successful
      const result = await this._userRepository.udapteUser(id, value);
      if (!result) {
        return {
          status: 400,
          message: 'Something went wrong when updating',
        };
      }

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.error('updateUserInfo userService:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  //delete user information Service
  public async deleteUserInfo(id: number): Promise<Iresult> {
    try {
      //check if id has data
      if (!id) {
        return {
          status: 400,
          message: 'Invalid Id',
        };
      }

      //deleting user from database
      const result = await this._userRepository.deleteUser(id);
      if (!result) {
        return {
          status: 400,
          message: 'Something went wrong when deleting',
        };
      }

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('deleteUserInfo userService:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }
}
