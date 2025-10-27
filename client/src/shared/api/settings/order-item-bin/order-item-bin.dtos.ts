import { z } from 'zod';

export const orderItemBinSchema = z.object({
  asin: z.string(),
  upc: z.string(),
  product_name: z.string(),
  quantity: z.number(),
  bin: z.string(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type OrderItemBinDto = z.infer<typeof orderItemBinSchema>;

const updateOrderItemBin = orderItemBinSchema.pick({ asin: true, upc: true, bin: true });

export type UpdateOrderItemBinProp = z.infer<typeof updateOrderItemBin>;

export const orderItemBinFormSchema = z.object({
  orderItemBinNumber: z.string(),
  orderItemBinCharacter: z.string(),
});

export type OrderItemBinFormType = z.infer<typeof orderItemBinFormSchema>;
