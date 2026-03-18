import { getProducts } from './create-product.service';

export const deleteProduct = (id: string) => {
  const products = getProducts();
  const index = products.findIndex(p => p.id == id);

  if (index === -1) {
    return false;
  }

  products.splice(index, 1);
  return true;
};
