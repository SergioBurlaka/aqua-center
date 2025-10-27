import { createQueryKeys } from '@lukemorales/query-key-factory';

import { ScanPageViewType } from './upcInfo.types';

export const upcInfoKeys = createQueryKeys('upcInfo', {
  scanPageView: (params: ScanPageViewType) => [params],
  sendLabelToLocalhost: null,
  scalesData: null,
  cinBarcodeDto: null,
  autoCreateLabel: null,
  editOrderItemStatus: null,
});
