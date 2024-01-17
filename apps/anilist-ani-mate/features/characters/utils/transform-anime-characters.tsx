import { characterSortPredicate } from './character-sort-predicate';
import {
  IAnimeQuery,
  ICharacterPartsFragment,
} from '../../../generated/graphql/graphql';

export function transformAnimeCharacters(data: IAnimeQuery) {
  const results = data.Media;
  const characters = results?.characters?.nodes as ICharacterPartsFragment[];
  if (!characters) return [];
  const sorted = [...characters];
  sorted.sort(characterSortPredicate);
  return sorted;
}
