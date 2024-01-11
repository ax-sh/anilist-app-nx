/* eslint-disable-next-line */
import { useUserAnimeListQuery } from '../generated/graphql/graphql';

export interface UserAnimeListProps {}

export function UserAnimeList(props: UserAnimeListProps) {
  const { data, error, loading } = useUserAnimeListQuery({
    variables: { username: '' },
  });
  if (loading) return 7;
  console.log(data!.MediaListCollection?.lists, 888);
  return (
    <div>
      <h1>Welcome to UserAnimeList!</h1>
    </div>
  );
}

export default UserAnimeList;
