import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import {
  ANILIST_USER_PROFILE_QUERY,
  AnilistProvider,
  getHeaders,
} from '@anilist-app-nx/auth';
import { env } from '../../../../env';

// import jsonwebtoken from 'jsonwebtoken';
import { CallbacksOptions } from 'next-auth/src/core/types';
import { ApolloClient, InMemoryCache } from '@apollo/client';

function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    // link: createIsomorphLink(),
    ssrMode: typeof window === 'undefined',
  });
}

async function fetchAuthUser(access_token: string) {
  const client = createApolloClient();
  const {
    data,
    // networkStatus,
    // loading
  } = await client.query({
    context: { headers: getHeaders(access_token) },
    query: ANILIST_USER_PROFILE_QUERY,
  });

  return data.Viewer;
}

const anilistProvider = AnilistProvider({
  clientId: env.ANILIST_ID,
  clientSecret: env.ANILIST_SECRET,
  userinfo: {
    async request({ tokens }) {
      return await fetchAuthUser(tokens.access_token!);
    },
  },
});

const jwt = async ({
  account,
  token,
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
  callbacks: {
    jwt,
    session,
  },
  providers: [anilistProvider],
  // debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
