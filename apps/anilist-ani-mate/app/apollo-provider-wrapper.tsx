import type { PropsWithChildren } from 'react';
import { useMemo } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
  DocumentTransform,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { NEXT_PUBLIC_ANILIST_GRAPHQL_API_URL } from './constants';
import { logger } from './logger';

const httpLink = new HttpLink({
  uri: NEXT_PUBLIC_ANILIST_GRAPHQL_API_URL,
  // credentials: 'same-origin',
});

async function getAccessToken() {
  const { token } = await fetch('/api/auth/session').then((res) => res.json());
  const { accessToken } = token;
  return { accessToken };
}

export const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  const documentTransform = new DocumentTransform((document) => {
    const transformedDocument = document;
    logger.debug(document);
    // modify the document
    return transformedDocument;
  });

  const client = useMemo(() => {
    const authMiddleware = setContext(async (_, { headers }) => {
      const { accessToken } = await getAccessToken();

      return {
        headers: {
          ...headers,
          authorization: `Bearer ${accessToken}`,
        },
      };
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
      documentTransform,
      ssrMode: typeof window === 'undefined',
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
