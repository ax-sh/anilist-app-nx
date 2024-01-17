import clsx from 'clsx';
import React from 'react';

import { Badge, Image } from '@nextui-org/react';

import { useAnimeCharacters } from './use-anime-characters';
import AnimeCharacterCard from './anime-character-card';

type AnimeCharactersContainerProps = {
  animeId: number;
  className: string;
  src: string;
};

export function AnimeCharactersContainer({
  className,
  animeId,
  src,
}: AnimeCharactersContainerProps) {
  const { loading, data } = useAnimeCharacters({ animeId });

  if (loading) return null;

  return (
    <div
      className={clsx(className, 'bg-cover w-full')}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={'backdrop-blur-md w-full h-full p-10 '}>
        <div>Anime Characters {animeId}</div>
        <div className={'grid-cols-4 grid gap-2'}>
          {data.map((character) => {
            const characterName = character?.name?.userPreferred ?? '';
            return (
              <div
                key={character.id}
                className={clsx(
                  'Character',
                  character.gender !== 'Female' && 'opacity-30',
                )}
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
                      alt={characterName}
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
