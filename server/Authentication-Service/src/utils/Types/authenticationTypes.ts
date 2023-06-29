//data types for user informations
export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  image?: string;
  salt?: string;
}
export interface ISignIn {
  email: string;
  password: string;
}

export interface IAuthentication {
  createUser_Repo(values: IUser): any;
  signInUser_Repo(username: string, password: string): any;
  getUserByEmail(email: string): any;
}
