import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  price: z.number().positive(),
  stock: z.number().int(),
});

export const updateProductSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional(),
  price: z.number().positive().optional(),
  stock: z.number().int().optional(),
});

export type CreateProductPayload = z.infer<typeof createProductSchema>;
export type UpdateProductPayload = z.infer<typeof updateProductSchema>;
