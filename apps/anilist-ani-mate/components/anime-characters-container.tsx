import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import {
  IAnimeQuery,
  ICharacterPartsFragment,
  useAnimeLazyQuery,
} from '../generated/graphql/graphql';
import { Badge, Image } from '@nextui-org/react';
import AnimeCharacterCard from './anime-character-card';

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
  const characters = results?.characters?.nodes as ICharacterPartsFragment[];
  if (!characters) return [];
  const sorted = [...characters];
  sorted.sort(characterSortPredicate);
  return sorted;
}
export function AnimeCharactersContainer({
  className,
  animeId,
  src,
}: AnimeCharactersContainerProps) {
  const [sortedCharacters, setSortedCharacters] = useState<
    ICharacterPartsFragment[]
  >([]);
  const [getAnime, { data, error, loading }] = useAnimeLazyQuery({
    onCompleted(data) {
      const sortedCharacters = transformAnime(data);
      setSortedCharacters(sortedCharacters);
    },
  });
  useEffect(() => {
    void getAnime({ variables: { id: animeId } });
  }, []);

  if (loading) return null;

  return (
    <div
      className={clsx(className, 'bg-cover w-full')}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={'backdrop-blur-md w-full h-full p-10 '}>
        <div>Anime Characters {animeId}</div>
        <div className={'grid grid-cols-5 gap-2'}>
          {sortedCharacters.map((character) => {
            if (
              (character as ICharacterPartsFragment).__typename !== 'Character'
            )
              return null;
            const characterName = character.name?.userPreferred!;
            return (
              <div
                key={character.id}
                className={clsx(character.gender !== 'Female' && 'opacity-30')}
              >
                <Badge
                  content={
                    <span>
                      {character.favourites} {character.gender}
                    </span>
                  }
                  color={'primary'}
                >
                  <AnimeCharacterCard name={characterName}>
                    <Image
                      alt={character.name?.userPreferred!}
                      className="object-cover w-full h-full"
                      height={200}
                      src={character?.image?.large as string}
                      width={200}
                    />
                  </AnimeCharacterCard>
                </Badge>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
