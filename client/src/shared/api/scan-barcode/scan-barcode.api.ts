import { apiClient } from '../../lib';
import { FindOrderDto } from './scan-barcode.dtos';
import { FindOrderProps } from './scan-barcode.types';

export const ScanBarcodeApi = {
  async findOrder(params: FindOrderProps) {
    return apiClient.post<{ data: FindOrderDto[] }>('/shipping-office/package/find-purchase-order-by-params', {
      ...params,
    });
  },
};
