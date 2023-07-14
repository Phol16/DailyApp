import { Request, Response } from 'express';

import { IPublisherInformation } from '../../utils/types';
import { GamesFactory } from '../../utils/other/factory';

const PublisherService = GamesFactory.publisherService();

export const createPublisher = async (req: Request, res: Response) => {
  try {

    res.send()
  } catch (error) {
    console.log('createPublisher Controller:', error);
    res.status(500).json({
      data: 'Something went wrong',
    });
  }
};
