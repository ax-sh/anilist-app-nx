'use client';
import { useAnilistUserProfileQueryQuery } from '../../generated/graphql/graphql';
import { fromError } from '@apollo/client';
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
  const { data, loading, error } = useAnilistUserProfileQueryQuery();
  if (error) {
    console.log(fromError(error).map(console.log));
    return <>{JSON.stringify(error)}</>;
  }
  if (loading) return <>loading</>;
  return (
    <main className={'container mx-auto'}>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </main>
  );
}
