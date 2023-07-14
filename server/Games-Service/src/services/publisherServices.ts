import {
  IPublisherInformation,
  IPublisherRepository,
  IPublisherService,
  IResult,
} from '../utils/types';

export class publisherServices implements IPublisherService {
  constructor(private _publisherRepository: IPublisherRepository) {}

  public async createPublisher(values: IPublisherInformation): Promise<IResult> {
    try {
      if (!values || Object.keys(values).length === 0) {
        return {
          status: 404,
          message: 'Missing details',
        };
      }

      const existingPublisher = await this._publisherRepository.getPublisherByEmail(
        values.email
      );
      if (existingPublisher.status === 200) {
        return {
          status: 201,
          message: 'User already exist',
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

  public async deletePublisher(id: number): Promise<IResult> {
    try {
      if (!id) {
        return {
          status: 404,
          message: 'Missing Id',
        };
      }

      const result = await this._publisherRepository.deletePublisher(id);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('deletePublisher Service:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }
}
