'use client';
import { Spinner } from '@nextui-org/react';

import { useQuery } from '@apollo/client';
import { ANILIST_USER_PROFILE_QUERY } from '@anilist-app-nx/auth';
import { ErrorJsonViewer } from '@anilist-app-nx/ui';

export function Profile() {
  const { data, loading, error } = useQuery(ANILIST_USER_PROFILE_QUERY);
  if (error) return <ErrorJsonViewer error={error} />;
  if (loading)
    return (
      <div>
        Loading <Spinner />
      </div>
    );
  return <pre>{JSON.stringify(data.Viewer, null, 4)}</pre>;
}
