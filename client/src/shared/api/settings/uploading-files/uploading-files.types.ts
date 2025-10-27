import { z } from 'zod';

const FilterOrderBySchema = <T extends z.ZodTypeAny>(filterSchema: T) =>
  z
    .object({
      filter: filterSchema,
    })
    .default({
      filter: filterSchema._def.defaultValue ? filterSchema._def.defaultValue() : undefined,
    });

const uploadingFilesConditions = z.object({
  file_name: FilterOrderBySchema(z.string().default('')),
  statusLabel: FilterOrderBySchema(z.string().default('')),
  created_at: FilterOrderBySchema(z.string().default('')),
});

export const defaultUploadingFilesConditions = uploadingFilesConditions.parse({});

export type UploadingFilesConditionsType = z.infer<typeof uploadingFilesConditions>;

export const uploadTxtFileSchema = z.object({
  upload_file: z.instanceof(File).nullable(),
  shop_id: z.number().nullable(),
});

export type UploadPersonalDataFromTxtFileType = z.infer<typeof uploadTxtFileSchema>;

// Define sub-schemas
const FilterBySchema = z.object({
  filter: z.union([z.string(), z.number()]),
});

const DateRangeFilterSchema = z.object({
  from: z.date(), // ISO date string assumed
  to: z.date(),
});

const CreatedAtFilterOrderBySchema = z.object({
  filter: DateRangeFilterSchema,
});

const filteringProps = z.object({
  file_name: FilterBySchema,
  status: FilterBySchema,
  created_at: CreatedAtFilterOrderBySchema,
});

// Main schema
export const querySchema = z.object({
  conditions: filteringProps,
  limit: z.number(),
  offset: z.number(),
});

// TypeScript type
export type Query = z.infer<typeof querySchema>;

export type InfiniteUploadFilesConditions = z.infer<typeof filteringProps>;

// export const defaultFilteringConditionsUploadFiles = filteringProps.parse({});

export type InfiniteUploadFilesParams = {
  conditions: InfiniteUploadFilesConditions | {};
  limit: number;
  offset: number;
};
