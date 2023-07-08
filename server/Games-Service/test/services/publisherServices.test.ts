import {describe, it, test, vi} from 'vitest';
import { mockPublisherInformation } from '../utils/data-information';
import { publisherServices } from '../../src/services/publisherService';

let mockPublisher = mockPublisherInformation;

//mocked publisherRepo functionalities
const PublisherRepo = vi.fn(()=>({
  getPublisherByEmail:vi.fn(),
  createPublisher:vi.fn(),
  updatePublisher:vi.fn(),
  deletePublisher:vi.fn(),
}))

beforeEach(()=>{
  mockPublisher = mockPublisherInformation

  const PublisherService_Test = new publisherServices(new PublisherRepo())
})

//Add Test here...
