import { apiClient } from '../../lib';
import { AutoCreateLabelDto, CinBarcodeDto, ScalesDataDto, ScanPageViewDto } from './upcInfo.dtos';
import {
  AutoCreateLabelParamsType,
  EditOrderItemStatusParamsType,
  ScanPageViewType,
  SendLabelToLocalhostType,
} from './upcInfo.types';

export const UPCInfoApi = {
  async getScanPageView(params: ScanPageViewType) {
    return apiClient.post<{ data: ScanPageViewDto }>('/scan-page-view', {
      ...params,
    });
  },
  async postAutoCreateLabel(params: AutoCreateLabelParamsType) {
    return apiClient.post<{ data: AutoCreateLabelDto }>('/delivery/auto-create-label', {
      ...params,
    });
  },
  async postEditOrderItemStatus(params: EditOrderItemStatusParamsType) {
    return apiClient.post<{ data: [] }>('/order-item/edit-order-item-status', {
      ...params,
    });
  },

  async getScalesDataFromLocalhost() {
    return apiClient.get<{ data: ScalesDataDto }>('/', {
      baseURL: 'http://localhost:8000',
    });
  },

  async sendLabelToLocalhost(params: SendLabelToLocalhostType) {
    return apiClient.post('/', params, {
      baseURL: 'http://localhost:7000',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  async getCantIdentifyBarcode() {
    return apiClient.get<{ data: CinBarcodeDto }>('/storage/cin-barcode');
  },
};
