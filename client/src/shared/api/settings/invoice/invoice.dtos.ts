import { z } from 'zod';

export const shopSchema = z.object({
  shop_id: z.number(),
  shop_name: z.string(),
});

export const invoiceSchema = z.object({
  date_from: z.string(),
  date_to: z.string(),
  file_path: z.string(),
  invalid_file_path: z.string(),
  type: z.number(),
  created_at: z.string(),
  status: z.number(),
  shops: z.array(shopSchema),
});

export type InvoiceDto = z.infer<typeof invoiceSchema>;
export type Shop = z.infer<typeof shopSchema>;

export const createInvoiceSchema = z.object({
  shop_ids: z.array(z.number().int().positive()),
  date_from: z.string(),
  date_to: z.string(),
});

export type CreateInvoice = z.infer<typeof createInvoiceSchema>;

export type TypeFileOptions = 'pdf' | 'excel';

export const createInvoiceFormSchema = z.object({
  shop_ids: z.array(z.number().int().positive()),
  date_from: z.date(),
  date_to: z.date(),
  type: z.custom<TypeFileOptions>((val) => val === 'pdf' || val === 'excel', {
    message: "Invalid type, must be 'pdf' or 'excel'",
  }),
});

export type CreateInvoiceFormType = z.infer<typeof createInvoiceFormSchema>;
