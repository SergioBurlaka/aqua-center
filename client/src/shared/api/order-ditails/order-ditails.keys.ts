import { createQueryKeys } from '@lukemorales/query-key-factory';

import { OrderIdProps } from './order-ditails.dtos';
import { BarcodeLabelProps, DeliveryPackagesProps, OrderDitailsProps, RateCarrierAutoProps } from './order-ditails.types';

export const orderDitailsKeys = createQueryKeys('orderDitails', {
  orderDitail: (paraps: OrderDitailsProps) => [paraps],
  orderCountries: null,
  editOrder: null,
  addOrderItemTag: null,
  deleteOrderItemTag: null,
  editOrderItemStatus: null,
  problemList: null,
  updateOrderItemDeclaration: null,
  harmonizationCodes: null,
  createOrderDeclaration: null,
  deleteOrderDeclaration: null,
  listLabels: (paraps: OrderIdProps) => [paraps],
  conveyorLineScannedPhotos: (paraps: OrderIdProps) => [paraps],
  getDeclaration: null,
  voidLabel: null,
  uploadReturnLabels: null,
  chatOrderMessage: null,
  createOrderMessage: null,
  deliveryPackages: (paraps: DeliveryPackagesProps) => [paraps],
  rateCarrierAuto: (paraps: RateCarrierAutoProps) => [paraps],
  deliveryServiceTypes: null,
  rateCarrier: null,
  deliveryServiceConfirmationTypes: null,
  createLabel: null,
  costInternal: null,
  barcodeLabel: (params: BarcodeLabelProps) => [params],
});
