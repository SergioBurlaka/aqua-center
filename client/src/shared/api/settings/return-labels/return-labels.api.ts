import { apiClient } from '../../../lib';
import { ReturnLabelSchemaDto, UploadErrorLabelDto } from './return-labels.dtos';
import { InfiniteUploadLabelSuccessParams, ReportsType } from './return-labels.types';

export const ReturnLabelsApi = {
  async getReturnLabelsReport(params: ReportsType) {
    return apiClient.post('/orders/return-uploads-labels/report', { ...params });
  },
  async getInfiniteUploadLabelSuccess(params: InfiniteUploadLabelSuccessParams) {
    return apiClient.post<{ data: { date: ReturnLabelSchemaDto[] } }>('/delivery/return/upload-label-success', {
      ...params,
    });
  },
  async getInfiniteUploadLabelError(params: InfiniteUploadLabelSuccessParams) {
    return apiClient.post<{ data: { date: UploadErrorLabelDto[] } }>('/delivery/return/upload-label-error', {
      ...params,
    });
  },
};
