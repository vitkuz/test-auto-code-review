import { getProducts, removeProduct } from '../products.store';
import { Product } from '../products.types';

export const deleteProduct = (id: string): boolean => {
  const products: readonly Product[] = getProducts();
  const exists: boolean = products.some((p: Product) => p.id === id);

  if (!exists) {
    return false;
  }

  removeProduct(id);
  return true;
};
