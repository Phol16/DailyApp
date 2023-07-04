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
  deleteUser(id: number): any;
  getAllUser(): any;
}

export interface IUserServiceFunctionality {
  fetchUserInfo(id: number): Promise<Iresult>;
  updateUserInfo(id: number, value: IUser): Promise<Iresult>;
  deleteUserInfo(id: number): Promise<Iresult>;
}

export interface IEncryptionFunctionality {
  genSalt(): Promise<string>;
  passwordEncrypt(password: string, salt: string): Promise<string>;
  passwordDecrypt(password: string, salt: string): Promise<boolean>;
}
