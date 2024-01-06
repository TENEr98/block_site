import {
  authControllerSignIn,
  authControllerSignUp,
} from '@/shared/api/generated';
import { ROUTES } from '@/shared/routes';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export function useAuthForm(
  controller: typeof authControllerSignUp | typeof authControllerSignIn
) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const authMutation = useMutation({
    mutationFn: controller,
    onSuccess(data, variables, context) {
      router.push(ROUTES.HOME);
    },
  });
  const error = authMutation.error ? 'Something went wrong' : null;
  return {
    register,
    handleSubmit: handleSubmit((data) => authMutation.mutate(data)),
    isLoading: authMutation.isPending,
    error,
  };
}
