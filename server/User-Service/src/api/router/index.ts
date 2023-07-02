import { Router } from 'express';

import authenticationRoute from './authenticationRoute';
import userRoute from './userRoute';

const router = Router();

export default (): Router => {
  authenticationRoute(router);
  userRoute(router);
  return router;
};
