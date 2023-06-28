import {Router} from 'express';
import authenticationRoute from './authenticationRoute';

const router = Router();

export default ():Router => {
  authenticationRoute(router)
  return router
}
