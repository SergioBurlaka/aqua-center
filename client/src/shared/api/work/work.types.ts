/* eslint-disable no-unused-vars */
export type ScanPageViewType = {
  code: string;
};

type OrderItemsType = {
  order_item_id: number;
  order_item_quantity: number;
};
export type AutoCreateLabelParamsType = {
  order_items: OrderItemsType[];
  package_dimension_length: number | number;
  package_dimension_width: number | number;
  package_dimension_height: number | number;
  package_weight_value: number | number;
  is_scales: number;
  is_scan_page: boolean;
};

export enum OrderStatus {
  NEW = 1,
  PURCHASED = 2,
  HAS_TRACKER = 3,
  RECEIVED = 4,
  PRINT_LATE = 5,
  RETURN = 7,
  CANCEL = 9,
  PROBLEM = 10,
  SHIPPING = 100,
  DELIVERED = 101,
}

export type EditOrderItemStatusParamsType = {
  order_item_id: number;
  order_item_status_id: OrderStatus;
  problem_id?: number;
  comment?: string | null;
  page_id: number;
};

export type SendLabelToLocalhostType = {
  file: string;
};
