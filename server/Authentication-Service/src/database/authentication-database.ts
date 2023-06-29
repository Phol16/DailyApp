import prisma from './prismadb';
import { IUser, IAuthentication } from '../utils/Types/authenticationTypes';

export class authenticationRepository implements IAuthentication {
  //register user to the database
  public createUser_Repo(values: IUser) {
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
        },
      });
    } catch (error) {
      console.log('getUserByEmail AuthRepo', error);
    }
  }
}
