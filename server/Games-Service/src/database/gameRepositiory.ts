import { IGameRepository, IGamesInformation, IResult } from '../utils/types';
import prisma from './prismadb';

export class gamesRepository implements IGameRepository {
  //create game information
  public async createGameRepository(values: IGamesInformation): Promise<IResult> {
    try {
      if (!values) {
        throw new Error('Missing details');
      }

      const result = await prisma.games.create({
        data: {
          title: values.title,
          description: values.description,
          publisher: {
            create: {
              id: values.publisher.id!,
              name: values.publisher.name,
              image: values.publisher.image,
              username: values.publisher.username,
            },
          },
          UserId: {
            create: {
              userId: values.userId.id!,
            },
          },
        },
      });

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('createGameRepository Repo:', error);
      return {
        status: 500,
        message: `Something went wrong: ${error}`,
      };
    }
  }

  //update game informations
  public async updateGameRepository(
    id: number,
    values: IGamesInformation
  ): Promise<IResult> {
    try {
      if (!id) {
        throw new Error('Missing Id');
      }

      const result = await prisma.games.update({
        where: {
          id,
        },
        data: {
          title: values.title,
          description: values.description,
          publisher: {
            create: {
              id: values.publisher.id!,
              name: values.publisher.name,
              image: values.publisher.image,
              username: values.publisher.username,
            },
          },
          UserId: {
            create: {
              userId: values.userId.id!,
            },
          },
        },
      });

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('updateGameRepository Repo:', error);
      return {
        status: 500,
        message: `Something went wrong: ${error}`,
      };
    }
  }
  public async deleteGameRepository(id: number): Promise<IResult> {
    try {
      if (!id) {
        throw new Error('Missing Id');
      }

      const result = await prisma.games.delete({
        where: {
          id,
        },
      });

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('deleteGameRespository Repo:', error);
      return {
        status: 500,
        message: `Something went wrong: ${error}`,
      };
    }
  }
}
