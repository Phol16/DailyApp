export interface IResult {
  status: number;
  message: string | IPublisherInformation | IUser | {} | null;
}

export interface IUser {
  id?: number;
  email: string;
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

export interface IPublisherService {
  getPublisherByEmail(email: string): Promise<IResult>;
  createPublisher(values: IPublisherInformation): Promise<IResult>;
  updatePublisher(id: number, values: IPublisherInformation): Promise<IResult>;
  deletePublisher(id: number): Promise<IResult>;
}

export interface IUserService {
  getUserByEmail(email: string): Promise<IResult>;
  createUser(values: IPublisherInformation): Promise<IResult>;
  updateUser(id: number, values: IPublisherInformation): Promise<IResult>;
  deleteUser(id: number): Promise<IResult>;
}
