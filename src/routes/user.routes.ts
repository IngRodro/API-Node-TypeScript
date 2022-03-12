import { Router } from 'express';
import {
  deleteUser,
  loginUser,
  registerUser,
  updateUser,
  updateUsername,
} from '../controller/user.controller';
import { TokenValidation } from '../libs/validationToken';

const router = Router();

router.get('/signIn', loginUser);

router.put('/updateUsername', TokenValidation, updateUsername);
router.route('/').post(registerUser).put(TokenValidation, updateUser);

router.route('/:username_req').delete(TokenValidation, deleteUser);

export default router;
