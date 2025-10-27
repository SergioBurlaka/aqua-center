import { z } from 'zod';

const declarationSchema = z.object({
  asin: z.string(),
  title: z.string(),
  packaged_quantity: z.number(),
  seller_sku: z.string(),
  country_id: z.number(),
  item_value: z.string(),
  hs_code: z.string().optional(),
  category_id: z.number(),
  is_create: z.number(),
  delivery_info_label_id: z.number(),
});

const orderProductSchema = z.object({
  asin: z.string(),
  upc: z.array(z.string()).optional(),
  barcode: z.string().optional(),
  small_image_url: z.string().url(),
  product_name: z.string(),
  price_amount: z.string(),
  tax_amount: z.string(),
  ordered_quantity: z.number(),
  customQuantity: z.number().optional(),
  selected: z.boolean().optional(),
  cost: z.string(),
  item_value: z.string(),
  shipped_quantity: z.number().nullable(),
  declaration_exist: z.number().nullable(),
  order_item_id: z.number(),
  tag_ids: z.any().nullable(),
  return_label: z.any().nullable(),
  hs_code: z.string().optional(),
  order_item_status_id: z.number(),
  order_item_status_name: z.string(),
  big_image_url: z.string().url(),
  declaration: declarationSchema,
});

// export const defaultOrderProduct = orderProductSchema.parse({});

const awaitingOrderProductSchema = z.object({
  asin: z.string(),
  po_number: z.string(),
  order_status: z.string(),
  shipment_date: z.string(),
  age: z.number(),
  tracker_number: z.string(),
  carrier_name: z.string(),
  title: z.string(),
  quantity: z.number(),
});

export const customDeclarationSchema = z.object({
  title: z.string(),
  packaged_quantity: z.number(),
  country_id: z.number(),
  item_value: z.string(),
  hs_code: z.string(),
  seller_sku: z.string(),
});

export type CustomDeclarationDto = z.infer<typeof customDeclarationSchema>;
export type UpdateOrderItemDeclarationProps = CustomDeclarationDto & Pick<OrderTypeDto, 'order_item_id' | 'asin'>;
export type AutoCreateOrderDeclarationManualProps = Pick<OrderTypeDto, 'order_item_id'>;
export type DeleteOrderDeclarationProps = AutoCreateOrderDeclarationManualProps;

const orderSchema = z.object({
  order_id: z.string(),
  order_date: z.string(),
  ship_by: z.string(),
  delivery_by: z.string(),
  email: z.string().optional(),
  company: z.string().optional(),
  name: z.string().nullable(),
  address_line1: z.string().nullable(),
  address_line2: z.string().nullable(),
  address_line3: z.string().nullable(),
  city: z.string().nullable(),
  state_or_region: z.string().nullable(),
  country_code: z.string().nullable(),
  postal_code: z.string().nullable(),
  phone: z.string().nullable(),
  buyer_tax_id: z.string().nullable(),
  total_price_amount: z.string(),
  total_tax_amount: z.string(),
  total_shipping_price: z.string(),
  total_shipping_tax: z.string(),
  total_item_total_price: z.string(),
  ship_service_level: z.string(),
  currency: z.string(),
  shop_id: z.number(),
  package_weight_total: z.string(),
  package_weight_units: z.string(),
  order_status_id: z.number(),
  order_status_name: z.string(),
  last_tracker_number: z.string(),
});

export const orderDitailsDto = z.object({
  order: orderSchema,
  order_products: z.array(orderProductSchema),
  awaiting_order_product: z.array(awaitingOrderProductSchema),
});

export type DeclarationDto = z.infer<typeof declarationSchema>;
export type AwaitingDto = z.infer<typeof awaitingOrderProductSchema>;
export type OrderDitailsDto = z.infer<typeof orderDitailsDto>;
export type OrderTypeDto = z.infer<typeof orderProductSchema>;

export type OrderType = z.infer<typeof orderSchema>;

export type OrderIdProps = Pick<OrderType, 'order_id'>;

const contriesSchema = z.object({
  country_id: z.number(),
  full_name: z.string(),
  short_name: z.string(),
});

export type ContriesDto = z.infer<typeof contriesSchema>;

const problemListSchema = z.object({
  problem_id: z.number(),
  name: z.string(),
});

export const problemListDto = z.array(problemListSchema);

export type ProblemListDto = z.infer<typeof problemListDto>;

const harmonizationCodesSchema = z.object({
  hs_code: z.string(),
  name: z.string(),
});

const harmonizationCodesDto = z.array(harmonizationCodesSchema);

export type HarmonizationCodesDto = z.infer<typeof harmonizationCodesDto>;

const fileSchema = z.object({
  file_path: z.string(),
  file_type: z.string(),
});

const labelSchema = z.object({
  delivery_info_label_id: z.number(),
  tracker_number: z.string(),
  carrier: z.string(),
  status_name: z.string(),
  rate: z.string(),
  delivery_date: z.string().optional(), // Assuming this can be an empty string
  created_at: z.string(),
  is_void: z.number(),
  bill_dutis_taxes: z.number(),
  enable_tax_id: z.number(),
  package_weight: z.string(),
  package_weight_unit: z.string(),
  package_dimension_length: z.string(),
  package_dimension_width: z.string(),
  package_dimension_height: z.string(),
  package_dimension_unit: z.string(),
  dimension_method_id: z.number(),
  dimension_method_name: z.string(),
  files: z.array(fileSchema),
});

// {
//   "id": 186767,
//   "order_id": "702-8417843-2507467",
//   "conveyor_line_scanned_id": 98301,
//   "file_path": "/conveyor_line/photo/cameras/2025/10/17/20251017_Image184850_Floryda_000000064900.jpg",
//   "created_at": "2025-10-17 12:00:29.483792"
// }

const listLabelsSchema = z.array(labelSchema);
const conveyorLineScannedPhotoSchema = z.object({
  id: z.number(),
  order_id: z.string(),
  conveyor_line_scanned_id: z.number(),
  file_path: z.string(),
  created_at: z.string(),
});


export type ConveyorLineScannedPhotoDto = z.infer<typeof conveyorLineScannedPhotoSchema>;
export type ListLabelsDto = z.infer<typeof listLabelsSchema>;
export type LabelItemDto = z.infer<typeof labelSchema>;

const labelDeclarationSchema = z.object({
  order_id: z.string(),
  order_item_id: z.number(),
  asin: z.string(),
  title: z.string(),
  packaged_quantity: z.number(),
  seller_sku: z.string(),
  country_id: z.number(),
  item_value: z.string(),
  hs_code: z.string().optional(), // Assuming this can be an empty string
  category_id: z.number().nullable(),
  commercial_invoice_file: z.string().nullable(),
  is_create: z.number(),
  created_at: z.string(),
  delivery_info_label_id: z.number(),
});

const labelDeclarationsSchema = z.array(labelDeclarationSchema);
export type LabelDeclarationsDto = z.infer<typeof labelDeclarationsSchema>;

const chatOrderMessageSchema = z.object({
  message: z.string(),
  created_at: z.string(), // Assuming this is a timestamp string. You can modify this to a specific format if needed.
  first_name: z.string(),
  email: z.string(),
  user_id: z.number(),
});

export type ChatOrderMessageDto = z.infer<typeof chatOrderMessageSchema>;

export const createOrderMessageSchema = z.object({
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

export type CreateOrderMessageType = z.infer<typeof createOrderMessageSchema>;

export type CreateChatOrderMessageProps = OrderIdProps & Pick<ChatOrderMessageDto, 'message'>;

const deliveryPackageSchema = z.object({
  delivery_package_id: z.number(),
  name: z.string(),
});

export const deliveryPackagesSchema = z.array(deliveryPackageSchema);

export type DeliveryPackageType = z.infer<typeof deliveryPackageSchema>;

const rateCarrierAutoDTOSchema = z.object({
  dim_weight: z.string(),
  service_type_id: z.number(),
  shipping_rule_id: z.number(),
});

export type RateCarrierAutoDto = z.infer<typeof rateCarrierAutoDTOSchema>;
export type RateCarrierDto = RateCarrierAutoDto;

export type DeliveryServiceType = {
  delivery_service_type_id: number;
  delivery_service_id: number;
  delivery_service_type_name: string;
};

export type DeliveryServiceTypes = Record<string, DeliveryServiceType[]>;

export type DeliveryServiceConfirmation = {
  delivery_service_confirmation_type_id: number;
  delivery_service_confirmation_type_name: string;
  is_default: boolean;
};

export type DeliveryServiceConfirmationType = Record<number, DeliveryServiceConfirmation[]>;

const barcodeLabelSchema = z.object({
  storage_number_label_image: z.string(),
});

export type BarcodeLabelDto = z.infer<typeof barcodeLabelSchema>;
