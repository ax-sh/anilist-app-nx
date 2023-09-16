import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

export function createIsomorphLink() {
  return createHttpLink({
    uri: 'https://graphql.anilist.co',
    credentials: 'same-origin',
  });
}

export function createApolloClient() {
  return new ApolloClient({
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
  });
}
