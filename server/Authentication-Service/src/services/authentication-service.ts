import { genSalt, passwordDecrypt, passwordEncrypt } from '../utils/Others/encryption';
import { IAuthentication, IUser } from '../utils/Types/authenticationTypes';

export class AuthenticationService {
  constructor(private _authenticationRespositiory: IAuthentication) {}

  //Register Service
  public async createUser(values: IUser) {
    try {
      if (!values) {
        return {
          status: 401,
          message: 'Incomplete Data',
        };
      }

      //encrypt password & check if theres an error in encryption
      const salt = await genSalt();
      const hashedPass = await passwordEncrypt(values.password, salt);
      if (!hashedPass) {
        return {
          status: 401,
          message: 'Incorrect Password',
        };
      }

      //changed password into hashed password
      values.salt = salt;
      values.password = hashedPass;

      const createdUser = await this._authenticationRespositiory.createUser_Repo(values);
      return {
        status: 200,
        message: createdUser,
      };
    } catch (error) {
      console.log('createUser AuthService:', error);
      return {
        status: 500,
        message: error,
      };
    }
  }

  //Sign In Service
  public async signInUser(email: string, password: string) {
    try {
      //checks if username and password have value
      if (!email || !password) {
        return {
          status: 401,
          message: 'Incomplete Data',
        };
      }

      //fetch data from the database
      const existingUser = await this._authenticationRespositiory.getUserByEmail(email);
      //checks if user exists
      if (!existingUser) {
        return {
          status: 401,
          message: 'User does not exist',
        };
      }

      //compare the password
      const result = await passwordDecrypt(password, existingUser.password);
      if (!result) {
        return {
          status: 401,
          message: 'Incorrect Password',
        };
      }

      return {
        status: 200,
        message: existingUser,
      };
    } catch (error) {
      console.log('SignIn User AuthService:', error);
      return {
        status: 500,
        message: error,
      };
    }
  }
}
