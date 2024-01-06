import { SignInForm } from '@/features/auth';
import { UiHeader } from '@/shared/ui/Header';
import FormPageLayout from '@/shared/ui/layouts/FormPage.layout';

type Props = {};

const SignIn = (props: Props) => {
  return (
    <FormPageLayout
      header={<UiHeader />}
      title="Sign In"
      form={<SignInForm />}
    />
  );
};
export default SignIn;
