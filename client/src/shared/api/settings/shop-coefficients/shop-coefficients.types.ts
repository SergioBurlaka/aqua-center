import { z } from 'zod';

export const deleteShopCoefficientSchema = z.object({
  company_id: z.number(),
  shops: z.array(z.number()),
});

export type DeleteShopCoefficient = z.infer<typeof deleteShopCoefficientSchema>;
