import { z } from 'zod';

import { FindOrderBy } from './scan-barcode.types';

export const findOrderSchema = z.object({
  [FindOrderBy.UPC]: z.string().optional().default(''),
  [FindOrderBy.STORAGE_NUMBER]: z.string().optional().default(''),
  [FindOrderBy.TRACKER_NUMBER]: z.string().optional().default(''),
  [FindOrderBy.PO_NUMBER]: z.string().optional().default(''),
  [FindOrderBy.ASIN]: z.string().optional().default(''),
  [FindOrderBy.RMA]: z.string().optional().default(''),
  [FindOrderBy.RETURN_TRACKER]: z.string().optional().default(''),
});

export type FindOrderFormData = z.infer<typeof findOrderSchema>;
export const defaultFindOrderObject = findOrderSchema.parse({});

export type FindOrderDto = {
  order_id: string;
};
