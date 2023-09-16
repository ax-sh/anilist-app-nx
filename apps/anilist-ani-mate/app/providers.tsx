'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export const NextAuthProvider = ({ children }: PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};
