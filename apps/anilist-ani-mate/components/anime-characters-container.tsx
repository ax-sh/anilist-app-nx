import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import {
  IAnimePartsFragment,
  IAnimeQuery,
  ICharacterPartsFragment,
  IUserAnimeListQuery,
  useAnimeLazyQuery,
  useAnimeQuery,
} from '../generated/graphql/graphql';
import { Avatar, AvatarGroup, Badge } from '@nextui-org/react';

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
  const [sortedCharacters, setSortedCharacters] = useState([]);
  const [getAnime, { data, error, loading }] = useAnimeLazyQuery({
    // variables: { id: animeId },
    onCompleted(data) {
      const characters = transformAnime(data!);
      const n = [...characters];
      n.sort(characterSortPredicate);
      setSortedCharacters(n);
    },
  });
  useEffect(() => {
    getAnime({ variables: { id: animeId } });
  }, []);

  //
  if (loading) return null;
  console.log(sortedCharacters);
  return (
    <div
      className={clsx(className, 'bg-cover w-full')}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={'backdrop-blur-md w-full h-full p-10 '}>
        <div>Anime Characters {animeId}</div>

        {sortedCharacters.map((character) => {
          return (
            <div key={character.id} className={'grid grid-col-5'}>
              <Badge
                content={
                  <span>
                    {character.favourites} {character.gender}
                  </span>
                }
                color={'primary'}
              >
                <Badge
                  placement={'bottom-right'}
                  content={character.name.userPreferred}
                >
                  <Avatar
                    isBordered
                    color="secondary"
                    className={clsx('w-20 h-20 text-large', {
                      'opacity-100': character.gender === 'Female',
                      'opacity-20': character.gender !== 'Female',
                    })}
                    size={'lg'}
                    src={character.image.large}
                    alt={character.name.userPreferred}
                  />
                </Badge>
              </Badge>

              {/*<h5>*/}
              {/*  {character.name.userPreferred} {character.gender}*/}
              {/*</h5>*/}
            </div>
          );
        })}
      </div>
    </div>
  );
}
