export interface ISignIn {
  email: string;
  password: string;
}

export interface IUser extends ISignIn {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  image?: string;
  salt?: string;
}

export interface IAuthentication {
  createUser_Repo(values: IUser): any;
  getUserByEmail(email: string): any;
}
