'use client';
import { useAnimeQueryQuery } from 'apps/anilist-ani-mate/generated/graphql/graphql';

export function AnimeSection() {
  const { data, loading, error } = useAnimeQueryQuery({
    variables: { id: 20 },
  });
  if (error) return <>{JSON.stringify(error)}</>;
  if (loading) return <>loading</>;

  return (
    <section>
      <pre>{JSON.stringify(data.Media, null, 4)}</pre>
    </section>
  );
}
