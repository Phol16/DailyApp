import { IPublisherInformation, IPublisherService, IResult } from '../utils/types';

export class publisherServices implements IPublisherService {
  constructor(private _publisherRepository: IPublisherService) {}

  public async getPublisherByEmail(email: string): Promise<IResult> {
    try {
      if (!email) {
        return {
          status: 404,
          message: 'Missing details',
        };
      }

      const result = await this._publisherRepository.getPublisherByEmail(email);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('getPublisherByEmail Service:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async createPublisher(values: IPublisherInformation): Promise<IResult> {
    try {
      if (!values || Object.keys(values).length === 0) {
        return {
          status: 404,
          message: 'Missing details',
        };
      }

      const result = await this._publisherRepository.createPublisher(values);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('createPublisher Service:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async updatePublisher(
    id: number,
    values: IPublisherInformation
  ): Promise<IResult> {
    try {
      if (!id) {
        return {
          status: 404,
          message: 'Missing Id',
        };
      }
      if (!values || Object.keys(values).length === 0) {
        return {
          status: 404,
          message: 'Missing details',
        };
      }

      const result = await this._publisherRepository.updatePublisher(id, values);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('updatePublisher Service:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  deletePublisher(id: number): Promise<IResult> {
    throw new Error('Method not implemented.');
  }
}
