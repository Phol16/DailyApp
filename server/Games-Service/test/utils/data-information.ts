import { IGamesInformation } from '../../src/utils/types';

export const mockGamesInformation: IGamesInformation = {
  title: 'the title',
  description: 'the description',
  publisher: {
    name: 'the publisher',
    username: 'publisher username',
    image: 'publisher image',
  },
  userId: {
    id: 0,
    username: 'the username',
    name: 'the name',
    image: 'the image',
  },
};
