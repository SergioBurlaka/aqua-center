import { apiClient } from '../../lib';
import { headersMultiPartFormData } from './../../lib/apiClient';
import { OrderDto, OrderReportDto, ShippedOrderDto } from './orders.dtos';
import {
  CancelledItemsReportProps,
  ConditionsParamsType,
  ManifestsPropsType,
  OrdersPropsType,
  PrintBulkProps,
  ReturnRequestReportProps,
  ShippedItemsReportProps,
  UploadNewOrderFromTxtFileType,
  UploadNewTrackerFileType,
} from './orders.types';

export const OrdersApi = {
  async getOrdersNew(params: OrdersPropsType) {
    return apiClient.post<{ data: { date: OrderDto[] } }>('/all-order-tab/new', { ...params });
  },
  async getOrdersNewReport(params: OrdersPropsType) {
    return apiClient.post<{
      data: {
        data: any;
        date: OrderReportDto;
      };
    }>('/all-order-tab/new', { ...params });
  },

  async getOrdersAwaiting(params: OrdersPropsType) {
    return apiClient.post<{ data: { date: OrderDto[] } }>('/all-order-tab/awaiting', { ...params });
  },
  async getOrdersAwaitingReport(params: OrdersPropsType) {
    return apiClient.post<{
      data: {
        data: any;
        date: OrderReportDto;
      };
    }>('/all-order-tab/awaiting', { ...params });
  },

  async getOrdersReceived(params: OrdersPropsType) {
    return apiClient.post<{ data: { date: OrderDto[] } }>('/all-order-tab/received', { ...params });
  },
  async getOrdersReceivedReport(params: OrdersPropsType) {
    return apiClient.post<{
      data: {
        data: any;
        date: OrderReportDto;
      };
    }>('/all-order-tab/received', { ...params });
  },

  async getOrdersPrintLate(params: OrdersPropsType) {
    return apiClient.post<{ data: { date: OrderDto[] } }>('/all-order-tab/print-late', { ...params });
  },
  async getOrdersPrintLateReport(params: OrdersPropsType) {
    return apiClient.post<{
      data: {
        data: any;
        date: OrderReportDto;
      };
    }>('/all-order-tab/print-late', { ...params });
  },

  async getOrdersShipped(params: OrdersPropsType) {
    return apiClient.post<{ data: { date: ShippedOrderDto[] } }>('/all-order-tab/shipped', { ...params });
  },
  async getOrdersShippedReport(params: OrdersPropsType) {
    return apiClient.post<{
      data: {
        data: any;
        date: OrderReportDto;
      };
    }>('/all-order-tab/shipped', { ...params });
  },

  async getOrdersCancel(params: OrdersPropsType) {
    return apiClient.post<{ data: { date: OrderDto[] } }>('/all-order-tab/cancel', { ...params });
  },

  async getOrdersCancelReport(params: OrdersPropsType) {
    return apiClient.post<{
      data: {
        data: any;
        date: OrderReportDto;
      };
    }>('/all-order-tab/cancel', { ...params });
  },

  async getReturnRequestReport(params: ReturnRequestReportProps) {
    return apiClient.post('/orders/return-request/report', { ...params });
  },

  async getShippedItemsReport(params: ShippedItemsReportProps) {
    return apiClient.post('/orders/shipped-list/report', { ...params });
  },

  async getCancelledItemsReport(params: CancelledItemsReportProps) {
    return apiClient.post('/orders/cancelled-scan-page/report', { ...params });
  },

  async getCancelledAllItemsReport(params: CancelledItemsReportProps) {
    return apiClient.post('/orders/cancelled-all/report', { ...params });
  },

  async setUploadNewOrderFromTxtFile(params: UploadNewOrderFromTxtFileType) {
    return apiClient.post(
      '/order/upload-new-order-from-txt-file',
      { ...params },
      { headers: headersMultiPartFormData },
    );
  },
  async setUploadNewTrackerFile(params: UploadNewTrackerFileType) {
    return apiClient.post('/upload-new-tracker-by-file', { ...params }, { headers: headersMultiPartFormData });
  },
  async setPrintBulk(params: PrintBulkProps) {
    return apiClient.post('/delivery/orders-auto-create-label-by-params', { ...params });
  },

  async getManifests(params: ManifestsPropsType) {
    return apiClient.post('/delivery/manifests', { ...params });
  },
  async getOrderItemTags(params: ConditionsParamsType) {
    return apiClient.post('/manual/order-item-tag/list', { ...params });
  },

  async getCreateManifest() {
    return apiClient.get('/delivery/create-manifest');
  },
};
