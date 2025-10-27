import { z } from 'zod';

export const conveyorLineGateRuleSchema = z.object({
  conveyor_lines_gate_rule_id: z.number().int().positive(),
  delivery_service_id: z.number().int().positive(),
  delivery_service_name: z.string(),
  delivery_service_type_id: z.number().int().positive(),
  delivery_service_type_name: z.string(),
  gate: z.number().int().positive(),
  priority: z.number().int().positive(),
  is_active: z.boolean(),
});

export type ConveyorLineGateRuleDto = z.infer<typeof conveyorLineGateRuleSchema>;

export const conveyorLinesGateRuleIdSchema = conveyorLineGateRuleSchema.pick({ conveyor_lines_gate_rule_id: true });

export type ConveyorLinesGateRuleIdType = z.infer<typeof conveyorLinesGateRuleIdSchema>;
