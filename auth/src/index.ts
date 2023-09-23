export * from './lib/anilist-provider';
export * from './lib/auth-buttons';
export * as ANILIST_USER_PROFILE_QUERY from './lib/graphql/user-profile.gql';

export function getHeaders(accessToken?: string) {
  if (!accessToken) throw new Error('No access token provided');
  return {
    Authorization: 'Bearer ' + accessToken,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
}
