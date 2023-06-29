import prisma from './prismadb';

import { IUserFunctionality } from '../utils/Types/dataTypes';

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
  public udapteUser(id: number, value: Record<string, any>) {
    try {
      
    } catch (error) {
      console.log('updateUser Repo:', error)
    }
  }

  //delete user 
  deleteUser(id: number): string {
    try {
      return 'deleted';
    } catch (error) {
      console.log('deleteUser Repo:', error);
      return 'Something went wrong';
    }
  }
}
