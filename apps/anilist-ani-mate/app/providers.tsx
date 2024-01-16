'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

import { PropsWithChildren, useMemo } from 'react';

import { ApolloProviderWrapper } from './apollo-provider-wrapper';

async function initMocks() {
  if (typeof window === 'undefined') {
    // todo: fix this
    // const { server } = await import('./src/mocks/server')
    // await server.listen({ onUnhandledRequest: 'bypass' })
  } else {
    // NOTE needs to run in the browser (client side)
    const { worker } = await import('../mocks/browser');
    await worker.start({ onUnhandledRequest: 'bypass' });
  }
}

// Note the change in ENV var name here
// https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser
if (process.env.NEXT_PUBLIC_MOCK_APIS) {
  void initMocks();
}

export function AniMateProvider({ children }: PropsWithChildren) {
  return (
    <AnilistApolloProvider>
      <NextAuthProvider>
        <NextUIProvider className={'AniMate flex flex-col min-h-screen'}>
          {children}
        </NextUIProvider>
      </NextAuthProvider>
    </AnilistApolloProvider>
  );
}

export const NextAuthProvider = ({ children }: PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const AnilistApolloProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProviderWrapper>{children}</ApolloProviderWrapper>;
};
