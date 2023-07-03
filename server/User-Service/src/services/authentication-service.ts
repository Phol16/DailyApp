import {
  IAuthRepoFunctionality,
  IEncryptionFunctionality,
  IUser,
  IAuthServiceFunctionality,
} from '../utils/Types/dataTypes';

export class authenticationService implements IAuthServiceFunctionality {
  constructor(
    private _authenticationRespositiory: IAuthRepoFunctionality,
    private _classEncrypt: IEncryptionFunctionality
  ) {}

  //Register Service
  public async createUserService(values: IUser) {
    try {
      if (!values) {
        return {
          status: 401,
          message: 'Incomplete Data',
        };
      }

      const existingUser = await this._authenticationRespositiory.getUserByEmail(
        values.email
      );
      if (existingUser) {
        return {
          status: 500,
          message: 'User Email Already Exist',
        };
      }

      //encrypt password & check if theres an error in encryption
      const salt = await this._classEncrypt.genSalt();
      const hashedPass = await this._classEncrypt.passwordEncrypt(values.password, salt);
      if (!hashedPass) {
        return {
          status: 401,
          message: 'Incorrect Password',
        };
      }

      //changed password into hashed password
      values.salt = salt;
      values.password = hashedPass;

      const createdUser = await this._authenticationRespositiory.createUser(values);
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
      const result = await this._classEncrypt.passwordDecrypt(
        password,
        existingUser.password
      );
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
      console.log('SignInUser AuthService:', error);
      return {
        status: 500,
        message: error,
      };
    }
  }
}
