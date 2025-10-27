import { z } from 'zod';

export const reportsSchema = z.object({
  date_from: z.string().datetime(),
  date_to: z.string().datetime(),
  return_uploads_labels_report_type_id: z.number(),
});

export type ReportsType = z.infer<typeof reportsSchema>;
const report_type_id = reportsSchema.pick({ return_uploads_labels_report_type_id: true });

export type ReportTypeId = z.infer<typeof report_type_id>;

export const reportsFormSchema = z.object({
  date_from: z.date(),
  date_to: z.date(),
});

export type ReportsForm = z.infer<typeof reportsFormSchema>;

export type InfiniteUploadLabelSuccessParams = {
  limit: number;
  offset: number;
};
