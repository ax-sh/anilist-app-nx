'use client';

import { useAnimeQuery } from '../../generated/graphql/graphql';
import { ErrorJsonViewer } from '@anilist-app-nx/ui';
import { CharactersSection } from './characters-section';

export function AnimeSection() {
  const { data, loading, error } = useAnimeQuery({
    variables: { id: 20 },
  });
  if (error) return <ErrorJsonViewer error={error} />;
  if (loading) return <>loading</>;
  const { characters, ...media } = data?.Media!;
  return <ErrorJsonViewer error={data} />;
  return (
    <section className={'container mx-auto'}>
      <CharactersSection characters={characters.nodes!} />
    </section>
  );
}
