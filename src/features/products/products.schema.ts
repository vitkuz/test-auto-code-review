import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().max(1000),
  price: z.number().positive().max(999999.99),
  stock: z.number().int().nonnegative(),
});

export const updateProductSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().max(1000).optional(),
  price: z.number().positive().max(999999.99).optional(),
  stock: z.number().int().nonnegative().optional(),
});

export type CreateProductPayload = z.infer<typeof createProductSchema>;
export type UpdateProductPayload = z.infer<typeof updateProductSchema>;
