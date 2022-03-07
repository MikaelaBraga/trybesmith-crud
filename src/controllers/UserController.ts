import { Router } from 'express';
import rescue from 'express-rescue';
import validateJoiUser from '../middlewares/validateJoiUser';
import { createUser } from '../services/UserService';

const routeUser = Router();

// verificar -> tipagem dos params req e res dando erro
routeUser.post('/', rescue(async (req, res) => {
  validateJoiUser(req.body);
  const user = await createUser(req.body);

  return res.status(201).json({ token: user });
}));

export default routeUser;