import { Product } from './products.types';

let products: readonly Product[] = [];

export const getProducts = (): readonly Product[] => products;

export const addProduct = (product: Product): readonly Product[] => {
  products = [...products, product];
  return products;
};

export const removeProduct = (id: string): readonly Product[] => {
  products = products.filter((p: Product) => p.id !== id);
  return products;
};

export const replaceProduct = (id: string, updated: Product): readonly Product[] => {
  products = products.map((p: Product) => (p.id === id ? updated : p));
  return products;
};
