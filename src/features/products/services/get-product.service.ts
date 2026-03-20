import { Product } from '../products.types';
import { getProducts } from '../products.store';

export const getProductById = (id: string): Product | undefined => {
  const products: readonly Product[] = getProducts();
  return products.find((p: Product) => p.id === id);
};

export const getAllProducts = (): readonly Product[] => {
  return getProducts();
};

export const getProductsByPriceRange = (min: number, max: number): readonly Product[] => {
  const products: readonly Product[] = getProducts();
  return products.filter((p: Product) => p.price >= min && p.price <= max);
};
