import prisma from './prismadb';

import { IUser, IUserRepoFunctionality } from '../utils/Types/dataTypes';

export class userRepository implements IUserRepoFunctionality {
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
      return prisma.user.findFirst({
        where: {
          id,
          deletedAt: null,
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
          image: value.image,
          username: value.username,
        },
      });
    } catch (error) {
      console.log('updateUser Repo:', error);
    }
  }

  //delete user
  public deleteUser(id: number) {
    try {
      const date = new Date()
      return prisma.user.update({
        where: {
          id,
        },
        data: {
          deletedAt: date,
        },
      });
    } catch (error) {
      console.log('deleteUser Repo:', error);
    }
  }
}
