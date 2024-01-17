'use client';

import { useUserAnimeListQuery } from '../../../generated/graphql/graphql';
import React, { useState } from 'react';
import { ErrorJsonViewer, Loader } from '@anilist-app-nx/ui';

type UserPageProps = { params: { username: string } };

function useAniMateUserAnimeListQuery(username: string) {
  const [medias, setMedias] = useState([]);
  const { data, error, loading } = useUserAnimeListQuery({
    variables: { username },
    onCompleted(data) {
      const medias = data?.MediaListCollection?.lists?.flatMap((i) =>
        i?.entries?.map((e) => e?.media),
      );
      setMedias(medias);
    },
  });
  return { medias, loading, error };
}

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
