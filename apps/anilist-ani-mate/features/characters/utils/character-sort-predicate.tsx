import { ICharacterPartsFragment } from '../../../generated/graphql/graphql';

export function characterSortPredicate<T extends ICharacterPartsFragment>(
  a: T,
  b: T,
) {
  // equal items sort equally
  if (a === b) {
    return 0;
  }

  // nulls sort after anything else
  if (a === null) {
    return 1;
  }
  if (b === null) {
    return -1;
  }

  const modifier = (x: T) => x?.gender ?? 0;

  return modifier(a) < modifier(b) ? -1 : 1;
}
