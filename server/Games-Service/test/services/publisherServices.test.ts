import { beforeEach, describe, expect, it, test, vi } from 'vitest';

import { mockPublisherInformation, mockedReturn } from '../utils/data-information';

import { publisherServices } from '../../src/services/publisherServices';
import { IPublisherService } from '../../src/utils/types';

//mocked data
let values = mockPublisherInformation;

let PublisherService_Test: IPublisherService;

//mocked publisherRepo functionalities
const PublisherRepo = vi.fn(() => ({
  getPublisherByEmail: vi.fn().mockReturnValue(mockedReturn(200, values)),
  createPublisher: vi.fn().mockReturnValue(mockedReturn(200, values)),
  updatePublisher: vi.fn().mockReturnValue(mockedReturn(200, values)),
  deletePublisher: vi.fn().mockReturnValue(mockedReturn(200, values)),
}));

beforeEach(() => {
  values = mockPublisherInformation;

  PublisherService_Test = new publisherServices(new PublisherRepo());
});

describe('publisherServices:', () => {
  //----------------------------------------------------------------------------------------------------//
  describe('createPublisher:', () => {
    it('Should return status 200 and the data if function is success', async () => {
      const PublisherRepo = vi.fn(() => ({
        //@ts-ignore
        getPublisherByEmail: vi.fn().mockReturnValue(mockedReturn(500, undefined)),
        createPublisher: vi.fn().mockReturnValue(mockedReturn(200, values)),
      }));

      //@ts-ignore
      PublisherService_Test = new publisherServices(new PublisherRepo());

      expect(await PublisherService_Test.createPublisher(values)).toEqual({
        status: 200,
        message: values,
      });
    });

    it('Should return status ... and the error message if user already exist in DB', async () => {
      expect(await PublisherService_Test.createPublisher(values)).toEqual({
        status: 201,
        message: 'User already exist',
      });
    });

    it('Should return status 404 if values is missing', async () => {
      //@ts-ignore
      expect(await PublisherService_Test.createPublisher(undefined)).toEqual({
        status: 404,
        message: 'Missing details',
      });

      //@ts-ignore
      expect(await PublisherService_Test.createPublisher({})).toEqual({
        status: 404,
        message: 'Missing details',
      });
    });
  });

  //----------------------------------------------------------------------------------------------------//
  describe('updatePublisher:', () => {
    it('Should return status 200 and the data if function is success', async () => {
      expect(await PublisherService_Test.updatePublisher(1, values)).toEqual({
        status: 200,
        message: values,
      });
    });

    it('Should return status 404 if values is missing', async () => {
      //@ts-ignore
      expect(await PublisherService_Test.updatePublisher(1, undefined)).toEqual({
        status: 404,
        message: 'Missing details',
      });

      //@ts-ignore
      expect(await PublisherService_Test.updatePublisher(1, {})).toEqual({
        status: 404,
        message: 'Missing details',
      });
    });

    it('Should return status 404 if Id is missing', async () => {
      //@ts-ignore
      expect(await PublisherService_Test.updatePublisher(undefined, values)).toEqual({
        status: 404,
        message: 'Missing Id',
      });
    });
  });

  //----------------------------------------------------------------------------------------------------//
  describe('deletePublisher:', () => {
    it('Should return status 200 and the data if function is success', async () => {
      expect(await PublisherService_Test.deletePublisher(1)).toEqual({
        status: 200,
        message: values,
      });
    });

    it('Should return status 404 if Id is missing', async () => {
      //@ts-ignore
      expect(await PublisherService_Test.deletePublisher(undefined)).toEqual({
        status: 404,
        message: 'Missing Id',
      });
    });
  });
});
