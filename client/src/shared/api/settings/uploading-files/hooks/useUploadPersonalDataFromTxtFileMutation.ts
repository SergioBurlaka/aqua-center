import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { UploadingFilesApi } from '../uploading-files.api';
import { uploadingFilesKeys } from '../uploading-files.keys';
import { UploadPersonalDataFromTxtFileType } from '../uploading-files.types';

export const useUploadPersonalDataFromTxtFileMutation = (): UseMutationResult<
  unknown,
  Error,
  UploadPersonalDataFromTxtFileType
> => {
  return useMutation({
    mutationKey: uploadingFilesKeys.uploadingFilesUpdate.queryKey,
    mutationFn: async (params) => {
      const { data } = await UploadingFilesApi.uploadPersonalData(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Personal data from txt uploaded',
      });
    },
  });
};
