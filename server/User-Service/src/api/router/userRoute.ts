import {Router} from 'express';
import validateCurrentUser from '../middleware/validateCurrentUser';
import { getUserInfo } from '../controller/user';

export default (router:Router)=>{
  router.get('/user/userInfo', validateCurrentUser, getUserInfo)
  return router
}
