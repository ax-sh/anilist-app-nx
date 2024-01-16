import {
  IAnimePartsFragment,
  IUserAnimeListQuery,
  useUserAnimeListQuery,
} from '../generated/graphql/graphql';

export interface UserAnimeListProps {}

type AnimeCardContainerProps<T> = { rows: T[]; renderRow: React.FC<T> };

function AnimeCardContainer<T extends Record<string, any>>(
  props: AnimeCardContainerProps<T>,
) {
  return (
    <div className={'grid grid-cols-4 flex-wrap container gap-2'}>
      {props.rows.map((row) => (
        <props.renderRow {...row} />
      ))}
    </div>
  );
}
function AnimeCard({ title, src }: { src: string; title: string }) {
  return (
    <div
      className={'relative aspect-square overflow-hidden h-90 rounded-md prose'}
    >
      <img className={'object-cover w-full h-full'} alt="series" src={src} />

      <div className={'absolute inset-0 h-full w-full '}>
        <div
          className={
            'absolute bottom-0 p-4 right-0 bg-black/40 text-white font-medium'
          }
        >
          {title}
        </div>
      </div>
    </div>
  );
}

function AnimeList({ results }: { readonly results: IAnimePartsFragment[] }) {
  console.log(results, 33);
  return (
    <section>
      <AnimeCardContainer
        rows={results}
        renderRow={({ title, coverImage }, index) => (
          <AnimeCard
            key={index}
            title={title?.romaji!}
            src={coverImage?.extraLarge!}
          />
        )}
      />
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
