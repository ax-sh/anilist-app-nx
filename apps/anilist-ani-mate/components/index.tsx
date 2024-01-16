'use client';

import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
/* eslint-disable @typescript-eslint/no-unused-vars */

function DataTest() {
  const { data, loading, error } = useQuery(gql`
    query ListPosts {
      posts {
        id
        title
      }
    }
  `);
  if (loading) return <>loading</>;
  if (error) {
    console.log(error.name);
    return (
      <div>
        <h1>
          test: {error.name} {error.message}
        </h1>
      </div>
    );
  }

  return <pre>test {JSON.stringify(data, null, 4)}</pre>;
}
