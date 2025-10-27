import { createQueryKeys } from '@lukemorales/query-key-factory';

import { InfiniteHsCodesParams } from './hs-codes.types';

export const hsCodesKeys = createQueryKeys('hsCodes', {
  getHsCodesTabsList: null,
  updateHsCodes: null,
  infiniteHsCodes: (infiniteParams: InfiniteHsCodesParams) => [infiniteParams],
});
