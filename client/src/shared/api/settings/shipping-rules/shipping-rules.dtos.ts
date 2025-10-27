import { z } from 'zod';

const shippingRulesSchema = z.object({
  id: z.number(),
  rule_name: z.string(),
  country_id: z.string(),
  country_name: z.string(),
  status: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  shop_id: z.string(),
  shop_name: z.string(),
});

export type ShippingRulesDto = z.infer<typeof shippingRulesSchema>;
