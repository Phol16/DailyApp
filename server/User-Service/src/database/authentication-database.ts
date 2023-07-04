import prisma from './prismadb';

import { IUser, IAuthRepoFunctionality} from '../utils/Types/dataTypes';

export class authenticationRepository implements IAuthRepoFunctionality {
  //register user to the database
  public createUser(values: IUser) {
    try {
      if (values.salt) {
        if (values.image) {
          return prisma.user.create({
            data: {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              username: values.username,
              password: values.password,
              image: values.image,
              salt: values.salt,
            },
          });
        } else {
          return prisma.user.create({
            data: {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              username: values.username,
              password: values.password,
              salt: values.salt,
            },
          });
        }
      }
    } catch (error) {
      console.log('CreateUser AuthRepo:', error);
    }
  }

  //get user by email
  public getUserByEmail(email: string) {
    try {
      return prisma.user.findFirst({
        where: {
          email,
          deletedAt:null
        },
      });
    } catch (error) {
      console.log('getUserByEmail AuthRepo', error);
    }
  }
}
