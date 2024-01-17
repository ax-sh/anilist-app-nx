import { characterSortPredicate } from './character-sort-predicate';
import {
  IAnimeQuery,
  ICharacterPartsFragment,
} from '../../../generated/graphql/graphql';
import { DeepRequired } from 'utility-types';

export function transformAnimeCharacters(data: IAnimeQuery) {
  const results = data.Media;
  const characters = results?.characters
    ?.nodes as DeepRequired<ICharacterPartsFragment>[];
  if (!characters) return [];
  const sorted = [...characters];
  sorted.sort(characterSortPredicate);
  return sorted;
}
