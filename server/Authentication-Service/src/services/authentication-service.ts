import { authenticationRepository } from '../database/authentication-database';
import { genSalt, passwordDecrypt, passwordEncrypt } from '../utils/Others/encryption';
import { IUser } from '../utils/Types/authenticationTypes';

export class AuthenticationService {
  constructor(private _authenticationRespositiory: authenticationRepository) {}

  //Register Service
  public async createUser(values: IUser) {
    try {
      if (!values) {
        return 'Incomplete Data';
      }

      //encrypt password & check if theres an error in encryption
      const salt = await genSalt();
      const hashedPass = await passwordEncrypt(values.password, salt);
      if (!hashedPass) {
        return 'Password not hashed';
      }

      //changed password into hashed password
      values.salt = salt;
      values.password = hashedPass;

      return await this._authenticationRespositiory.createUser_Repo(values);
    } catch (error) {
      console.log('createUser AuthService:', error);
    }
  }

  //Sign In Service
  public async signInUser(email: string, password: string) {
    try {
      //checks if username and password have value
      if (!email || !password) {
        return 'Incomplete Data';
      }

      //fetch data from the database
      const existingUser = await this._authenticationRespositiory.getUserByEmail(email);
      //checks if user exists
      if (!existingUser) {
        return 'User does not exist';
      }

      //compare the password
      const result = await passwordDecrypt(password, existingUser.password);
      if (!result) {
        return 'Incorrect Password';
      }

      return existingUser;
    } catch (error) {
      console.log('SignIn User AuthService:', error);
    }
  }
}
