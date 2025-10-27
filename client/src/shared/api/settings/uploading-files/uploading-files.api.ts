import { apiClient } from '../../../lib';
import { UploadFilesDto } from './uploading-files.dtos';
import { InfiniteUploadFilesParams, UploadPersonalDataFromTxtFileType } from './uploading-files.types';

export const UploadingFilesApi = {
  async uploadPersonalData(params: UploadPersonalDataFromTxtFileType) {
    return apiClient.post('/version/list', { ...params });
  },

  async getInfiniteUploadFiles(params: InfiniteUploadFilesParams) {
    return apiClient.post<{ data: { date: UploadFilesDto[] } }>('/order/uploading-personal-data/files', {
      ...params,
    });
  },
};
