import { IGamesInformation, IPublisherInformation, IUser } from '../../src/utils/types';

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
  name: 'the publisher',
  email: 'publisher email',
  username: 'publisher username',
  image: 'publisher image',
};

export const mockuserIdInformation: IUser = {
  id: 0,
  username: 'the username',
  email: 'user email',
  name: 'the name',
  image: 'the image',
};
