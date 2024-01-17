'use client';

import React from 'react';
import { ErrorJsonViewer, Loader } from '@anilist-app-nx/ui';
import { useAniMateUserAnimeListQuery } from './use-ani-mate-user-anime-list-query';

type UserPageProps = { params: { username: string } };

export default function UserPage({ params }: UserPageProps) {
  const { medias, loading, error } = useAniMateUserAnimeListQuery(
    params.username,
  );

  if (error) return <ErrorJsonViewer error={error} />;
  if (loading) return <Loader />;

  console.log(medias, 333);

  return (
    <section className={'container mx-auto'}>
      <div className={'prose max-w-none'}>
        <h1>User: {params.username}</h1>

        <div className={'flex flex-wrap gap-4'}>
          <AnimeList results={medias} />
          {/*{medias?.map((anime) => <AnimeCard key={anime?.id} anime={anime} />)}*/}
        </div>
      </div>
    </section>
  );
}
