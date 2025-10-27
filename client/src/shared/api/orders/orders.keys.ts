import { createQueryKeys } from '@lukemorales/query-key-factory';

import { ConditionsParamsType, OrdersPropsType } from './orders.types';

export const ordersKeys = createQueryKeys('orders', {
  ordersNew: (infiniteParams: OrdersPropsType) => [infiniteParams],
  ordersAwaiting: (infiniteParams: OrdersPropsType) => [infiniteParams],
  ordersReceived: (infiniteParams: OrdersPropsType) => [infiniteParams],
  ordersPrintLate: (infiniteParams: OrdersPropsType) => [infiniteParams],
  ordersShipped: (infiniteParams: OrdersPropsType) => [infiniteParams],
  ordersCancel: (infiniteParams: OrdersPropsType) => [infiniteParams],
  ordersNewReport: (params: OrdersPropsType) => [params],
  ordersAwaitingReport: (params: OrdersPropsType) => [params],
  ordersReceivedReport: (params: OrdersPropsType) => [params],
  ordersPrintLateReport: (params: OrdersPropsType) => [params],
  ordersShippedReport: (params: OrdersPropsType) => [params],
  orderItemTags: (params: ConditionsParamsType) => [params],
  ordersCancelReport: (params: OrdersPropsType) => [params],
  ordersReturnRequestReport: null,
  ordersUploadNewOrderFromTxtFile: null,
  ordersUploadNewTrackerFile: null,
  ordersShippedItemsReport: null,
  ordersCancelledItemsReport: null,
  ordersPrintBulk: null,
  ordersCancelledAllItemsReport: null,
  ordersGetManifests: null,
  ordersCreateManifest: null,
});
