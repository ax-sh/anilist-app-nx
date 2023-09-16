'use client';

import { useQuery } from '@apollo/client';
import { ANILIST_USER_PROFILE_QUERY } from '@anilist-app-nx/auth';

export function Profile() {
  // const o = client.query(userProfile);

  const { data, loading, error } = useQuery(ANILIST_USER_PROFILE_QUERY);
  if (error) return <pre>error {JSON.stringify(error, null, 4)}</pre>;
  if (loading) return <pre>Loading</pre>;
  return <div>{JSON.stringify(data)}</div>;
}
