import { authenticationRepository } from '../../database/authentication-database';
import { userRepository } from '../../database/user-database';
import { authenticationService } from '../../services/authentication-service';
import { userService } from '../../services/user-service';

export class factory {
  protected static authenticationRepoFunctions() {
    return new authenticationRepository();
  }

  protected static userRepoFunctions(){
    return new userRepository();
  }

  public static authenticationLogic() {
    return new authenticationService(this.authenticationRepoFunctions());
  }

  public static userLogic(){
    return new userService(this.userRepoFunctions());
  }

}
