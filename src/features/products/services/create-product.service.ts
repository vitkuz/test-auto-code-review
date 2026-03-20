import { v4 as uuidv4 } from 'uuid';
import { Product } from '../products.types';
import { CreateProductPayload } from '../products.schema';
import { addProduct } from '../products.store';

export const createProduct = (payload: CreateProductPayload): Product => {
  const product: Product = {
    id: uuidv4(),
    name: payload.name,
    description: payload.description,
    price: payload.price,
    stock: payload.stock,
    createdAt: new Date(),
  };

  addProduct(product);
  return product;
};
