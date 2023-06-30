import prisma from './prismadb';

import { IUser, IUserFunctionality } from '../utils/Types/dataTypes';

export class userRepository implements IUserFunctionality {
  //get all user from database
  public getAllUser() {
    try {
      return prisma.user.findMany({
        where: {
          NOT: [{ deletedAt: null }],
        },
      });
    } catch (error) {
      console.log('getAllUser Repo:', error);
    }
  }

  //get current user information
  public getCurrentUser(id: number) {
    try {
      return prisma.user.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log('getCurrentUser Repo:', error);
    }
  }

  //update user information
  public udapteUser(id: number, value: IUser) {
    try {
      return prisma.user.update({
        where: {
          id,
        },
        data: {
          firstName: value.firstName,
          lastName: value.lastName,
          username: value.username,
        },
      });
    } catch (error) {
      console.log('updateUser Repo:', error);
    }
  }

  //delete user
  public deleteUser(id: number): string {
    try {
       prisma.user.update({
        where: {
          id,
        },
        data: {
          deletedAt: Date(),
        },
      });
      return 'Deleted';
    } catch (error) {
      console.log('deleteUser Repo:', error);
      return 'Something went wrong';
    }
  }
}
