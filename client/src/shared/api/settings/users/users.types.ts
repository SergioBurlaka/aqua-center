import { z } from 'zod';

const FilterOrderBySchema = <T extends z.ZodTypeAny>(filterSchema: T) =>
  z
    .object({
      filter: filterSchema,
    })
    .default({
      filter: filterSchema._def.defaultValue ? filterSchema._def.defaultValue() : undefined,
    });

const usersConditions = z.object({
  user_id: FilterOrderBySchema(z.string().default('')),
  first_name: FilterOrderBySchema(z.string().default('')),
  last_name: FilterOrderBySchema(z.string().default('')),
  email: FilterOrderBySchema(z.string().default('')),
  company: FilterOrderBySchema(z.string().default('')),
  phone: FilterOrderBySchema(z.string().default('')),
});

export const defaultUsersConditions = usersConditions.parse({});

export type UsersConditionsType = z.infer<typeof usersConditions>;

export type UsersParamsType = {
  conditions: UsersConditionsType | {};
  limit: number;
  offset: number;
};
