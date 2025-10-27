import { z } from 'zod';

const uploadLogSchema = z.object({
  rate_upload_log_id: z.number(),
  company_id: z.number(),
  tab_name: z.string(),
  status: z.number(),
  created_at: z.string().datetime(),
});

export type UploadLogDto = z.infer<typeof uploadLogSchema>;

const uploadErrorLogSchema = z.object({
  rate_upload_error_id: z.number(),
  company_id: z.number(),
  tab_name: z.string(),
  error_text: z.string(),
  is_view: z.number(),
});

export type UploadErrorLogDto = z.infer<typeof uploadErrorLogSchema>;

export const ratesSchema = z.object({
  country_id: z.number(),
  weight: z.string(),
  price: z.string(),
});

export type RatesDto = z.infer<typeof ratesSchema>;
