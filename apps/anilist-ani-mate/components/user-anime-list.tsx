import {
  IMediaListGroup,
  useUserAnimeListQuery,
} from '../generated/graphql/graphql';

export interface UserAnimeListProps {}

function AnimeList({ data }: { data: IMediaListGroup[] }) {
  console.log(data, 33);
  return <>anime list</>;
}

export function UserAnimeList(props: UserAnimeListProps) {
  const { data, error, loading } = useUserAnimeListQuery({
    variables: { username: '' },
  });
  if (loading) return <>loading</>;
  if (error) return <>{error.message}</>;

  return (
    <div>
      <AnimeList
        data={data!.MediaListCollection!.lists! as IMediaListGroup[]}
      />
    </div>
  );
}

export default UserAnimeList;
