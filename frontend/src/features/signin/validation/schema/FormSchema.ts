import * as z from 'zod';

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'メールアドレスは必ず指定してください。' })
    .email({ message: '入力形式がメールアドレスではありません' }),
  password: z
    .string()
    .min(8, { message: 'パスワードは8文字以上で入力してください' })
    .max(32, { message: 'パスワードは32文字以下で入力してください' }),
});

export type SignInInput = z.infer<typeof SignInSchema>;
