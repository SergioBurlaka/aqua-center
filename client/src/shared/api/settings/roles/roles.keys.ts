import { createQueryKeys } from '@lukemorales/query-key-factory';

import { PermissionsParamsType, RolesParamsType } from './roles.types';

export const rolesKeys = createQueryKeys('roles', {
  roles: (infiniteParams: RolesParamsType) => [infiniteParams],
  permission: (infiniteParams: PermissionsParamsType) => [infiniteParams],
  createRole: null,
  deleteRole: null,
  updateRole: null,
});
