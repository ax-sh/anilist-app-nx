import { useState } from 'react';
import {
  IAnimePartsFragment,
  IUserAnimeListQuery,
  useUserAnimeListQuery,
} from '../../../generated/graphql/graphql';
import { DeepRequired } from 'utility-types';

function transformUserAnimeList(data: IUserAnimeListQuery) {
  const lists = data.MediaListCollection?.lists;
  if (!lists) return [];
  const medias = lists?.flatMap((i) => i?.entries?.map((e) => e?.media));
  return medias;
}

export function useAniMateUserAnimeListQuery(username: string) {
  const [medias, setMedias] = useState<DeepRequired<IAnimePartsFragment>[]>([]);
  const { error, loading } = useUserAnimeListQuery({
    variables: { username },
    onCompleted(data) {
      const medias = transformUserAnimeList(data);
      setMedias(medias);
    },
  });
  return { medias, loading, error };
}
