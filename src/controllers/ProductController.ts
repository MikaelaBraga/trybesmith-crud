import { Router } from 'express';
import rescue from 'express-rescue';
import { createProduct } from '../services/ProductService';

const routeProduct = Router();

// verificar -> tipagem dos parametros req e res dando erro
routeProduct.post('/', rescue(async (req, res) => {
  const product = await createProduct(req.body);

  return res.status(201).json({ item: product });
}));

export default routeProduct;