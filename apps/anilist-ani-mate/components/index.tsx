'use client';

import Link from 'next/link';

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
