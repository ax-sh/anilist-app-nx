'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export const NextAuthProvider = ({ children }: PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export function createIsomorphLink() {
  return createHttpLink({
    uri: 'https://graphql.anilist.co',
    credentials: 'same-origin',
    // headers: {
    //   cookie: req.header('Cookie'),
    // },
  });
}

export const client = new ApolloClient({
  link: createIsomorphLink(),
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export const AnilistApolloProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
