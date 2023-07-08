export interface IResult {
  status: number;
  message: string | IPublisherInformation | IUser | {};
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
  publisher: IPublisherInformation;
  userId: IUser;
}

export interface IGameRepository {
  createGameRepository(values: IGamesInformation): Promise<IResult>;
  updateGameRepository(id: number, values: IGamesInformation): Promise<IResult>;
  deleteGameRepository(id: number): Promise<IResult>;
}

export interface IGameServices {
  createGameServices(values: IGamesInformation): Promise<IResult>;
  updateGameServices(id: number, values: IGamesInformation): Promise<IResult>;
  deleteGameServices(id: number): Promise<IResult>;
}

//todo create other interface
