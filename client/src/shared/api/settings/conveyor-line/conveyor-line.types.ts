import { z } from 'zod';

import { ConveyorLinesGateRuleIdType } from './conveyor-line.dtos';

export const createConveyorLineGateRuleSchema = z.object({
  delivery_service_type_id: z.number().int().positive(),
  gate: z.number().int().positive(),
  priority: z.number().int().nonnegative(),
  is_active: z.boolean(),
});

export type CreateConveyorLineGateRuleType = z.infer<typeof createConveyorLineGateRuleSchema>;
export type UpdateConveyorLineGateRuleType = ConveyorLinesGateRuleIdType & CreateConveyorLineGateRuleType;

export type ConveyorLineGateRuleSetActiveType = {
  gate: number;
  is_active: boolean;
};
