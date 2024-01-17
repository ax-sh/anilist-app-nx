import { Card, CardHeader, Image } from '@nextui-org/react';
import React from 'react';
import { useToggle } from 'react-use';
import clsx from 'clsx';
import { AnimeCharactersContainer } from '../features/characters/anime-characters-container';
import { useAniMateUserAnimeListQuery } from '../app/user/[username]/use-ani-mate-user-anime-list-query';
import { AniMateAnimeList } from './ani-mate-anime-list';

export interface UserAnimeListProps {}

export function UserAnimeList(props: UserAnimeListProps) {
  const { loading, error, medias } = useAniMateUserAnimeListQuery('ro');
  if (loading) return <div data-testid={'loader'}>loading</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div data-testid={'UserAnimeList'}>
      <AniMateAnimeList results={medias} />
    </div>
  );
}

export default UserAnimeList;
