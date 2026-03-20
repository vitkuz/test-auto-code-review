import { Product } from '../products.types';
import { UpdateProductPayload } from '../products.schema';
import { getProducts, replaceProduct } from '../products.store';

export const updateProduct = (id: string, payload: UpdateProductPayload): Product | null => {
  const products: readonly Product[] = getProducts();
  const product: Product | undefined = products.find((p: Product) => p.id === id);

  if (!product) {
    return null;
  }

  const updated: Product = {
    ...product,
    ...(payload.name !== undefined ? { name: payload.name } : {}),
    ...(payload.description !== undefined ? { description: payload.description } : {}),
    ...(payload.price !== undefined ? { price: payload.price } : {}),
    ...(payload.stock !== undefined ? { stock: payload.stock } : {}),
  };

  replaceProduct(id, updated);
  return updated;
};
