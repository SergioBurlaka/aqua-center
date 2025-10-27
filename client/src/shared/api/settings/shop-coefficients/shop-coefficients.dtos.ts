import { z } from 'zod';

const carrierSchema = z.object({
  carrier_id: z.number(),
  service_id: z.number(),
  coef: z.string(),
});

export const shopCoefSchema = z.object({
  company_id: z.number().nullable(),
  shops: z.array(z.number()),
  carriers: z.array(carrierSchema),
});

export type CarrierType = z.infer<typeof carrierSchema>;
export type ShopCoefDto = z.infer<typeof shopCoefSchema>;

const carrierForFormSchema = z.object({
  carrier_id: z.number(),
  service_id: z.number(),
  coef: z.string(),
  label: z.string(),
});

export const shopCoefForFormSchema = z.object({
  company_id: z.number(),
  shops: z.array(z.number()),
  carriers: z.array(carrierForFormSchema),
});

export type ShopCoefForm = z.infer<typeof shopCoefForFormSchema>;
