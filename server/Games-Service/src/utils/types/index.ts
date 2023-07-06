export interface IResult {
  status: number;
  message: string;
}

export interface IUser {
  id?: number;
  username: string;
  name: string;
  image: string;
}

export interface IPublisherInformation extends IUser {}

export interface IGamesInformation {
  title: string;
  description: string;
  publisher: number;
  userId: IUser[];
}
