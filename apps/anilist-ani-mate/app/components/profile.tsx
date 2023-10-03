'use client';

import { ApolloError, useQuery } from '@apollo/client';
import { ANILIST_USER_PROFILE_QUERY } from '@anilist-app-nx/auth';

function ShowErrorJson({ error }: { error: ApolloError }) {
  return (
    <pre>
      {error.graphQLErrors.map((error) => JSON.stringify(error, null, 4))}
    </pre>
  );
}

export function Profile() {
  const { data, loading, error } = useQuery(ANILIST_USER_PROFILE_QUERY);
  if (error) return <ShowErrorJson error={error} />;
  if (loading) return <pre>Loading</pre>;
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
}
