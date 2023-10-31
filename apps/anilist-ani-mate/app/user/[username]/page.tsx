'use client';

import { Button, Card, CardFooter } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';

import {
  Media,
  useUserAnimeListQuery,
} from '../../../generated/graphql/graphql';
import React, { useMemo } from 'react';
import { ErrorJsonViewer, Loader } from '@anilist-app-nx/ui';
import { useToggle } from 'react-use';

function AnimeCard({ anime }: { anime: Media }) {
  const [on, toggle] = useToggle(false);
  return (
    <div
      className={clsx(
        'duration-200',
        on &&
          'mb-20 flex w-full grow flex-col items-start rounded-2xl bg-white py-20 ',
      )}
    >
      <Card
        isFooterBlurred
        radius="lg"
        className="-translate-x-1/4 -translate-y-1/4 border-none"
      >
        <Image
          alt=""
          className="object-cover"
          height={200}
          src={anime?.coverImage?.extraLarge as string}
          width={200}
        />
        <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
          <strong className="truncate text-tiny text-black/80">
            {anime?.title?.romaji}
          </strong>
          <Button
            className="bg-black/20 text-tiny text-white"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
            onClick={toggle}
          >
            Expand
          </Button>
        </CardFooter>
      </Card>
      <div className={clsx('p-4 text-black', !on && 'hidden')}>
        <h2>{anime.title?.romaji}</h2>
        <AnimeCharacters animeId={anime.id} />
      </div>
    </div>
  );
}

type UserPageProps = { params: { username: string } };
export default function UserPage({ params }: UserPageProps) {
  const { data, loading, error } = useUserAnimeListQuery({
    variables: { username: params.username },
  });
  const medias = useMemo(() => {
    return data?.MediaListCollection?.lists?.flatMap(
      (i) => i?.entries?.map((e) => e?.media),
    );
  }, [data]);
  if (error) return <ErrorJsonViewer error={error} />;

  if (loading) return <Loader />;

  console.log(medias, 333);

  return (
    <section className={'container mx-auto'}>
      <div className={'prose max-w-none'}>
        <h1>User: {params.username}</h1>

        <div className={'flex flex-wrap gap-4'}>
          {medias?.map((anime) => <AnimeCard key={anime?.id} anime={anime} />)}
        </div>
      </div>
    </section>
  );
}
