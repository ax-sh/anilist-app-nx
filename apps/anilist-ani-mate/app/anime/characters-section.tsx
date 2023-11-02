import { Avatar, AvatarGroup, Badge } from '@nextui-org/react';
import { AnimeCard } from './anime-card';
import { useMemo } from 'react';
import clsx from 'clsx';

function characterSortPredicate<T extends { gender: string }>(a: T, b: T) {
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

type CharactersSectionProps = {
  characters: { gender: string; id: number; [key: string]: any }[];
};
export function CharactersSection({ characters }: CharactersSectionProps) {
  const sortedCharacters = useMemo(() => {
    const n = [...characters];
    n.sort(characterSortPredicate);
    return n;
  }, [characters]);

  return (
    <section className={' '}>
      {sortedCharacters.map((character) => {
        return (
          <AvatarGroup isGrid key={character.id}>
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
                  className={clsx(
                    'w-20 h-20 text-large',
                    character.gender === 'Female'
                      ? ' opacity-100'
                      : 'opacity-20',
                  )}
                  size={'lg'}
                  src={character.image.large}
                  alt={character.name.userPreferred}
                />
              </Badge>
            </Badge>

            {/*<h5>*/}
            {/*  {character.name.userPreferred} {character.gender}*/}
            {/*</h5>*/}
          </AvatarGroup>
        );
      })}
      {/*Reisalin Stout*/}
      <AnimeCard
        name={'Mary'}
        src={
          'https://s4.anilist.co/file/anilistcdn/character/large/b223350-yNmgtin88wwu.png'
        }
      />
    </section>
  );
}
