import { Product } from '../interfaces/IProduct';
import { add } from '../models/ProductModel';

export const createProduct = async (product: Product) => add(product);

export const getAllProducts = async () => {};