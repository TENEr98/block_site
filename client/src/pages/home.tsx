import { LogOut } from '@/features/auth';
import { authControllerGetSession } from '@/shared/api/generated';
import { UiButton } from '@/shared/ui/Button';
import { UiHeader } from '@/shared/ui/Header';
import { UiLink } from '@/shared/ui/Link';
import { UiSelectField } from '@/shared/ui/SelectField';
import { UiTextField } from '@/shared/ui/TextField';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';

export function HomePage() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSession(),
  });
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="min-h-screen">
        <UiHeader
          right={
            <div className="flex items-center gap-x-3">
              {data?.email} <LogOut />
            </div>
          }
        />
        <div>
          <UiButton variant="primary">Hey</UiButton>
          <UiButton variant="secondary">Hey</UiButton>
          <UiButton variant="outlined">Sign out</UiButton>
          <UiButton disabled variant="primary">
            Sign out
          </UiButton>
          <UiTextField
            label="Text field"
            inputProps={{ placeholder: 'Enter email..' }}
          />
          <UiTextField
            error="Text field"
            inputProps={{ placeholder: 'Enter email..' }}
          />
          <UiTextField inputProps={{ placeholder: 'Enter email..' }} />
          <UiSelectField
            options={[{ value: '1', label: '1' }]}
            selectProps={{ placeholder: 'Enter email..' }}
          />
          <UiLink href="/">alksdjfkl;</UiLink>
        </div>
      </main>
    </>
  );
}
