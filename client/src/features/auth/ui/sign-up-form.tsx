import { ROUTES } from '@/shared/routes';
import { UiButton } from '@/shared/ui/Button';
import { UiLink } from '@/shared/ui/Link';
import { UiTextField } from '@/shared/ui/TextField';
import React from 'react';
import { useAuthForm } from '../model/useAuthForm';
import { authControllerSignUp } from '@/shared/api/generated';

type Props = {};

const SignUpForm = (props: Props) => {
  const { handleSubmit, isLoading, register, error } =
    useAuthForm(authControllerSignUp);

  return (
    <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
      <UiTextField
        label="Email"
        inputProps={{ type: 'email', ...register('email', { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: 'password',
          ...register('password', { required: true }),
        }}
      />
      {error && <span className="text-rose-500">{error}</span>}
      <UiButton disabled={isLoading} variant="primary">
        Sign Up
      </UiButton>
      <UiLink className="text-center" href={ROUTES.SIGN_IN}>
        Sign In
      </UiLink>
    </form>
  );
};

export default SignUpForm;
