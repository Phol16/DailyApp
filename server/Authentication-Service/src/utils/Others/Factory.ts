import { authenticationRepository } from '../../database/authentication-database';
import { AuthenticationService } from '../../services/authentication-service';

export class Factory {
  public static databaseFunctions() {
    return new authenticationRepository();
  }

  public static authenticationLogic() {
    return new AuthenticationService(this.databaseFunctions());
  }
}
