import { useEffect, useState } from 'react';
import {
  ICharacterPartsFragment,
  useAnimeLazyQuery,
} from '../../generated/graphql/graphql';
import { transformAnimeCharacters } from './utils/transform-anime-characters';

export function useAnimeCharacters({ animeId }: { animeId: number }) {
  const [sortedCharacters, setSortedCharacters] = useState<
    ICharacterPartsFragment[]
  >([]);
  const [getAnime, { error, loading }] = useAnimeLazyQuery({
    onCompleted(data) {
      const sortedCharacters = transformAnimeCharacters(data);
      setSortedCharacters(sortedCharacters);
    },
  });
  useEffect(() => {
    void getAnime({ variables: { id: animeId } });
  }, [animeId]);

  return { data: sortedCharacters, getAnime, loading, error };
}
