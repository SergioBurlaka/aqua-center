import { createQueryKeys } from '@lukemorales/query-key-factory';

import { UsersParamsType } from './users.types';

export const usersKeys = createQueryKeys('users', {
  users: (infiniteParams: UsersParamsType) => [infiniteParams],
  createUser: null,
  deleteUser: null,
  updateUser: null,
  userPermissions: null,
});
