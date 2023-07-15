import { describe, expect, it } from 'vitest';
import request from 'supertest';

import app from '../../app';

import { mockPublisherInformation } from '../utils/data-information';

const mock_publisherInfo = mockPublisherInformation;

describe('PublisherAPI:', () => {
  //-----------------------------------------------------------------//
  describe('createPublisherAPI', () => {
    it('Should respond with a 200 status code', async () => {
      const response = await request(app)
        .post('/api/new_publisher')
        .send({ mock_publisherInfo });

      expect(response.statusCode).toBe(200);
    });

    it('Should have response with the data and in a json format', async () => {
      const response = await request(app)
        .post('/api/new_publisher')
        .send({ mock_publisherInfo });

      expect(response.body).toBe({ data: mockPublisherInformation });
      expect(response.headers['Content-Type']).toBe(expect.stringContaining('json'));
    });

    describe('Error Handling Test', () => {
      it('Should response with a 404 status code and an error message if user send missing data', async () => {
        const response = await request(app)
          .post('/api/new_publisher')
          .send({ undefined });

        expect(response.statusCode).toBe(404);
        expect(response.body).toBe({ data: 'Missing details' });
      });

      it('Should response with a 404 status code and an error message if Id is missing', async () => {
        mockPublisherInformation.id = undefined;

        const response = await request(app)
          .post('/api/new_publisher')
          .send(mockPublisherInformation);

        expect(response.statusCode).toBe(404);
        expect(response.body).toBe({ data: 'Missing Id' });
      });
    });
  });
  //----------------------------------------------------------------//
});
