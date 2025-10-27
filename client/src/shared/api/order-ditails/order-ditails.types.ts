import { z } from 'zod';

import { UnitsOfMeasureDimentionUpperCase, WheitMeasureType } from '@shared/constants/order-ditails/OrderDitails';

export type OrderDitailsProps = {
  order_id: string;
  shop_id: string;
};

export const editOrderSchema = z.object({
  order_id: z.string(),
  name: z.string().optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
  email: z.string().email().optional().nullable(),
  country_id: z.number(),
  address_line1: z.string().optional(),
  address_line2: z.string().optional(),
  address_line3: z.string().optional(),
  city: z.string().optional(),
  state_or_region: z.string().optional(),
  postal_code: z.string().optional(),
  total_shipping_price: z.string(),
  total_price_amount: z.string(),
  buyer_tax_id: z.string().nullable(),
  total_item_total_price: z.string().optional(),
  order_date: z.date().optional(),
  paid_date: z.date().optional(),
  ship_by: z.date().optional(),
});

export type EditOrderType = z.infer<typeof editOrderSchema>;

const addOrderItemTagSchema = z.object({
  orders: z.array(
    z.object({
      order_id: z.string(),
      order_item_id: z.number(),
    }),
  ),
  tag_id: z.array(
    z.object({
      tag_id: z.number(),
    }),
  ),
  manager_comment: z.string(),
});

export type AddOrderItemTagType = z.infer<typeof addOrderItemTagSchema>;

const removeOrderItemTagSchema = z.object({
  orders: z.array(
    z.object({
      order_id: z.string(),
      order_item_id: z.number(),
    }),
  ),
  tag_id: z.array(
    z.object({
      tag_id: z.number(),
    }),
  ),
});

export type RemoveOrderItemTagType = z.infer<typeof removeOrderItemTagSchema>;

export const editOrderItemStatusSchema = z.object({
  comment: z.string().optional(),
  order_item_id: z.number(),
  order_item_status_id: z.number(),
  page_id: z.number(),
  problem_id: z.number(),
});

export type EditOrderItemStatusType = z.infer<typeof editOrderItemStatusSchema>;

export type GetDeclarationProps = { label_id: number };
export type VoidLabelProps = GetDeclarationProps;

export const uploadReturnLabelsFileSchema = z.object({
  upload_files: z.array(z.instanceof(File)),
});

export type uploadReturnLabelsFileType = z.infer<typeof uploadReturnLabelsFileSchema>;

export const shipmentsSchema = z.object({
  weightLB: z.number(),
  weightOZ: z.number(),
});

export type ShipmentsProps = z.infer<typeof shipmentsSchema>;

export type DeliveryPackagesProps = {
  delivery_service_type_id: number;
};

export type RateCarrierAutoProps = {
  order_id: string;
  package_weight_value: number;
  package_weight_unit_of_measure: WheitMeasureType;
  package_dimension_length: number;
  package_dimension_width: number;
  package_dimension_height: number;
  package_dimension_unit_of_measure: UnitsOfMeasureDimentionUpperCase;
};

export type RateCarrierProps = {
  order_id: string;
  package_weight_value: number;
  package_weight_unit_of_measure: WheitMeasureType;
  package_dimension_length: number;
  package_dimension_width: number;
  package_dimension_height: number;
  package_dimension_unit_of_measure: UnitsOfMeasureDimentionUpperCase;
  delivery_service_type_id: number;
};

const createLabelSchema = z.object({
  order_items: z.array(
    z.object({
      order_item_id: z.number().int(),
      order_item_quantity: z.number().int().nonnegative(),
    }),
  ),
  package_weight_value: z.string(),
  package_weight_unit_of_measure: z.nativeEnum(WheitMeasureType),
  package_dimension_length: z.number().positive(),
  package_dimension_width: z.number().positive(),
  package_dimension_height: z.number().positive(),
  package_dimension_unit_of_measure: z.nativeEnum(UnitsOfMeasureDimentionUpperCase),
  delivery_service_type_id: z.number().int().optional(),
  delivery_package_id: z.number().int().optional(),
  bill_duties_taxes: z.boolean(),
  enable_tax_id: z.boolean(),
  delivery_service_confirmation_type_id: z.number().int(),
  shop_id: z.union([z.string(), z.literal('all')]),
  service_custom_fields: z.object({}).optional(),
  is_scales: z.number(),
  dimension_method_id: z.number().optional(),
  is_final_shipping_label: z.boolean(),
});

export type CreateLabelProps = z.infer<typeof createLabelSchema>;

export type CostInternalProps = {
  order_id: string;
  package_weight_value: string;
  package_weight_unit_of_measure: WheitMeasureType;
  package_dimension_length: number;
  package_dimension_width: number;
  package_dimension_height: number;
  package_dimension_unit_of_measure: UnitsOfMeasureDimentionUpperCase;
  delivery_service_type_id: number;
  delivery_package_id: number;
  bill_duties_taxes: boolean;
};


export type BarcodeLabelProps = {
  order_id: string;
  order_item_id: number;
};