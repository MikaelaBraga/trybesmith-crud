import { Router } from 'express';
import rescue from 'express-rescue';
import validateJoiLogin from '../middlewares/validateJoiLogin';
import { login } from '../services/UserService';

const routeLogin = Router();

// verificar -> tipagem dos parametros req e res dando erro
routeLogin.post('/', rescue(async (req, res) => {
  validateJoiLogin(req.body);
  const { username, password } = req.body;
  const user = await login(username, password);

  return res.status(200).json({ token: user });
}));

export default routeLogin;