export * from './lib/anilist-provider';
export * from './lib/auth-buttons';
export * as ANILIST_USER_PROFILE_QUERY from './lib/graphql/user-profile.gql';

export function getHeaders(accessToken: string | undefined) {
  return {
    Authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
}
