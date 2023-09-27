import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import { AnilistProvider, getHeaders } from '@anilist-app-nx/auth';
import { env } from '../../../../env';
import { ANILIST_USER_PROFILE_QUERY } from '@anilist-app-nx/auth';

// import jsonwebtoken from 'jsonwebtoken';

import { createApolloClient } from '../../../apollo-client';
import { CallbacksOptions } from 'next-auth/src/core/types';

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
}: Parameters<CallbacksOptions['jwt']>[0]) => {
  if (account) {
    token.accessToken = account.access_token;
  }
  return token;
};

type ExtendedSessionType = Parameters<CallbacksOptions['session']>[0];

// type ExtendedSessionType = Omit<
//   Parameters<CallbacksOptions['session']>[0],
//   'session'
// > & {
//   session: Pick<Parameters<CallbacksOptions['session']>[0], 'session'> & {
//     token: JWT;
//   };
// };
const session = async function session(params: ExtendedSessionType) {
  // const encodedToken = jsonwebtoken.sign(params.token, 'process.env.SECRET', {
  //   algorithm: 'HS256',
  // });

  // @ts-ignore
  params.session.token = params.token;

  return params.session;
};

export const authOptions: AuthOptions = {
  providers: [anilistProvider],
  callbacks: {
    session,
    jwt,
  },
  // debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
