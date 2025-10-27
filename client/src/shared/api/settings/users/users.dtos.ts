import { z } from 'zod';

const userSchema = z.object({
  user_id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  country: z.number(),
  shipments_per_month: z.number(),
  phone: z.union([z.string(), z.literal('null')]),
  invite_code: z.string(),
  hear_about_us: z.string(),
  role_id: z.number(),

  company: z.nullable(z.string()),
  last_login: z.string(),
  user_status: z.number(),
});

export type UsersDto = z.infer<typeof userSchema>;

export type UpdateUser = {
  user_id: number;
  email: string;
  first_name: string;
  last_name: string;
  country: number | null;
  shipments_per_month: number;
  phone: string;
  company_id: number;
  invite_code: string | null;
  hear_about_us: string | null;
  role_id: number | null;
};

const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/\d/, 'Password must contain at least one number')
  .regex(/[!#$%&*?@]/, 'Password must contain at least one special character');

export const userFormSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
  password_confirmation: z.string(),
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  country: z.number().nullable(),
  shipments_per_month: z.number().nonnegative(),
  phone: z.string(),
  company_id: z.number().default(0),
  role_id: z.number().nullable(),
});

export const createUserSchema = userFormSchema.refine((data) => data.password === data.password_confirmation, {
  path: ['password_confirmation'], // Error will appear here if passwords don't match
  message: 'Passwords must match',
});

export type CreateUserType = z.infer<typeof createUserSchema>;

export type DeleteUser = Pick<UsersDto, 'user_id'>;

export const updateUserSchema = userFormSchema.omit({ password: true, password_confirmation: true, company_id: true });

export type UpdateUserType = z.infer<typeof updateUserSchema>;
