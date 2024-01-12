/* eslint-disable-next-line */
import {
  AnimePartsFragment,
  Maybe,
  Media,
  MediaListCollection,
  MediaListGroup,
  UserAnimeListQuery,
  useUserAnimeListQuery,
} from '../generated/graphql/graphql';
import { AnimeParts } from '*/*.gqlanime.gql';

export interface UserAnimeListProps {}

function AnimeList({ data }: { data: MediaListGroup[] }) {
  console.log(data, 33);
  return 'dfdf';
}

export function UserAnimeList(props: UserAnimeListProps) {
  const { data, error, loading } = useUserAnimeListQuery({
    variables: { username: '' },
  });
  if (loading) return 'loading';

  return (
    <div>
      <AnimeList data={data!.MediaListCollection!.lists! as MediaListGroup[]} />
    </div>
  );
}

export default UserAnimeList;
