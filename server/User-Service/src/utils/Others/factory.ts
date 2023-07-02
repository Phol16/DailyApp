import { authenticationRepository } from '../../database/authentication-database';
import { userRepository } from '../../database/user-database';

import { authenticationService } from '../../services/authentication-service';
import { userService } from '../../services/user-service';
import { passEncryption } from './logics/encryption';
import getAuthHeader from './logics/getAuthHeader';

import {
  IAuthRepoFunctionality,
  IAuthServiceFunctionality,
  IEncryptionFunctionality,
  IUserRepoFunctionality,
  Iresult,
} from '../Types/dataTypes';


export class factory {
  protected static authenticationRepoFunctions(): IAuthRepoFunctionality {
    return new authenticationRepository();
  }

  protected static userRepoFunctions(): IUserRepoFunctionality {
    return new userRepository();
  }

  protected static encryptLogic(): IEncryptionFunctionality {
    return new passEncryption();
  }

  public static authenticationLogic(): IAuthServiceFunctionality {
    return new authenticationService(
      this.authenticationRepoFunctions(),
      this.encryptLogic()
    );
  }

  public static userLogic() {
    return new userService(this.userRepoFunctions());
  }

  public static getAuthHeaderLogic(value: string):Iresult {
    return getAuthHeader(value);
  }
}
