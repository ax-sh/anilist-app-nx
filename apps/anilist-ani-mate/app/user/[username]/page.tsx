'use client';

import { useUserAnimeListQuery } from '../../../generated/graphql/graphql';
import React, { useMemo } from 'react';
import { ErrorJsonViewer, Loader } from '@anilist-app-nx/ui';
import { AnimeCard } from './anime-card';

type UserPageProps = { params: { username: string } };
export default function UserPage({ params }: UserPageProps) {
  const { data, error, loading } = useUserAnimeListQuery({
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
