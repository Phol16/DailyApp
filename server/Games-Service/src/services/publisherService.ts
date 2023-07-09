import { IPublisherInformation, IPublisherService, IResult } from '../utils/types';

export class publisherServices implements IPublisherService {
  constructor(private _publisherRepository: IPublisherService) {}

  public async getPublisherByEmail(email: string): Promise<IResult> {
    try {
      if(!email){
        return {
          status:404,
          message:'Missing details'
        }
      }

      const result = await this._publisherRepository.getPublisherByEmail(email);

      return {
        status:result.status,
        message:result.message
      }
    } catch (error) {
      console.log('getPublisherByEmail Service:',error)
      return {
        status: 500,
        message:'Something went wrong'
      }
    }
  }
  createPublisher(values: IPublisherInformation): Promise<IResult> {
    throw new Error('Method not implemented.');
  }
  updatePublisher(id: number, values: IPublisherInformation): Promise<IResult> {
    throw new Error('Method not implemented.');
  }
  deletePublisher(id: number): Promise<IResult> {
    throw new Error('Method not implemented.');
  }
}
