import { z } from 'zod';

export const dimWeightListSchema = z.object({
  delivery_service_id: z.number(),
  delivery_service_type_id: z.number(),
  dim_weight_coef: z.number(),
});

export type DimWeightListDto = z.infer<typeof dimWeightListSchema>;

const updateDimWeightSchema = dimWeightListSchema.pick({ dim_weight_coef: true, delivery_service_type_id: true });

export type DimWeightUpdateProps = z.infer<typeof updateDimWeightSchema>;
