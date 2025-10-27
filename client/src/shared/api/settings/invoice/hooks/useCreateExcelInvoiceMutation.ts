import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { InvoiceApi } from '../invoice.api';
import { CreateInvoice } from '../invoice.dtos';
import { InvoiceKeys } from '../invoice.keys';

export const useCreateExcelInvoiceMutation = (): UseMutationResult<unknown, Error, CreateInvoice> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: InvoiceKeys.createExcelInvoice.queryKey,
    mutationFn: async (params) => {
      const { data } = await InvoiceApi.createInvoiceExcel(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: InvoiceKeys.invoiceList._def });

      notification.success({
        message: 'Excel Invoice created successfully',
      });
    },
  });
};
