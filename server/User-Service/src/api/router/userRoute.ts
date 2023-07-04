import { Router } from 'express';

import validateCurrentUser from '../middleware/validateCurrentUser';
import { deleteUserInfo, getUserInfo, updateUserInfo } from '../controller/user';

export default (router: Router) => {
  router.get('/user/userInfo', validateCurrentUser, getUserInfo);
  router.put('/user/userInfo', validateCurrentUser, updateUserInfo);
  router.delete('/user/userInfo', validateCurrentUser, deleteUserInfo);
  return router;
};
