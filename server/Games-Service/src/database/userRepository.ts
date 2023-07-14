import prisma from './prismadb';

import { IPublisherInformation, IResult, IUserRepository } from '../utils/types';

export class userRepository implements IUserRepository {
  public async getUserByEmail(email: string): Promise<IResult> {
    try {
      if (!email) {
        throw new Error('Invalid email');
      }
      const result = await prisma.publisher.findFirst({
        where: {
          email,
        },
      });

      if(Object.keys(result!).length === 0){
        throw new Error('Missing User')
      }

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('getUserByEmail Repo:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async createUser(values: IPublisherInformation): Promise<IResult> {
    try {
      if (!values) {
        throw new Error('Invalid Email');
      }

      const result = await prisma.publisher.create({
        data: {
          id: values.id!,
          name: values.name,
          email: values.email,
          username: values.username,
          image: values.image,
        },
      });

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('createUser Repo:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async updateUser(id: number, values: IPublisherInformation): Promise<IResult> {
    try {
      if (!id || !values || Object.keys(values).length === 0) {
        throw new Error('Invalid details');
      }

      const result = await prisma.publisher.update({
        where: {
          id,
        },
        data: {
          id: values.id!,
          name: values.name,
          email: values.email,
          username: values.username,
          image: values.image,
        },
      });

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('updateUser Repo:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async deleteUser(id: number): Promise<IResult> {
    try {
      if (!id) {
        throw new Error('Invalid Id');
      }

      const result = await prisma.publisher.delete({
        where: {
          id,
        },
      });

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('deleteUser Repo:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }
}
