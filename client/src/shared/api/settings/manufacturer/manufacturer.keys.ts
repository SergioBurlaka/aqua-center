import { createQueryKeys } from '@lukemorales/query-key-factory';

import { InfiniteManufacturerParams } from './manufacturer.types';

export const manufacturerKeys = createQueryKeys('manufacturer', {
  updateManufacturer: null,
  infiniteManufacturers: (infiniteParams: InfiniteManufacturerParams) => [infiniteParams],
});
