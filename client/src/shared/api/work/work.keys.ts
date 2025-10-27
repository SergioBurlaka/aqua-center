import { createQueryKeys } from '@lukemorales/query-key-factory';

export const workKeys = createQueryKeys('work', {
  workLogTimeInfo: null,
  changeWorkLogStatus: null,
  closeUserOrderLog: null,
});
