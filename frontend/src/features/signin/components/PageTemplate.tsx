import PageHeader from '@/components/common/PageHeader';
import { useForm } from 'react-hook-form';
import {
  SignInSchema,
  type SignInInput,
} from '../validation/schema/FormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';

const PageTemplate = () => {
  const [isActive, setIsActive] = useState(true);
  const [errorSignIn, setErrorSignIn] = useState('');
  const {
    // handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: zodResolver(SignInSchema),
    defaultValues: { email: '', password: '' },
  });
  return (
    <div className="mt-14">
      <div className="mx-auto flex max-w-[320px] flex-col items-center justify-center space-y-6 pt-10">
        <PageHeader title="Sotas Todoアプリ" />

        <div className="w-full">
          <form className="space-y-6">
            <div className="space-y-2">
              <div>
                <label className="mb-1 block" htmlFor="email">
                  <span className="font-bold">メールアドレス</span>
                  <input
                    id="email"
                    type="email"
                    className="p-2 border border-border-control placeholder:text-text-placeholder disabled:bg-bg-gray disabled:text-text-gray block h-9 w-full rounded dd-privacy-mask"
                    placeholder="例）you@sotas.com"
                    {...register('email')}
                  />
                </label>
                <div className="h-5">
                  {errors.email && (
                    <p className="text-alert mt-1 font-bold">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1 block" htmlFor="password">
                  <span className="font-bold">パスワード</span>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="p-2 border border-border-control placeholder:text-text-placeholder disabled:bg-bg-gray disabled:text-text-gray block h-9 w-full rounded"
                    {...register('password')}
                  />
                </label>

                <div className="h-5">
                  {errors.password && (
                    <p className="text-alert mt-1 font-bold">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full p-2 font-bold cursor-pointer text-sm ${
                !isActive
                  ? 'bg-bg-gray text-text-gray'
                  : 'bg-link-base text-white'
              }`}
            >
              ログインする
            </button>

            <div className="text-alert mt-1 font-bold">{errorSignIn}</div>

            <Link
              href="/signup"
              className="text-link-base block font-bold text-center"
            >
              新規登録する
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
