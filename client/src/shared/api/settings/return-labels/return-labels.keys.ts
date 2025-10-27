import { createQueryKeys } from '@lukemorales/query-key-factory';

import { InfiniteUploadLabelSuccessParams } from './return-labels.types';

export const returnLabelsKeys = createQueryKeys('returnLabels', {
  returnLabelsReport: null,
  infiniteUploadLabelSuccess: (infiniteParams: InfiniteUploadLabelSuccessParams) => [infiniteParams],
  infiniteUploadLabelError: (infiniteParams: InfiniteUploadLabelSuccessParams) => [infiniteParams],
});
