import prisma from './prismadb';

import { IPublisherInformation, IPublisherService, IResult } from '../utils/types';

export class publisherRepsoitory implements IPublisherService {
  public async getPublisherByEmail(email: string): Promise<IResult> {
    try {
      if (!email) {
        throw new Error('Invalid Email');
      }
      const result = await prisma.publisher.findFirst({
        where: {
          email,
        },
      });

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('getPublisherByEmail Repo:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async createPublisher(values: IPublisherInformation): Promise<IResult> {
    try {
      if (!values) {
        throw new Error('Invalid Details');
      }

      const result = await prisma.publisher.create({
        data: {
          id: values.id!,
          email: values.email,
          name: values.name,
          username: values.username,
          image: values.image,
        },
      });

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('createPublisher Repo:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async updatePublisher(
    id: number,
    values: IPublisherInformation
  ): Promise<IResult> {
    try {
      if (!id || !values) {
        throw new Error('Invalid Inputs & Id');
      }

      const result = await prisma.publisher.update({
        where: {
          id,
        },
        data: {
          id: values.id!,
          email: values.email,
          name: values.name,
          username: values.username,
          image: values.image,
        },
      });

      return {
        status: 200,
        message: result,
      };
    } catch (error) {
      console.log('updatePublisher Repo:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async deletePublisher(id: number): Promise<IResult> {
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
      console.log('deletePublisher Repo:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }
}
