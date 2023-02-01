import { z } from 'zod';

export const signupSchema = z
  .object({
    email: z
      .string()
      .email()
      .min(8)
      .max(250)
      .transform((val) => val.trim().toLowerCase()),
    password: z.string().min(8).max(250),
    confirm: z.string(),
    role: z.enum(['admin', 'user']).default('user'),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords do not match',
    path: ['confirm'],
  });

export const signinSchema = z.object({
  email: z
    .string()
    .email()
    .min(8)
    .max(250)
    .transform((val) => val.trim().toLowerCase()),
  password: z.string().min(8).max(250),
});

export type SignupDto = z.infer<typeof signupSchema>;
export type SigninDto = z.infer<typeof signinSchema>;
