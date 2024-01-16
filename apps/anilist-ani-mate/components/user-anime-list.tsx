import {
  IAnimePartsFragment,
  IUserAnimeListQuery,
  useUserAnimeListQuery,
} from '../generated/graphql/graphql';

export interface UserAnimeListProps {}

function AnimeList({ results }: { readonly results: IAnimePartsFragment[] }) {
  return (
    <section className={'grid grid-cols-4 flex-wrap'}>
      {results.map((result, index) => {
        return (
          <div key={index} className={'aspect-square overflow-hidden h-80'}>
            <img
              className={'object-cover w-full h-full'}
              alt="series"
              src={result.coverImage?.extraLarge!}
            />
          </div>
        );
      })}
    </section>
  );
}
function transformUserAnimeList(data: IUserAnimeListQuery) {
  const result = data.MediaListCollection?.lists![0]!;
  const anime: IAnimePartsFragment[] = result?.entries?.map(
    (entry) => entry?.media!,
  )!;
  return anime;
}

export function UserAnimeList(props: UserAnimeListProps) {
  const { data, error, loading } = useUserAnimeListQuery({
    variables: { username: '' },
    onCompleted(data) {
      // console.log('complete', data);
    },
  });
  if (loading) return <div data-testid={'loader'}>loading</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div data-testid={'UserAnimeList'}>
      <AnimeList results={transformUserAnimeList(data!)} />
    </div>
  );
}

export default UserAnimeList;
