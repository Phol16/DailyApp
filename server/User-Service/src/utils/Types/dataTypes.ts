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
export interface Iresult {
  status: number;
  message: any;
}

export interface IAuthRepoFunctionality {
  createUser(values: IUser): any;
  getUserByEmail(email: string): any;
}

export interface IAuthServiceFunctionality {
  createUserService(value: IUser): Promise<Iresult>;
  signInUser(email: string, password: string): Promise<Iresult>;
}

export interface IUserRepoFunctionality {
  getCurrentUser(id: number): any;
  udapteUser(id: number, value: IUser): any;
  deleteUser(id: number): string;
  getAllUser(): any;
}

export interface IEncryptionFunctionality {
  genSalt(): any;
  passwordEncrypt(password: string, salt: string): any;
  passwordDecrypt(password: string, salt: string): any;
}
