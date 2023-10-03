'use client';
import { useAnimeQuery } from '../../../generated/graphql/graphql';
import { ErrorJsonViewer } from '@anilist-app-nx/ui';
import { CharactersSection } from '../characters-section';

type AnimePageProps = { params: { anime_id: number } };
// https://anilist.co/anime/162893/Ryza-no-Atelier-Tokoyami-no-Joou-to-Himitsu-no-Kakurega/
export default function AnimePage({ params }: AnimePageProps) {
  const { data, loading, error } = useAnimeQuery({
    variables: { id: params.anime_id },
  });
  if (error) return <ErrorJsonViewer error={error} />;
  if (loading) return <>loading</>;
  const { characters, ...media } = data?.Media!;
  return (
    <section className={'container mx-auto'}>
      <CharactersSection characters={characters.nodes!} />
    </section>
  );
}
