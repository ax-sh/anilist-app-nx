import {
  IAnimePartsFragment,
  IUserAnimeListQuery,
  useUserAnimeListQuery,
} from '../generated/graphql/graphql';
import { Image, Card, CardHeader } from '@nextui-org/react';
import React, { useState } from 'react';
import { useToggle } from 'react-use';
import clsx from 'clsx';

export interface UserAnimeListProps {}

type AnimeCardContainerProps<T> = { rows: T[]; renderRow: React.FC<T> };

function AnimeCardContainer<T extends Record<string, any>>(
  props: AnimeCardContainerProps<T>,
) {
  return (
    <section className={'grid grid-cols-4 flex-wrap container gap-2'}>
      {props.rows.map((row) => (
        <props.renderRow {...row} />
      ))}
    </section>
  );
}
function AnimeCard({
  title,
  src,
  onClick,
}: {
  src: string;
  title: string;
  onClick: () => void;
}) {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOpen = () => {
    onClick();
  };

  return (
    <Card
      // className="col-span-12 sm:col-span-4 h-80"
      isPressable
      onPress={handleOpen}
    >
      <CardHeader className="absolute z-10 top-1 flex-col !items-start backdrop-blur-sm">
        <p className="text-tiny text-black/60 uppercase font-bold">{title}</p>
        <h4 className="text-black font-medium text-large">{title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={src}
      />
    </Card>
  );

  // return (
  //   <button
  //     className={'relative aspect-square overflow-hidden h-80 rounded-md prose'}
  //     onClick={handleOpen}
  //   >
  //     <img className={'object-cover w-full h-full'} alt="series" src={src} />
  //
  //     <div className={'absolute inset-0 h-full w-full '}>
  //       <div
  //         className={
  //           'absolute bottom-0 p-4 right-0 bg-black/40 text-white font-medium'
  //         }
  //       >
  //         {title}
  //       </div>
  //     </div>
  //   </button>
  // );
}

function AnimeCharactersContainer({
  className,
  animeId,
}: {
  animeId: number;
  className: string;
}) {
  return <div className={className}>AnimeCharactersContainer {animeId}</div>;
}

function AnimeList({ results }: { readonly results: IAnimePartsFragment[] }) {
  return (
    <AnimeCardContainer
      rows={results}
      renderRow={({ title, coverImage, id }, index) => {
        const [on, toggle] = useToggle(false);
        const className = clsx(
          'duration-200',
          on &&
            'mb-20 flex w-full grow flex-col items-start rounded-2xl bg-white py-20 col-start-0 col-span-5',
        );
        return (
          <div className={className}>
            <AnimeCard
              onClick={() => toggle()}
              key={index}
              title={title?.romaji!}
              src={coverImage?.extraLarge!}
            />

            <AnimeCharactersContainer
              animeId={id}
              className={clsx(!on && 'hidden')}
            />
          </div>
        );
      }}
    />
  );
}

function transformUserAnimeList(data: IUserAnimeListQuery) {
  const result = data.MediaListCollection?.lists![0]!;
  const anime: IAnimePartsFragment[] = result?.entries?.map(
    (entry) => entry?.media!,
  )!;
  return anime;
}

export function UserAnimeList(props: UserAnimeListProps) {
  const { data, error, loading } = useUserAnimeListQuery({
    variables: { username: '' },
    onCompleted(data) {
      // console.log('complete', data);
    },
  });
  if (loading) return <div data-testid={'loader'}>loading</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div data-testid={'UserAnimeList'}>
      <AnimeList results={transformUserAnimeList(data!)} />
    </div>
  );
}

export default UserAnimeList;
