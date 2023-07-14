import { Router } from 'express';
import publisherRoutes from './publisherRoutes';

const router = Router();

export default (): Router => {
  publisherRoutes(router);
  return router;
};
