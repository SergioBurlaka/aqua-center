import { z } from 'zod';

export const timeInfoSchema = z.object({
  work_log_type_id: z.number(),
  work_log_status: z.number(),
  start_time: z.string(), // if you want actual Date validation: z.coerce.date()
  stop_time: z.string(), // same here, could be z.coerce.date()
  total_time: z.number(),
});


export type TimeInfoDto = z.infer<typeof timeInfoSchema>;

export const workLogPropsSchema = z.object({
  work_log_type_id: z.number(),
  work_log_status: z.number(),
});

export type WorkLogProps = z.infer<typeof workLogPropsSchema>;
