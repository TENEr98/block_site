import { authControllerGetSession } from '@/shared/api/generated';
import { useQuery } from '@tanstack/react-query';

export function HomePage() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSession(),
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      {data?.email}
    </main>
  );
}
