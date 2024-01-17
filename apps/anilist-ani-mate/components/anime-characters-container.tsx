import clsx from 'clsx';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import {
  IAnimeQuery,
  ICharacterPartsFragment,
  useAnimeLazyQuery,
} from '../generated/graphql/graphql';
import {
  Avatar,
  Image,
  Badge,
  Card,
  CardFooter,
  Button,
} from '@nextui-org/react';

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

export default function AnimeCharacter({
  children,
  name,
}: PropsWithChildren<{ name: string }>) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      {children}
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{name}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Like
        </Button>
      </CardFooter>
    </Card>
  );
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
  const [sortedCharacters, setSortedCharacters] = useState<
    ICharacterPartsFragment[]
  >([]);
  const [getAnime, { data, error, loading }] = useAnimeLazyQuery({
    // variables: { id: animeId },
    onCompleted(data) {
      const characters = transformAnime(data);
      if (!characters) return [];
      const sorted = [...characters];
      sorted.sort(characterSortPredicate);
      setSortedCharacters(sorted);
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
              <div key={character.id}>
                {' '}
                <Badge
                  content={
                    <span>
                      {character.favourites} {character.gender}
                    </span>
                  }
                  color={'primary'}
                >
                  <AnimeCharacter name={characterName}>
                    <Image
                      alt={character.name?.userPreferred!}
                      className="object-cover w-full h-full"
                      height={200}
                      src={character?.image?.large as string}
                      width={200}
                    />
                  </AnimeCharacter>

                  {/*<Badge*/}
                  {/*  placement={'bottom-right'}*/}
                  {/*  content={character.name.userPreferred}*/}
                  {/*>*/}
                  {/*  <Avatar*/}
                  {/*    isBordered*/}
                  {/*    color="secondary"*/}
                  {/*    className={clsx('w-20 h-20 text-large', {*/}
                  {/*      'opacity-100': character.gender === 'Female',*/}
                  {/*      'opacity-20': character.gender !== 'Female',*/}
                  {/*    })}*/}
                  {/*    size={'lg'}*/}
                  {/*    src={character.image.large}*/}
                  {/*    alt={character.name.userPreferred}*/}
                  {/*  />*/}
                  {/*</Badge>*/}
                </Badge>
                {/*<h5>*/}
                {/*  {character.name.userPreferred} {character.gender}*/}
                {/*</h5>*/}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
