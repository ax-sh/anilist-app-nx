import {
  ApolloClient,
  createHttpLink,
  DocumentTransform,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

export function createIsomorphLink() {
  return createHttpLink({
    credentials: 'same-origin',
    uri: 'https://graphql.anilist.co',
  });
}

export const httpLink = new HttpLink({
  credentials: 'same-origin',
  uri: 'https://graphql.anilist.co',
});

export function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: createIsomorphLink(),
    ssrMode: typeof window === 'undefined',
  });
}
