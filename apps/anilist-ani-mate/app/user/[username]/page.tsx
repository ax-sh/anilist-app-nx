// import { useRouter } from 'next/router';
// import { useUserAnilistQuery } from '@/api/query/useUserAnilistQuery';
// import { useMemo } from 'react';
// import { Media } from '@/__generated__/graphql';
// import { Button, Card, CardFooter, Image } from '@nextui-org/react';
// import { useToggle } from 'react-use';
// import clsx from 'clsx';
//
// import { useAnimeQuery } from '@/pages/user/useAnimeQuery';
//
// function AnimeCharacters({ animeId }: { animeId: number }) {
//   const { data } = useAnimeQuery(animeId);
//
//   return <pre>{JSON.stringify(data?.Media?.characters, null, 4)}</pre>;
// }
//
// function AnimeCard({ anime }: { anime: Media }) {
//   const [on, toggle] = useToggle(false);
//   return (
//     <div
//       className={clsx(
//         'duration-200',
//         on && 'mb-20 flex w-full grow flex-col items-start rounded-2xl bg-white py-20 '
//       )}
//     >
//       <Card isFooterBlurred radius="lg" className="-translate-x-1/4 -translate-y-1/4 border-none">
//         <Image
//           alt="Woman listing to music"
//           className="object-cover"
//           height={200}
//           src={anime?.coverImage?.extraLarge!}
//           width={200}
//         />
//         <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
//           <strong className="truncate text-tiny text-black/80">{anime?.title?.romaji}</strong>
//           <Button
//             className="bg-black/20 text-tiny text-white"
//             variant="flat"
//             color="default"
//             radius="lg"
//             size="sm"
//             onClick={toggle}
//           >
//             Expand
//           </Button>
//         </CardFooter>
//       </Card>
//       <div className={clsx('p-4 text-black', !on && 'hidden')}>
//         <h2>{anime.title?.romaji}</h2>
//         <AnimeCharacters animeId={anime.id} />
//       </div>
//     </div>
//   );
// }
type UserPageProps = { params: { username: number } };
export default function UserPage({ params }: UserPageProps) {
  // const { data, loading, error } = useUserAnilistQuery(username);
  // const medias = useMemo(() => {
  //   return data?.MediaListCollection?.lists?.flatMap(i => i?.entries?.map(e => e?.media));
  // }, [data]);
  // if (error) {
  //   return error.message;
  // }
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  // console.log();

  return (
    <section className={'container mx-auto'}>
      <h1>User: {params.username}</h1>
      {/*<div className={'flex flex-wrap gap-4'}>*/}
      {/*  {medias?.map((anime) => <AnimeCard key={anime?.id} anime={anime} />)}*/}
      {/*</div>*/}
    </section>
  );
}
