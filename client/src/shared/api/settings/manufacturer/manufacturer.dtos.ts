import { z } from 'zod';

export const manufacturerSchema = z.object({
  category_id: z.string(),
  category_name: z.string(),
  country_id: z.number(),
  country_name: z.string(),
  description: z.string(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime().nullable(),
});

export type ManufacturerDto = z.infer<typeof manufacturerSchema>;

const updateManufacturerSchema = manufacturerSchema.pick({ category_id: true, country_id: true, description: true });

export type UpdateManufacturer = z.infer<typeof updateManufacturerSchema>;
