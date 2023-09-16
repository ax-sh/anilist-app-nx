'use client';
import { signIn, signOut } from 'next-auth/react';
import { Button } from '@nextui-org/button';
//
// export const LoginButton = () => {
//   return <Button onClick={() => signIn()}>Connect Anilist</Button>;
// };
//
// export const LogoutButton = () => {
//   return <Button onClick={() => signOut()}>Disconnect Anilist</Button>;
// };
//

export const ConnectAnilistButton = () => {
  return <Button onClick={() => signIn('anilist')}>Connect Anilist</Button>;
};

export const DisconnectAnilistButton = () => {
  return <Button onClick={() => signOut()}>Disconnect Anilist</Button>;
};
