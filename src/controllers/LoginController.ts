import { Router } from 'express';
import rescue from 'express-rescue';
import { login } from '../services/UserService';
// import authentication from '../middlewares/authentication';

const routeLogin = Router();

routeLogin.post('/', rescue(async (req, res) => {
  const { username, password } = req.body;
  const user = await login(username, password);

  return res.status(200).json({ token: user });
}));

export default routeLogin;