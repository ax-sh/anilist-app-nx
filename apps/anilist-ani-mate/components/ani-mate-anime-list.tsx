import { DeepRequired } from 'utility-types';
import { IAnimePartsFragment } from '../generated/graphql/graphql';
import { AnimeCardContainer } from './anime-card-container';
import React from 'react';
import { useToggle } from 'react-use';
import clsx from 'clsx';
import { AnimeCharactersContainer } from '../features/characters/anime-characters-container';
import { Card, CardHeader, Image } from '@nextui-org/react';

type AniMateAnimeListProps = {
  readonly results: DeepRequired<IAnimePartsFragment>[];
};

function AnimeCard({
  title,
  src,
  onClick,
  className,
}: {
  src: string;
  title: string;
  onClick: () => void;
  className: string;
}) {
  return (
    <Card className={className} isPressable onPress={onClick}>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start backdrop-blur-sm">
        {/*<p className="text-tiny text-black/60 uppercase font-bold">{title}</p>*/}
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

type AnimeCardWrapperProps = {
  title: string;
  src: string;
  animeId: number;
};
function AnimeCardWrapper({ title, src, animeId }: AnimeCardWrapperProps) {
  const [on, toggle] = useToggle(false);
  const className = clsx(
    'duration-200 flex flex-row gap-4',
    on &&
      'bg-black flex w-full grow flex-col items-start rounded-2xl bg-white py-20 col-start-0 col-span-4',
  );

  return (
    <div className={className}>
      <AnimeCard
        onClick={toggle}
        title={title}
        src={src}
        className={clsx(
          on && 'h-40 aspect-square',
          // 'col-span-12 sm:col-span-4 h-80',
        )}
      />
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

export function AniMateAnimeList({ results }: AniMateAnimeListProps) {
  return (
    <AnimeCardContainer
      rows={results}
      renderRow={({ title, coverImage, id }, index) => {
        return (
          <AnimeCardWrapper
            animeId={id}
            key={index}
            title={title?.romaji ?? ''}
            src={coverImage?.extraLarge ?? ''}
          />
        );
      }}
    />
  );
}
