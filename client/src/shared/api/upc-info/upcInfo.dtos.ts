import { z } from 'zod';

export const scanPageViewDto = z.object({
  order_id: z.string(),
  order_status_id: z.number(),
  order_item_id: z.number(),
  storage_number: z.string(),
  tracker_number: z.string(),
  code: z.string().nullable(),
  country: z.string(),
  ship_date: z.string().datetime(),
  delivery_by: z.string().datetime(),
  image: z.string().url(),
  title: z.string(),
  shop_id: z.number(),
  is_multiply: z.boolean(),
  purchase_tracker_number: z.string(),
  is_double_upc: z.boolean(),
  ordered_quantity: z.number(),
  purchase_quantity: z.number(),
  return_label: z.string(),
  shipped_quantity: z.number().nullable(),
});
export type ScanPageViewDto = z.infer<typeof scanPageViewDto>;

export const scalesDataDto = z.object({
  length: z.number().default(4.5),
  width: z.number().default(2),
  height: z.number().default(2),
  weight: z.number().default(0.2),
});
export type ScalesDataDto = z.infer<typeof scalesDataDto>;

export const defaultScales = scalesDataDto.parse({});

export const cinBarcodeDto = z.object({
  cin_storage_number: z.string(),
});

export type CinBarcodeDto = z.infer<typeof cinBarcodeDto>;

const autoCreateLabel = z.object({
  file_path: z.string(),
  file_type: z.string(),
});

export const autoCreateLabelDto = z.array(autoCreateLabel);

export type AutoCreateLabelType = z.infer<typeof autoCreateLabel>;
export type AutoCreateLabelDto = z.infer<typeof autoCreateLabelDto>;
export type CreateLabelDto = z.infer<typeof autoCreateLabel>;
