import { z } from 'zod';

const customsDeclarationRulesSchema = z.object({
  id: z.number(),
  description: z.string().optional(),
  country_id: z.number(),
  country_name: z.string(),
  country_of_origin: z.number(),
  product_category: z.string(),
  rule_name: z.string(),
  quantity: z.number().nullable(),
  item_cost: z.boolean(),
  total_value_from: z.number().nullable(),
  total_value_to: z.number().nullable(),
  hs_code: z.boolean(),
  hs_code_value: z.string().nullable(),
  sku: z.boolean(),
  sku_value: z.string().nullable(),
  status: z.number(),
  shop_id: z.number(),
  shop_name: z.string(),
});

export type CustomsDeclarationRulesDto = z.infer<typeof customsDeclarationRulesSchema>;
