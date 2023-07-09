import {
  IGamesInformation,
  IPublisherInformation,
  IResult,
  IUser,
} from '../../src/utils/types';

enum Estatus {
  success = 200,
  redirection = 300,
  clientError = 400 | 404 | 401,
  serverError = 500,
}

export const mockedReturn = (
  status: Estatus,
  message: string | IPublisherInformation | IUser | {} | null
): IResult => {
  return {
    status: status,
    message: message,
  };
};

export const mockGamesInformation: IGamesInformation = {
  title: 'the title',
  description: 'the description',
  publisher: {
    name: 'the publisher',
    email: 'publisher email',
    username: 'publisher username',
    image: 'publisher image',
  },
  userId: {
    id: 0,
    username: 'the username',
    email: 'user email',
    name: 'the name',
    image: 'the image',
  },
};

export const mockPublisherInformation: IPublisherInformation = {
  id: 1,
  name: 'the publisher',
  email: 'publisher email',
  username: 'publisher username',
  image: 'publisher image',
};

export const mockUserIdInformation: IUser = {
  id: 1,
  username: 'the username',
  email: 'user email',
  name: 'the name',
  image: 'the image',
};
