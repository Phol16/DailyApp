import { describe, it, expect, vi, beforeEach } from 'vitest';

import { gameServices } from '../../src/services/gameServices';
import { IGameServices } from '../../src/utils/types';

import { mockGamesInformation, mockedReturn } from '../utils/data-information';

//mocked game informations
let values = mockGamesInformation;

let gameServices_Test: IGameServices;

//mocked gameRepository functions
const gameRepository_Mock = vi.fn(() => ({
  createGameRepository: vi.fn().mockReturnValue(mockedReturn(200, values)),
  updateGameRepository: vi.fn().mockReturnValue(mockedReturn(200, values)),
  deleteGameRepository: vi.fn().mockReturnValue(mockedReturn(200, values)),
}));

beforeEach(() => {
  values = mockGamesInformation;

  gameServices_Test = new gameServices(new gameRepository_Mock());
});

describe('gameServices:', () => {
  //----------------------------------------------------------------------------------------------------//
  describe('CreateGameService', () => {
    it('Should return status 200 and the data if function is success', async () => {
      expect(await gameServices_Test.createGameServices(values)).toEqual({
        status: 200,
        message: values,
      });
    });

    it('Should return status 404 and the error message if values is missing', async () => {
      //@ts-ignore
      expect(await gameServices_Test.createGameServices((values = undefined))).toEqual({
        status: 404,
        message: 'Missing Details',
      });

      //@ts-ignore
      expect(await gameServices_Test.createGameServices((values = {}))).toEqual({
        status: 404,
        message: 'Missing Details',
      });
    });
  });

  //----------------------------------------------------------------------------------------------------//
  describe('UpdateGameService', () => {
    it('Should return status 200 and the data if function is success', async () => {
      expect(await gameServices_Test.updateGameServices(1, values)).toEqual({
        status: 200,
        message: values,
      });
    });

    it('Should return status 404 and the error message if id is missing', async () => {
      //@ts-ignore
      expect(await gameServices_Test.updateGameServices(undefined, values)).toEqual({
        status: 404,
        message: 'Missing Id',
      });
    });

    it('Should return status 404 and the error message if value is missing', async () => {
      //@ts-ignore
      expect(await gameServices_Test.updateGameServices(1, undefined)).toEqual({
        status: 404,
        message: 'Missing Values',
      });

      //@ts-ignore
      expect(await gameServices_Test.updateGameServices(1, (values = {}))).toEqual({
        status: 404,
        message: 'Missing Values',
      });
    });
  });

  //----------------------------------------------------------------------------------------------------//
  describe('DeleteGameService', () => {
    it('Should return status 200 and the data if function is success', async () => {
      expect(await gameServices_Test.deleteGameServices(1)).toEqual({
        status: 200,
        message: values,
      });
    });

    it('Should return status 404 and the error message if Id is missing', async () => {
      //@ts-ignore
      expect(await gameServices_Test.deleteGameServices(undefined)).toEqual({
        status: 404,
        message: 'Missing Id',
      });
    });
  });
});
