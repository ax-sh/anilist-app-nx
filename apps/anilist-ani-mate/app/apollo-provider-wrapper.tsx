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

const httpLink = new HttpLink({
  uri: NEXT_PUBLIC_ANILIST_GRAPHQL_API_URL,
  // credentials: 'same-origin',
});

export const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  // export const apolloClient = createApolloClient();

  const documentTransform = new DocumentTransform((document) => {
    const transformedDocument = document;
    console.log('[transformedDocument]', document);
    // modify the document
    return transformedDocument;
  });

  const client = useMemo(() => {
    const authMiddleware = setContext(async (_, { headers }) => {
      const { token } = await fetch('/api/auth/token').then((res) =>
        res.json(),
      );

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
      documentTransform,
      // ssrMode: typeof window === 'undefined',
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
