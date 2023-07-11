import { IPublisherInformation, IResult, IUserService } from '../utils/types';

export class userServices implements IUserService {
  constructor(private _userRepository: IUserService) {}

  public async getUserByEmail(email: string): Promise<IResult> {
    try {
      if (!email) {
        return {
          status: 404,
          message: 'Missing email',
        };
      }

      const result = await this._userRepository.getUserByEmail(email);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('getUserByEmail Service:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async createUser(values: IPublisherInformation): Promise<IResult> {
    try {
      if (!values || Object.keys(values).length == 0) {
        return {
          status: 404,
          message: 'Missing details',
        };
      }

      const result = await this._userRepository.createUser(values);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('createUser Service:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async updateUser(id: number, values: IPublisherInformation): Promise<IResult> {
    try {
      if (!id || !values || Object.keys(values).length === 0) {
        if (!id) {
          return {
            status: 404,
            message: 'Missing Id',
          };
        }
        return {
          status: 404,
          message: 'Missing details',
        };
      }

      const result = await this._userRepository.updateUser(id, values);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('updateUser Service:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async deleteUser(id: number): Promise<IResult> {
    try {
      if (!id) {
        return {
          status: 404,
          message: 'Missing Id',
        };
      }

      const result = await this._userRepository.deleteUser(id);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('deleteUser', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }
}
