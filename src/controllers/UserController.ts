import { Router } from 'express';
import rescue from 'express-rescue';
import { createUser } from '../services/UserService';
// import authentication from '../middlewares/authentication';

const routeUser = Router();

routeUser.post('/', rescue(async (req, res) => {
  const user = await createUser(req.body);

  return res.status(201).json({ token: user });
}));

export default routeUser;