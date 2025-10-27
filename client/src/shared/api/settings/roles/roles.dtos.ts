import { z } from 'zod';

const permissionGroupSchema = z.object({
  permission_group_id: z.number(),
  permission_group_name: z.string(),
});

const RoleSchema = z.object({
  role_id: z.number(),
  role_name: z.string(),
  permissions_group: z.array(permissionGroupSchema),
});

export type RolesDto = z.infer<typeof RoleSchema>;

export type DeleteRole = Pick<RolesDto, 'role_id'>;

const permissionSchema = z.object({
  permission_id: z.number(),
  permission_name: z.string(),
});

export const permissionListSchema = permissionGroupSchema.extend({
  permissions: z.array(permissionSchema),
});

export type PermissionListDto = z.infer<typeof permissionListSchema>;

const PermissionGroupSchema = z.object({
  permission_group_id: z.number(),
});

export const CreateRoleSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  permission_group_id: z.array(PermissionGroupSchema).min(1, 'At least one permission group is required'),
});

export type CreateRole = z.infer<typeof CreateRoleSchema>;

export type UpdateRole = CreateRole & Pick<RolesDto, 'role_id'>;
