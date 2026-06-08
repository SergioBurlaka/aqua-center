import { createQueryKeys } from '@lukemorales/query-key-factory';

export const clientsKeys = createQueryKeys('clients', {
  list: null,
  projects: (clientId: string) => ['projects', clientId],
  schedules: (projectId: string) => ['schedules', projectId],
  irrigationPrograms: (programId: string) => ['irrigation-programs', programId],
});

