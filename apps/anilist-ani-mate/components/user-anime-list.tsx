import {
  IAnimePartsFragment,
  IUserAnimeListQuery,
  useUserAnimeListQuery,
} from '../generated/graphql/graphql';
import { Card, CardHeader, Image } from '@nextui-org/react';
import React from 'react';
import { useToggle } from 'react-use';
import clsx from 'clsx';
import { AnimeCardContainer } from './anime-card-container';
import { AnimeCharactersContainer } from './anime-characters-container';

export interface UserAnimeListProps {}

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
}

function AnimeCardWrapper({
  title,
  src,
  animeId,
}: {
  title: string;
  src: string;
  animeId: number;
}) {
  const [on, toggle] = useToggle(false);
  const className = clsx(
    'duration-200 flex flex-row gap-4',
    on &&
      'mb-20 flex w-full grow flex-col items-start rounded-2xl bg-white py-20 col-start-0 col-span-5',
  );

  return (
    <div className={className}>
      <AnimeCard onClick={toggle} title={title} src={src} />

      {on && (
        <AnimeCharactersContainer
          animeId={animeId}
          className={clsx(!on && 'hidden')}
          src={src}
        />
      )}
    </div>
  );
}

function AnimeList({ results }: { readonly results: IAnimePartsFragment[] }) {
  return (
    <AnimeCardContainer
      rows={results}
      renderRow={({ title, coverImage, id }, index) => {
        return (
          <AnimeCardWrapper
            animeId={id}
            key={index}
            title={title?.romaji!}
            src={coverImage?.extraLarge!}
          />
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
