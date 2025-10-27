import { apiClient } from '../../../lib';
import { CreateInvoice, InvoiceDto } from './invoice.dtos';
import { InvoicesParamsType } from './invoice.types';

export const InvoiceApi = {
  async getInvoices(params: InvoicesParamsType) {
    return apiClient.post<{ data: { date: InvoiceDto[] } }>('/invoice/files-list', {
      ...params,
    });
  },
  async createInvoicePdf(params: CreateInvoice) {
    return apiClient.post('/invoice/pdf', { ...params });
  },
  async createInvoiceExcel(params: CreateInvoice) {
    return apiClient.post('/invoice/excel', { ...params });
  },
};
