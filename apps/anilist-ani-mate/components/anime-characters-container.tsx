import clsx from 'clsx';
import React from 'react';
import {
  IAnimePartsFragment,
  IAnimeQuery,
  ICharacterPartsFragment,
  IUserAnimeListQuery,
  useAnimeQuery,
} from '../generated/graphql/graphql';

type AnimeCharactersContainerProps = {
  animeId: number;
  className: string;
  src: string;
};

function transformAnime(data: IAnimeQuery) {
  const results = data.Media;
  const characters = results?.characters?.nodes?.map(
    (i) => i as ICharacterPartsFragment,
  );
  return characters;
}
export function AnimeCharactersContainer({
  className,
  animeId,
  src,
}: AnimeCharactersContainerProps) {
  const { data, error, loading } = useAnimeQuery({
    variables: { id: animeId },
  });
  if (loading) return null;
  console.log(transformAnime(data!), loading, error);
  return (
    <div
      className={clsx(className, 'bg-cover w-full')}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={'backdrop-blur-md w-full h-full p-10 '}>
        AnimeCharactersContainer {animeId}
      </div>
    </div>
  );
}
