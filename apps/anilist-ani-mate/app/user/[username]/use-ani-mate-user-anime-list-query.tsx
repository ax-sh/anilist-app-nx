import { useState } from 'react';
import { useUserAnimeListQuery } from '../../../generated/graphql/graphql';

export function useAniMateUserAnimeListQuery(username: string) {
  const [medias, setMedias] = useState([]);
  const { error, loading } = useUserAnimeListQuery({
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
