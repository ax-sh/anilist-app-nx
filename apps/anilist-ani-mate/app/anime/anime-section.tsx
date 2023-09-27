'use client';

import { isApolloError } from '@apollo/client';
import { useAnimeQuery } from '../../generated/graphql/graphql';

export function AnimeSection() {
  const { data, loading, error } = useAnimeQuery({
    variables: { id: 20 },
  });
  if (error && isApolloError(error)) return <>{JSON.stringify(error)}</>;
  if (loading) return <>loading</>;

  return (
    <section>
      <pre>{JSON.stringify(data.Media, null, 4)}</pre>
    </section>
  );
}
