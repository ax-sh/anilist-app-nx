import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import { AnilistProvider } from '@anilist-app-nx/auth';

export const authOptions: AuthOptions = {
  providers: [
    AnilistProvider({
      requestTokenUrl: '',
      userinfo: {
        async request() {
          console.log('7677');
          return {};
        },
      },
      clientId: 'process.env.GOOGLE_ID!',
      clientSecret: 'process.env.GOOGLE_SECRET!',
    }),
    // ...add more providers here
  ],
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
