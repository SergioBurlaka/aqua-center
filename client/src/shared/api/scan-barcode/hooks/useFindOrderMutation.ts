import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { ScanBarcodeApi } from '../scan-barcode.api';
import { FindOrderDto } from '../scan-barcode.dtos';
import { scanBarcodeKeys } from '../scan-barcode.keys';
import { FindOrderProps } from '../scan-barcode.types';

export const useFindOrderMutation = (): UseMutationResult<FindOrderDto[], Error, FindOrderProps> => {
  return useMutation({
    mutationKey: scanBarcodeKeys.findOrder.queryKey,
    mutationFn: async (params) => {
      const { data } = await ScanBarcodeApi.findOrder(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Order found successfully',
      });
    },
  });
};
