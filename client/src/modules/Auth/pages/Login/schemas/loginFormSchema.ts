import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z
    .string({
      message: 'Email is required',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  password: z.string({
    message: 'Password is required',
  }),
});
export type LoginFormSchema = z.infer<typeof loginFormSchema>;
