import { z } from 'zod';

const FilterOrderBySchema = <T extends z.ZodTypeAny>(filterSchema: T) =>
  z
    .object({
      filter: filterSchema,
    })
    .default({
      filter: filterSchema._def.defaultValue ? filterSchema._def.defaultValue() : undefined,
    });

const customsDeclarationRules = z.object({
  country_id: FilterOrderBySchema(z.string().default('')),
  product_category: FilterOrderBySchema(z.string().default('')),
  shop_id: FilterOrderBySchema(z.string().default('')),
});

export const defaultCustomsDeclarationRules = customsDeclarationRules.parse({});

export type CustomsDeclarationRulesType = z.infer<typeof customsDeclarationRules>;

export type CustomsDeclarationRulesParamsType = {
  conditions: CustomsDeclarationRulesType | {};
  limit: number;
  offset: number;
};

export type CustomsDeclarationRuleToDeleteIds = {
  customs_declaration_rule_ids: number[];
};

export type ChangeStatusCustomsDeclarationRule = {
  status: number;
} & CustomsDeclarationRuleToDeleteIds;

export const createCustomDeclarationSchema = z.object({
  rule_name: z.string(),
  status: z.boolean().default(true),
  description: z.string().optional(),
  shop_id: z.number().optional(),
  country_id: z.number().optional(),
  country_of_origin: z.number().optional(),
  quantity_flag: z.string().default('real quantity'),
  quantity: z.number().optional().default(0),
  total_flag: z.string().default('real cost'),
  total_value_from: z.number().optional().default(0),
  total_value_to: z.number().optional().default(0),
  hs_code_flag: z.string().default('use existed hs'),
  hs_code_value: z.string().optional(),
  sku_code_flag: z.string().default('use existed sku'),
  sku_value: z.string().default(''),
  product_category: z.number().optional().default(1),
});

export const customDeclarationRuleSchema = z.object({
  rule_name: z.string(),
  status: z.number(),
  description: z.string().optional(),
  shop_id: z.number().optional(),
  country_id: z.number().optional(),
  country_of_origin: z.number().optional(),
  total_value_from: z.number().nullable().optional(),
  total_value_to: z.number().nullable().optional(),
  hs_code_value: z.string().nullable().optional(),
  sku_value: z.string().nullable().optional(),
  item_cost: z.boolean(),
  quantity: z.number().nullable(),
  hs_code: z.boolean(),
  sku: z.boolean(),
  product_category: z.string().optional(),
});

export type CreateCustomDeclarationType = z.infer<typeof createCustomDeclarationSchema>;
export type CreateCustomDeclarationPropsType = z.infer<typeof customDeclarationRuleSchema>;
export const createCustomDeclarationDefaultValues = createCustomDeclarationSchema.parse({
  rule_name: '',
});

export type UpdateCustomDeclarationPropsType = CreateCustomDeclarationPropsType & { id: number };
