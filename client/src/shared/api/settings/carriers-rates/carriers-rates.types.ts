import { z } from 'zod';

export const setIsViewedSchema = z.object({
  rate_upload_error_id: z.number(),
});

export type SetIsViewedType = z.infer<typeof setIsViewedSchema>;

export const createRatesSchema = z.object({
  company_id: z.array(
    z.object({
      company_id: z.number(),
    }),
  ),
});

export type CreateRates = z.infer<typeof createRatesSchema>;

export const ratesListSchema = z.object({
  company_id: z.number().optional(),
  rate_type_id: z.number().optional(),
  country_id: z.number().optional(),
});

export type RatesListPropsType = z.infer<typeof ratesListSchema>;
