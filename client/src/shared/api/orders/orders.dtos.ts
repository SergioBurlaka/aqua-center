import { z } from 'zod';

const orderDto = z.object({
  order_id: z.string(),
  product_count: z.number(),
  ship_by: z.string().datetime(),
  tracker_number: z.string().nullable(),
  asin: z.string(),
  product_name: z.string(),
  country: z.array(z.string().default('')).default([]),
  order_status: z.string(),
  order_date: z.string().datetime(),
  quantity: z.number(),
  shop_name: z.string(),
  amazon_order_id: z.string(),
  product_create_at: z.string().datetime().nullable(),
  print_late_date: z.string().datetime().nullable(),
  delivery_by: z.string().datetime().nullable(),
  tag_ids: z.string(),
});

const orderReportDto = z.object({
  report_file_url: z.string(),
});

const ShippedOrderDto = orderDto.extend({
  out_tracker_number: z.string(),
  trackig_status: z.string(),
  trackig_status_date: z.string().datetime().nullable(),
  carrier: z.string(),
  ship_date: z.string().datetime().nullable(),
  delivered: z.string().datetime().nullable(),
});

const CancelDto = orderDto
  .extend({
    cancel_date: z.string().datetime().nullable(),
    // Removing fields not applicable for CancelDto
  })
  .omit({
    ship_by: true,
    order_date: true,
    product_create_at: true,
    print_late_date: true,
    delivery_by: true,
  });

export type ReturnRequestReportDTO = {
  report_url: string;
};

export type OrderReportDto = z.infer<typeof orderReportDto>;
export type OrderDto = z.infer<typeof orderDto>;
export type ShippedOrderDto = z.infer<typeof ShippedOrderDto>;
export type CancelDto = z.infer<typeof CancelDto>;

const manifestSchema = z.object({
  created_at: z.string(),
  manifest_id: z.number(),
  manifest_status_name: z.string(),
  path_manifest: z.string(),
  total_label_count: z.number(),
  invalid_label_count: z.number(),
  labels_count: z.number(),
  manifest_name: z.string(),
  invalid_labels: z.array(z.any()),
});

const manifestsSchema = z.object({
  manifests_created: z.array(manifestSchema),
  manifests_new: z.number(),
});

export type ManifestType = z.infer<typeof manifestSchema>;
export type ManifestsType = z.infer<typeof manifestsSchema>;
