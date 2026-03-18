import { getProducts } from './create-product.service';

export const getProductById = (id) => {
  const products = getProducts();
  return products.find(p => p.id === id);
};

export const getAllProducts = () => {
  return getProducts();
};

export const getProductsByPriceRange = (min, max) => {
  const products = getProducts();
  return products.filter(p => p.price >= min && p.price <= max);
};
