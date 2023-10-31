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

export function AniMateProvider({ children }: PropsWithChildren) {
  return (
    <AnilistApolloProvider>
      <NextAuthProvider>
        <NextUIProvider className={'AniMate flex flex-col'}>
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
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    });
  }, []);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
