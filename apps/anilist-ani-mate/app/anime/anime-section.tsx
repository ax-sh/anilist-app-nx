'use client';

import { useAnimeQuery } from '../../generated/graphql/graphql';
import { ErrorJsonViewer, Loader } from '@anilist-app-nx/ui';
import { CharactersSection } from './characters-section';

export function AnimeSection() {
  const variables = { id: 20 };
  const { data, error, loading } = useAnimeQuery({
    variables,
  });
  if (error) return <ErrorJsonViewer error={error} />;
  if (loading) return <Loader />;
  const { characters, ...media } = data?.Media!;
  return <ErrorJsonViewer error={data} />;
  return (
    <section className={'container mx-auto'}>
      <CharactersSection characters={characters.nodes!} />
    </section>
  );
}
