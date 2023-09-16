'use client';

import { useQuery } from '@apollo/client';
import userProfile from './graphql/user-profile.gql';

export function Profile() {
  // const o = client.query(userProfile);

  const { data, loading } = useQuery(userProfile);
  console.log(data, loading, 77777);
  return <div>{JSON.stringify(data)}</div>;
}
