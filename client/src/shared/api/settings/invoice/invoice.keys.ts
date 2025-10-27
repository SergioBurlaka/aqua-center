import { createQueryKeys } from '@lukemorales/query-key-factory';

import { InvoicesParamsType } from './invoice.types';

export const InvoiceKeys = createQueryKeys('orderItemBin', {
  invoiceList: (infiniteParams: InvoicesParamsType) => [infiniteParams],
  createPdfInvoice: null,
  createExcelInvoice: null,
});
