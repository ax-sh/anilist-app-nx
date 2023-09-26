'use client';
import { signIn, signOut } from 'next-auth/react';
import { Button } from '@nextui-org/button';
import React, { ComponentProps } from 'react';
import { ButtonProps } from '@nextui-org/react';

// export const LoginButton = () => {
//   return <Button onClick={() => signIn()}>Connect Anilist</Button>;
// };

// export const LogoutButton = () => {
//   return <Button onClick={() => signOut()}>Disconnect Anilist</Button>;
// };
//

export const ConnectAnilistButton = (props: ComponentProps<typeof Button>) => {
  return (
    <Button onClick={() => signIn('anilist')} {...props}>
      Connect Anilist
    </Button>
  );
};

export const DisconnectAnilistButton = (
  props: ComponentProps<typeof Button>,
) => {
  return (
    <Button onClick={() => signOut()} {...props}>
      Disconnect Anilist
    </Button>
  );
};
