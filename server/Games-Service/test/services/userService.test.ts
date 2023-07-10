import { beforeEach, describe, expect, it, vi } from 'vitest';

import { mockUserIdInformation, mockedReturn } from '../utils/data-information';

import { userServices } from '../../src/services/userServices';
import { IUserService } from '../../src/utils/types';

//mocked data
let values = mockUserIdInformation;

let userServices_Test: IUserService;

//mocked UserRepo functionalities
const UserRepo = vi.fn(() => ({
  getUserByEmail: vi.fn().mockReturnValue(mockedReturn(200, values)),
  createUser: vi.fn().mockReturnValue(mockedReturn(200, values)),
  updateUser: vi.fn().mockReturnValue(mockedReturn(200, values)),
  deleteUser: vi.fn().mockReturnValue(mockedReturn(200, values)),
}));

beforeEach(() => {
  values = mockUserIdInformation;

  userServices_Test = new userServices(new UserRepo());
});

describe('userServices:', () => {
  //----------------------------------------------------------------------------------------------------//
  describe('getUserByEmail:', () => {
    it('Shoule return status 200 and the data if function is success', async () => {
      expect(await userServices_Test.getUserByEmail('the Email')).toEqual({
        status: 200,
        message: values,
      });
    });

    it('Should return status 404 and error message if email is missing', async () => {
      //@ts-ignore
      expect(await userServices_Test.getUserByEmail(undefined)).toEqual({
        status: 404,
        message: 'Missing email',
      });
    });
  });

  //----------------------------------------------------------------------------------------------------//
  describe('createUser:', () => {
    it('Should return status 200 and the data if function is success', async () => {
      expect(await userServices_Test.createUser(values)).toEqual({
        status: 200,
        message: values,
      });
    });

    it('Should return status 404 and error message if values are missing', async () => {
      //@ts-ignore
      expect(await userServices_Test.createUser(undefined)).toEqual({
        status: 404,
        message: 'Missing details',
      });

      //@ts-ignore
      expect(await userServices_Test.createUser({})).toEqual({
        status: 404,
        message: 'Missing details',
      });
    });
  });

  //----------------------------------------------------------------------------------------------------//
  describe('updateUser:', () => {
    it('Should return status 200 and the data if function is success', async () => {
      expect(await userServices_Test.updateUser(1, values)).toEqual({
        status: 200,
        message: values,
      });
    });

    it('Should return status 404 and error message if Id is missing ', async () => {
      //@ts-ignore
      expect(await userServices_Test.updateUser(undefined, values)).toEqual({
        status: 404,
        message: 'Missing Id',
      });
    });

    it('Should return status 404 and error message if values are missing', async () => {
      //@ts-ignore
      expect(await userServices_Test.updateUser(1, undefined)).toEqual({
        status: 404,
        message: 'Missing details',
      });

      //@ts-ignore
      expect(await userServices_Test.updateUser(1, {})).toEqual({
        status: 404,
        message: 'Missing details',
      });
    });
  });

  //----------------------------------------------------------------------------------------------------//
  describe('deleteUser:', () => {
    it('Should return status 200 and the data if function is success', async () => {
      expect(await userServices_Test.deleteUser(1)).toEqual({
        status: 200,
        message: values,
      });
    });

    it('Should return status 404 and error message if Id is missing', async () => {
      //@ts-ignore
      expect(await userServices_Test.deleteUser(undefined)).toEqual({
        status: 404,
        message: 'Missing Id',
      });
    });
  });
});
