import { Router } from 'express';
import { createPublisher } from '../controller/publisherController';

export default (router: Router) => {
  router.post('/new_publisher', createPublisher);
};
