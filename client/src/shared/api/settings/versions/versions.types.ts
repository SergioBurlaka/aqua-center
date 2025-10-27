import { z } from 'zod';

const FilterOrderBySchema = <T extends z.ZodTypeAny>(filterSchema: T) =>
  z
    .object({
      filter: filterSchema,
    })
    .default({
      filter: filterSchema._def.defaultValue ? filterSchema._def.defaultValue() : undefined,
    });

const userVersionConditions = z.object({
  user_id: FilterOrderBySchema(z.string().default('')),
  email: FilterOrderBySchema(z.string().default('')),
  versionLabel: FilterOrderBySchema(z.string().default('')),
});

export const defaultUsersVersionConditions = userVersionConditions.parse({});

export type UsersVersionConditionsType = z.infer<typeof userVersionConditions>;

export type EditUserVersion = {
  user_id: number[];
  version_id: number;
};
