import { SignUpForm } from '@/features/auth';
import { UiHeader } from '@/shared/ui/Header';
import FormPageLayout from '@/shared/ui/layouts/FormPage.layout';

type Props = {};

const SignUp = (props: Props) => {
  return (
    <FormPageLayout
      header={<UiHeader />}
      title="Sign Up"
      form={<SignUpForm />}
    />
  );
};
export default SignUp;
