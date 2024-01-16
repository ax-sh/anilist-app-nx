import clsx from 'clsx';
import React, { useMemo } from 'react';
import {
  IAnimePartsFragment,
  IAnimeQuery,
  ICharacterPartsFragment,
  IUserAnimeListQuery,
  useAnimeQuery,
} from '../generated/graphql/graphql';

function characterSortPredicate<T extends ICharacterPartsFragment>(a: T, b: T) {
  // equal items sort equally
  if (a === b) {
    return 0;
  }

  // nulls sort after anything else
  if (a === null) {
    return 1;
  }
  if (b === null) {
    return -1;
  }

  const modifier = (x: T) => x?.gender ?? 0;

  return modifier(a) < modifier(b) ? -1 : 1;
}

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
  const characters = (data && transformAnime(data!)) || [];

  const sortedCharacters = useMemo(() => {
    const n = [...characters];
    n.sort(characterSortPredicate);
    return n;
  }, [characters]);
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
