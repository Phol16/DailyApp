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
  createUser(values: IUser): any;
  getUserByEmail(email: string): any;
}

export interface IUserFunctionality {
  getCurrentUser(id: number): any;
  udapteUser(id: number, value: Record<string, any>): any;
  deleteUser(id: number): string;
  getAllUser(): any;
}
