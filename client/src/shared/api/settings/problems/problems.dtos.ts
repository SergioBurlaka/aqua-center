import { z } from 'zod';

export const problemSchema = z.object({
  problem_id: z.number(),
  name: z.string(),
});

export type ProblemDto = z.infer<typeof problemSchema>;

export const createProblemSchema = problemSchema.pick({ name: true });

export type CreateProblemType = z.infer<typeof createProblemSchema>;
