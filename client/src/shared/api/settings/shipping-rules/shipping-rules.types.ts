import { z } from 'zod';

const FilterOrderBySchema = <T extends z.ZodTypeAny>(filterSchema: T) =>
  z
    .object({
      filter: filterSchema,
    })
    .default({
      filter: filterSchema._def.defaultValue ? filterSchema._def.defaultValue() : undefined,
    });

const shippingRulesConditions = z.object({
  rule_name: FilterOrderBySchema(z.string().default('')),
  country_name: FilterOrderBySchema(z.string().default('')),
  shop_name: FilterOrderBySchema(z.string().default('')),
});

export const defaultShippingRulesConditions = shippingRulesConditions.parse({});

export type ShippingRulesConditionsType = z.infer<typeof shippingRulesConditions>;

export type ShippingRulesParamsType = {
  conditions: ShippingRulesConditionsType | {};
  limit: number;
  offset: number;
};

type ShippingRuleToDeleteId = {
  shipping_rule_id: number;
};

export type ShippingRuleToDeleteIds = {
  shipping_rule_ids: ShippingRuleToDeleteId[];
};

export type ChangeStatusShippingRule = {
  status: boolean;
} & ShippingRuleToDeleteIds;

const shippingRuleStatementSchema = z.object({
  statement_id: z.number().optional(),
  statement_name: z.string(),
  statement_value: z.union([z.string(), z.number()]),
});

export type ShippingRuleStatementType = z.infer<typeof shippingRuleStatementSchema>;

const shippingRuleConditionSchema = z.object({
  condition_id: z.number().optional(),
  condition_comparison: z.string(),
  condition_object: z.string(),
  condition_value: z.string(),
  shipping_rule_statements: z.array(shippingRuleStatementSchema).optional(),
});

export type ShippingRuleConditionType = z.infer<typeof shippingRuleConditionSchema>;

export const ruleSchema = z.object({
  rule_id: z.number().optional(),
  shop_id: z.union([z.string(), z.number()]).optional(),
  rule_name: z.string(),
  country_id: z.union([z.string(), z.number()]).optional(),
  status: z.boolean(),
  shipping_rule_conditions: z.array(shippingRuleConditionSchema),
});
export type RuleSchemaType = z.infer<typeof ruleSchema>;

export const createRuleSchema = z.object({
  rule_name: z.string(),
  status: z.boolean().default(true),
  allContries: z.boolean().optional(),
  contries: z.number().optional(),
  allShops: z.boolean().optional(),
  shop: z.number().optional(),
  weightIsMore: z.number().default(0),
  weightIsLess: z.number().default(0),
  labelIsVoided: z.string().default('ignore'),
  labelIsVoidedIsChecked: z.boolean().default(false),
  carrier: z.number().optional().nullable(),
  IOSS: z.string().default('ignore'),
  BillDutyAndTax: z.string().default('ignore'),
  billDutyAndTaxIsChecked: z.boolean().default(false),
  iossIsChecked: z.boolean().default(false),
  requestService: z.number().default(1),
  tag: z.number().optional(),
});

export type CreateRuleType = z.infer<typeof createRuleSchema>;

export const createRuleDefaultValues = createRuleSchema.parse({
  rule_name: '',
});

export type ShippingRuleByIdProps = {
  limit: number;
  offset: number;
  shipping_rule_id: number;
};

export type ConditionType = {
  id: number;
  condition_object: string;
  condition_comparison: string;
  condition_value: string;
  shipping_rule_id: number;
  created_at: string;
  updated_at: string | null;
  statements: any[];
};

export type StatementType = {
  id: number;
  statement_name: string;
  statement_value: string;
  shipping_rule_condition_id: number;
  created_at: string;
  updated_at: string | null;
};
