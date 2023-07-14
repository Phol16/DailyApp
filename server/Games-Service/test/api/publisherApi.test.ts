import { describe, expect, it } from 'vitest';
import request from 'supertest';

import app from '../../app';

import { mockPublisherInformation } from '../utils/data-information';

const mock_publisherInfo = mockPublisherInformation;

describe('PublisherAPI', () => {
  describe('createPublisherAPI', () => {
    it('Should respond with a 200 status code', async () => {
      const response = await request(app)
        .post('/api/new_publisher')
        .send({ mock_publisherInfo });

      expect(response.statusCode).toBe(200);
    });
  });
});
