import { Product } from '../products.types';
import { UpdateProductPayload } from '../products.schema';
import { getProducts } from './create-product.service';

export const updateProduct = (id: string, payload: UpdateProductPayload) => {
  const products = getProducts();
  const product = products.find(p => p.id === id);

  if (!product) {
    return null;
  }

  if (payload.name) product.name = payload.name;
  if (payload.description) product.description = payload.description;
  if (payload.price) product.price = payload.price;
  if (payload.stock) product.stock = payload.stock;

  return product;
};
