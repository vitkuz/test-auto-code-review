import { v4 as uuidv4 } from 'uuid';
import { Product } from '../products.types';
import { CreateProductPayload } from '../products.schema';

const products: any[] = [];

export const createProduct = (payload: CreateProductPayload) => {
  const product = {
    id: uuidv4(),
    name: payload.name,
    description: payload.description,
    price: payload.price,
    stock: payload.stock,
    createdAt: new Date(),
  };

  products.push(product);
  return product;
};

export const getProducts = () => products;
