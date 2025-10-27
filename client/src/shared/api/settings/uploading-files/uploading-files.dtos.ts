import { z } from 'zod';

const fileSchema = z.object({
  file_name: z.string(),
  status: z.number(),
  user_id: z.number(),
  shops_id: z.string(),
  created_at: z.string().datetime({ offset: true }),
});

export type UploadFilesDto = z.infer<typeof fileSchema>;
