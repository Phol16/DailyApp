import { describe, it, vi } from 'vitest';

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
  describe('getUserByEmail:', () => {});

  //----------------------------------------------------------------------------------------------------//
  describe('createUser:', () => {});

  //----------------------------------------------------------------------------------------------------//
  describe('updateUser:', () => {});

  //----------------------------------------------------------------------------------------------------//
  describe('deleteUser:', () => {});
});
