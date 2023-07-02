import { authenticationRepository } from '../../database/authentication-database';
import { userRepository } from '../../database/user-database';

import { authenticationService } from '../../services/authentication-service';
import { userService } from '../../services/user-service';

import { passEncryption } from './logics/encryption';
import getAuthHeader from './logics/getAuthHeader';

export class factory {
  protected static authenticationRepoFunctions() {
    return new authenticationRepository();
  }

  protected static userRepoFunctions() {
    return new userRepository();
  }

  protected static encryptLogic() {
    return new passEncryption();
  }

  public static authenticationLogic() {
    return new authenticationService(this.authenticationRepoFunctions(), this.encryptLogic());
  }

  public static userLogic() {
    return new userService(this.userRepoFunctions());
  }

  public static getAuthHeaderLogic(value: string) {
    return getAuthHeader(value);
  }
}
