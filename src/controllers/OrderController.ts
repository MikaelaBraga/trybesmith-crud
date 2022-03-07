import { Router } from 'express';
import rescue from 'express-rescue';
import authentication from '../middlewares/authentication';

const routeOrder = Router();

// verificar -> tipagem dos parametros req e res dando erro
routeOrder.post('/', authentication, rescue(async (req, res) => {

  return res.status(201).json({ order });
}));

export default routeOrder;