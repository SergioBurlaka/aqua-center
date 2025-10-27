import { z } from 'zod';

export const hsCodeSchema = z.object({
  category_id: z.string(),
  category_name: z.string(),
  hs_code: z.string(),
});

export type HsCodeDto = z.infer<typeof hsCodeSchema>;

export type HsCodeProps = {
  table_id: number;
};

const updateHsCodeSchema = hsCodeSchema.pick({ hs_code: true, category_id: true });

export type HsCodeUpdate = z.infer<typeof updateHsCodeSchema> & HsCodeProps;

const FilterOrderBySchema = <T extends z.ZodTypeAny>(filterSchema: T) =>
  z
    .object({
      filter: filterSchema,
    })
    .default({
      filter: filterSchema._def.defaultValue ? filterSchema._def.defaultValue() : undefined,
    });

const manufacturerConditions = z.object({
  category_id: FilterOrderBySchema(z.string().default('')),
});
export const defaultManufacturerConditions = manufacturerConditions.parse({});

export type ManufacturerConditionsType = z.infer<typeof manufacturerConditions>;

const filterBySchema = z.object({
  filter: z.string(),
});

const filteringManufacturerProps = z.object({
  category_name: filterBySchema,
});

export type InfiniteManufacturerConditions = z.infer<typeof filteringManufacturerProps>;

export type InfiniteManufacturerParams = {
  conditions: InfiniteManufacturerConditions | {};
  limit: number;
  offset: number;
};
