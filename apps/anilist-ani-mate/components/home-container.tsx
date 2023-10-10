'use client';
import { useSession } from 'next-auth/react';
import { ConnectAnilistButton } from '@anilist-app-nx/auth';
import { FindUserAnimeList } from './find-user-anime-list';

export function HomeContainer() {
  const { status } = useSession();

  return (
    <div className="flex w-full grow items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-500 px-8 text-white shadow-lg">
      <div className={'flex flex-col gap-4'}>
        {status === 'authenticated' && <FindUserAnimeList />}
        {status === 'unauthenticated' && <ConnectAnilistButton />}
      </div>
    </div>
  );
}
