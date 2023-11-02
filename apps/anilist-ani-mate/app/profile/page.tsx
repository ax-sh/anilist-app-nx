'use client';
import { useAnilistUserProfileQueryQuery } from '../../generated/graphql/graphql';
import { fromError } from '@apollo/client';
import { Avatar } from '@nextui-org/react';
// import { GetServerSideProps } from 'next';

// function withSession(callback: any) {
//   return callback;
// }
//
// export const getServerSideProps = async function ({ req, res }) {
//   const { user } = req.session;
//
//   if (!user) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }
//
//   return {
//     props: { user },
//   };
// };

// export const getServerSideProps = (async (context) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const repo = await res.json();
//   return { props: { repo } };
// }) satisfies GetServerSideProps<any>;

export default function ProfilePage() {
  const { data, error, loading } = useAnilistUserProfileQueryQuery();
  if (error) {
    console.log(fromError(error).map(console.log));
    return (
      <div className={'container mx-auto'}>
        <pre>{JSON.stringify(error, null, 4)}</pre>
      </div>
    );
  }
  if (loading) return <div className={'container mx-auto'}>loading</div>;
  const user = data?.Viewer;
  return (
    <main className={'container mx-auto'}>
      {user?.avatar?.large && (
        <Avatar alt={'user'} src={user?.avatar?.large} title={user?.name} />
      )}
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </main>
  );
}
