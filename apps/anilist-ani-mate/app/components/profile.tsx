'use client';

import { useQuery } from '@apollo/client';
import { userProfileQuerySchema } from '@anilist-app-nx/auth';

export function Profile() {
  // const o = client.query(userProfile);

  const { data, loading, error } = useQuery(userProfileQuerySchema);
  if (error) return <pre>error {JSON.stringify(error, null, 4)}</pre>;
  if (loading) return <pre>Loading</pre>;
  return <div>{JSON.stringify(data)}</div>;
}
