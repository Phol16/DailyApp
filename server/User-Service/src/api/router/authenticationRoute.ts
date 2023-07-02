import { Router } from 'express';

import { register, signIn } from '../controller/authentication';

import validateRegisterInput from '../middleware/validateRegisterInput';
import validateSignInInput from '../middleware/validateSignInInput';

export default (router: Router) => {
  router.post('/auth/register', validateRegisterInput, register);
  router.post('/auth/signIn', validateSignInInput, signIn);
};
