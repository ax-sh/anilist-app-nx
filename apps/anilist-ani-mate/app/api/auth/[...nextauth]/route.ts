import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import { AnilistProvider, getHeaders } from '@anilist-app-nx/auth';
import { env } from '../../../../env';
import { ANILIST_USER_PROFILE_QUERY } from '@anilist-app-nx/auth';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

export const authOptions: AuthOptions = {
  providers: [
    AnilistProvider({
      userinfo: {
        async request({ tokens }) {
          const client = new ApolloClient({
            ssrMode: true,
            link: createHttpLink({
              uri: 'https://graphql.anilist.co',
              credentials: 'same-origin',
              headers: getHeaders(tokens.access_token),
            }),
            cache: new InMemoryCache(),
          });

          const {
            data,
            // networkStatus,
            // loading
          } = await client.query({
            query: ANILIST_USER_PROFILE_QUERY,
          });

          return data.Viewer;
        },
      },
      clientId: env.ANILIST_ID,
      clientSecret: env.ANILIST_SECRET,
    }),
    // ...add more providers here
  ],
  // debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
