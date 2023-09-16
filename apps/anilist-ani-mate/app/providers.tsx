'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';
import { createApolloClient } from './apollo-client';

export function Providers({ children }: PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export const NextAuthProvider = ({ children }: PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const apolloClient = createApolloClient();

export const AnilistApolloProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
