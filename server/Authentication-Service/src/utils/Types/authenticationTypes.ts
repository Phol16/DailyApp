//data types for user informations
export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  image?: string;
  salt?:string;
}

export interface IAuthentication {
  createUser_Repo(values: IUser): void;
  signInUser_Repo(username: string, password: string): void;
  getUserByEmail(email: string): void;
}
