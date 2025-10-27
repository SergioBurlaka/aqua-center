import { z } from 'zod';

const FilterOrderBySchema = <T extends z.ZodTypeAny>(filterSchema: T) =>
  z
    .object({
      filter: filterSchema,
    })
    .default({
      filter: filterSchema._def.defaultValue ? filterSchema._def.defaultValue() : undefined,
    });

const rolesConditions = z.object({
  role_id: FilterOrderBySchema(z.string().default('')),
  role_name: FilterOrderBySchema(z.string().default('')),
});

export const defaultRolesConditions = rolesConditions.parse({});

export type RolesConditionsType = z.infer<typeof rolesConditions>;

export type RolesParamsType = {
  conditions: RolesConditionsType | {};
  limit: number;
  offset: number;
};
export type PermissionsParamsType = {
  conditions: null;
  limit: number;
  offset: number;
};
