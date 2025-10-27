import { z } from 'zod';

const returnLabelSchema = z.object({
  file_name: z.string(),
  user: z.string().email(),
  date: z.string().datetime(),
});

export type ReturnLabelSchemaDto = z.infer<typeof returnLabelSchema>;

export const uploadErrorLabelSchema = z.object({
  file_name: z.string(),
  error: z.string(),
  user: z.string().email(),
  date: z.string().datetime(),
});

export type UploadErrorLabelDto = z.infer<typeof uploadErrorLabelSchema>;
