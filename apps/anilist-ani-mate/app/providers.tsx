'use client';

import { NextUIProvider } from '@nextui-org/react';
import { getSession, SessionProvider } from 'next-auth/react';
import {
  ApolloClient,
  ApolloProvider,
  from,
  InMemoryCache,
} from '@apollo/client';
import { PropsWithChildren, useMemo } from 'react';
import { httpLink } from './apollo-client';
import { setContext } from '@apollo/client/link/context';

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
// if (process.env.NEXT_PUBLIC_MOCK_APIS === 'enabled') {
void initMocks();
// }

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

// export const apolloClient = createApolloClient();

export const AnilistApolloProvider = ({ children }: PropsWithChildren) => {
  const client = useMemo(() => {
    const authMiddleware = setContext(async (operation, { headers }) => {
      const session = await getSession();
      if (!session) return headers;

      // @ts-ignore
      const token = session.token.accessToken;

      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    return new ApolloClient({
      cache: new InMemoryCache(),
      link: from([authMiddleware, httpLink]),
    });
  }, []);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
