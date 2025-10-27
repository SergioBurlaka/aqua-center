import { createQueryKeys } from '@lukemorales/query-key-factory';

import { RatesListPropsType } from './carriers-rates.types';

export const carriersRatesKeys = createQueryKeys('carriersRates', {
  uploadLog: null,
  uploadError: null,
  setIsViewed: null,
  createRates: null,
  getRates: (paraps: RatesListPropsType) => [paraps],
});
