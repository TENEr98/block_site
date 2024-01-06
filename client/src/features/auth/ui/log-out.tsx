import { UiButton } from '@/shared/ui/Button';
import React from 'react';
import { useLogOut } from '../model/useLogOut';

type Props = {};

function LogOut({}: Props) {
  const { isLoading, logOut } = useLogOut();
  return (
    <UiButton variant="outlined" disabled={isLoading} onClick={() => logOut()}>
      LogOut
    </UiButton>
  );
}

export default LogOut;
