import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import { AnilistProvider } from '@anilist-app-nx/auth';
import { env } from '../../../../env';

export const authOptions: AuthOptions = {
  providers: [
    AnilistProvider({
      userinfo: {
        async request() {
          console.log('7677');
          return {};
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
