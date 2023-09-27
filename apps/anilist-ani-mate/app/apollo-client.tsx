import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export function createIsomorphLink() {
  return createHttpLink({
    uri: 'https://graphql.anilist.co',
    credentials: 'same-origin',
  });
}

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  console.log(token, 999);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export function createApolloClient() {
  return new ApolloClient({
    link: authLink.concat(createIsomorphLink()),
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
  });
}
