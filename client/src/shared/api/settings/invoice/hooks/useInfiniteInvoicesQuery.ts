import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { InvoiceApi } from '../invoice.api';
import { InvoiceDto } from '../invoice.dtos';
import { InvoiceKeys } from '../invoice.keys';
import { InvoicesParamsType } from '../invoice.types';

export const useInfiniteInvoicesQuery = ({
  params,
}: {
  params: InvoicesParamsType;
}): UseInfiniteQueryResult<{ pages: { data: { data: InvoiceDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: InvoiceKeys.invoiceList(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await InvoiceApi.getInvoices({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
