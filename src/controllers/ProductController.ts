import { Router } from 'express';
import rescue from 'express-rescue';
import { createProduct } from '../services/ProductService';
import authentication from '../middlewares/authentication';
import validateJoiProduct from '../middlewares/validateJoiProduct';

const routeProduct = Router();

// verificar -> tipagem dos parametros req e res dando erro
routeProduct.post('/', authentication, rescue(async (req, res) => {
  validateJoiProduct(req.body);
  const product = await createProduct(req.body);
  // console.log(req.body);

  return res.status(201).json({ item: product });
}));

export default routeProduct;