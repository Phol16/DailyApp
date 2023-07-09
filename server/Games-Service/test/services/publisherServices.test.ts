import { beforeEach, describe, expect, it, test, vi } from 'vitest';

import { mockPublisherInformation, mockedReturn } from '../utils/data-information';

import { publisherServices } from '../../src/services/publisherService';
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

describe('getPublisherByEmail', () => {
  it('Should return status 200 and the data if function is success', async () => {
    expect(await PublisherService_Test.getPublisherByEmail(values.email)).toEqual({
      status: 200,
      message: values,
    });
  });

  it('Should return status 404 and the error if email doesnt exist', async () => {
    //@ts-ignore
    expect(await PublisherService_Test.getPublisherByEmail(undefined)).toEqual({
      status: 404,
      message: 'Missing details',
    });
  });
});

describe('createPublisher', () => {
  it.todo('Should return status 200 and the data if function is success', () => {});

  it.todo('Should return status 404 if values is missing', () => {});
});

describe('updatePublisher', () => {
  it.todo('Should return status 200 and the data if function is success', () => {});

  it.todo('Should return status 404 if values is missing', () => {});

  it.todo('Should return status 404 if Id is missing', () => {});
});

describe('deletePublisher', () => {
  it.todo('Should return status 200 and the data if function is success', () => {});

  it.todo('Should return status 404 if values is missing', () => {});

  it.todo('Should return status 404 if Id is missing', () => {});
});

//Add Test here...
