'use client';

import { useQuery } from '@apollo/client';
import userProfile from '../graphql/user-profile.gql';

export function Profile() {
  // const o = client.query(userProfile);

  const { data, loading } = useQuery(userProfile);
  if (loading) return <>Loading</>;
  return <div>{JSON.stringify(data)}</div>;
}
