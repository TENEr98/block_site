import { authControllerSignOut } from '@/shared/api/generated';
import { ROUTES } from '@/shared/routes';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export function useLogOut() {
  const router = useRouter();
  const logOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.push(ROUTES.SIGN_IN);
    },
  });
  return { isLoading: logOutMutation.isPending, logOut: logOutMutation.mutate };
}
