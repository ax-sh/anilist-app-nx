import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import { AnilistProvider, getHeaders } from '@anilist-app-nx/auth';
import { env } from '../../../../env';
import { ANILIST_USER_PROFILE_QUERY } from '@anilist-app-nx/auth';

import { createApolloClient } from '../../../apollo-client';

const anilistProvider = AnilistProvider({
  userinfo: {
    async request({ tokens }) {
      const client = createApolloClient();
      const {
        data,
        // networkStatus,
        // loading
      } = await client.query({
        query: ANILIST_USER_PROFILE_QUERY,
        context: { headers: getHeaders(tokens.access_token) },
      });

      return data.Viewer;
    },
  },
  clientId: env.ANILIST_ID,
  clientSecret: env.ANILIST_SECRET,
});

export const authOptions: AuthOptions = {
  providers: [anilistProvider],
  // debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
