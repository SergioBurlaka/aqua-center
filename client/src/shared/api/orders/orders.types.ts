/* eslint-disable no-unused-vars */
import { z } from 'zod';

const DateRangeSchema = z
  .object({
    from: z.string().default(''),
    to: z.string().default(''),
  })
  .default({ from: '', to: '' });

const FilterOrderBySchema = <T extends z.ZodTypeAny>(filterSchema: T) =>
  z
    .object({
      filter: filterSchema,
    })
    .default({
      filter: filterSchema._def.defaultValue ? filterSchema._def.defaultValue() : undefined,
    });

const BaseConditionsSchema = z.object({
  shop_name: FilterOrderBySchema(z.string().default('')),
  supplier_name: FilterOrderBySchema(z.string().default('')),
  asin: FilterOrderBySchema(z.string().default('')),
  order_id: FilterOrderBySchema(z.string().default('')),
  order_date: FilterOrderBySchema(DateRangeSchema),
  ship_by: FilterOrderBySchema(DateRangeSchema),
  product_name: FilterOrderBySchema(z.string().default('')),
  quantity: FilterOrderBySchema(z.string().default('')),
  country: FilterOrderBySchema(z.array(z.string().default('')).default([])),
  order_status: FilterOrderBySchema(z.string().default('')),
  tracker_number: FilterOrderBySchema(z.string().default('')),
  print_late_date: FilterOrderBySchema(DateRangeSchema),
  delivery_by: FilterOrderBySchema(DateRangeSchema),
  ship_date: FilterOrderBySchema(DateRangeSchema),
  delivered: FilterOrderBySchema(DateRangeSchema),
  out_tracker_number: FilterOrderBySchema(z.string().default('')),
  carrier: FilterOrderBySchema(z.string().default('')),
  trackig_status: FilterOrderBySchema(z.string().default('')),
  trackig_status_date: FilterOrderBySchema(DateRangeSchema),
  cancel_date: FilterOrderBySchema(DateRangeSchema),
  amazon_order_id: FilterOrderBySchema(z.string().default('')),
  tag_ids: FilterOrderBySchema(z.string().default('')),
});

// Create a default object
export const defaultOrders = BaseConditionsSchema.parse({});

export type OrdersType = z.infer<typeof BaseConditionsSchema>;

type ConditionsType = OrdersType | {};

export type OrdersPropsType = {
  conditions: ConditionsType;
  limit: number;
  offset: number;
  response_type: null | string;
  shop_id?: number[] | [];
};

export enum RequestRequestReportType {
  return_request = 'Return request',
  need_pdf = 'Need pdf',
}

export const returnRequestReportSchema = z.object({
  date_from: z.date(),
  date_to: z.date(),
  type: z.enum(['return_request', 'need_pdf']),
});

export type ReturnRequestReportSchema = z.infer<typeof returnRequestReportSchema>;

export type ReturnRequestReportProps = {
  type: 'return_request' | 'need_pdf';
  date_from: string;
  date_to: string;
};

export const shippedItemsReportSchema = z.object({
  date_from: z.date(),
  date_to: z.date(),
  type_of_report: z.enum(['order_item']),
});

export type ShippedItemsReportSchema = z.infer<typeof shippedItemsReportSchema>;
export type ShippedItemsReportProps = {
  date_from: string;
  date_to: string;
  type_of_report: 'order_item';
};

export const cancelledItemsReportSchema = z.object({
  date_from: z.date(),
  date_to: z.date(),
});

export type CancelledItemsReportSchema = z.infer<typeof cancelledItemsReportSchema>;
export type CancelledItemsReportProps = {
  date_from: string;
  date_to: string;
};

export const uploadNewOrderFromTxtFileSchema = z.object({
  upload_file: z.instanceof(File).nullable(),
  shop_id: z.number().nullable(),
});

export type UploadNewOrderFromTxtFileType = z.infer<typeof uploadNewOrderFromTxtFileSchema>;

export const uploadNewTrackerFileSchema = z.object({
  upload_file: z.instanceof(File),
});

export type UploadNewTrackerFileType = z.infer<typeof uploadNewTrackerFileSchema>;

const shipBySchema = z.object({
  ship_by: z.array(z.coerce.date()),
  order_date: z.undefined().nullable(),
});

const orderDateSchema = z.object({
  ship_by: z.undefined().nullable(),
  order_date: z.array(z.coerce.date()),
});

export const printBulkSchema = z
  .object({
    company_ids: z.array(z.number()),
    marketplace_ids: z.array(z.number()),
    shop_ids: z.array(z.number()),
    status: z.number(),
  })
  .and(z.union([shipBySchema, orderDateSchema]));

export type PrintBulkType = z.infer<typeof printBulkSchema>;

type DateRange = {
  from: string;
  to: string;
};

export type PrintBulkProps = {
  company_ids: number[];
  marketplace_ids: number[];
  shop_ids: number[];
  status: number;
  ship_by?: DateRange;
  order_date?: DateRange;
};

export const manifestsPropsSchema = z.object({
  date: z.coerce.date(),
});

export type ManifestsProps = z.infer<typeof manifestsPropsSchema>;

export type ManifestsPropsType = {
  date: string;
};

export type ConditionsParamsType = {
  conditions: {};
};
