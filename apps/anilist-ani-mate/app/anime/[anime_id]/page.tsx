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
  const { characters, title, id, idMal } = data?.Media!;

  return (
    <section className={'container mx-auto prose'}>
      <h1>
        {title?.english} | {title?.romaji}
      </h1>
      <h5>
        anilist: {id} malId:{idMal}
      </h5>
      <div className={'not-prose'}>
        <CharactersSection characters={characters!.nodes!} />
      </div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <pre>{JSON.stringify(title, null, 4)}</pre>
    </section>
  );
}