import NextAuth, { Session, User } from 'next-auth';
import type { AuthOptions } from 'next-auth';
import { AnilistProvider, getHeaders } from '@anilist-app-nx/auth';
import { env } from '../../../../env';
import { ANILIST_USER_PROFILE_QUERY } from '@anilist-app-nx/auth';
import { JWT } from 'next-auth/jwt';
// import jsonwebtoken from 'jsonwebtoken';

import { createApolloClient } from '../../../apollo-client';
import type { AdapterUser } from 'next-auth/src/adapters';

async function fetchAuthUser(access_token: string) {
  const client = createApolloClient();
  const {
    data,
    // networkStatus,
    // loading
  } = await client.query({
    query: ANILIST_USER_PROFILE_QUERY,
    context: { headers: getHeaders(access_token) },
  });

  return data.Viewer;
}

const anilistProvider = AnilistProvider({
  userinfo: {
    async request({ tokens }) {
      return await fetchAuthUser(tokens.access_token!);
    },
  },
  clientId: env.ANILIST_ID,
  clientSecret: env.ANILIST_SECRET,
});

const jwt = async ({
  token,
  account,
}: {
  token: JWT;
  user: User | AdapterUser;
  account: any;
}) => {
  if (account) {
    token.accessToken = account.access_token;
  }
  return token;
};

const session = async function session(params: {
  session: Session;
  user: User;
  token: JWT;
}) {
  // const encodedToken = jsonwebtoken.sign(params.token, 'process.env.SECRET', {
  //   algorithm: 'HS256',
  // });

  // @ts-ignore
  params.session.token = params.token;

  return params.session;
};
export const authOptions: AuthOptions = {
  providers: [anilistProvider],
  // debug: true,
  callbacks: {
    session,
    jwt,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
