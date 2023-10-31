'use client';
import { useSession } from 'next-auth/react';
import { ConnectAnilistButton } from '@anilist-app-nx/auth';
import { FindUserAnimeList } from './find-user-anime-list';
import { tv } from 'tailwind-variants';

export const containerVariant = tv({
  base: 'flex w-full grow items-center justify-center rounded-xl px-8 shadow-lg',
  variants: {
    color: {
      primary: 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white',
      secondary: 'bg-gradient-to-tr from-blue-500 to-green-500 text-white',
    },
    //   size: {
    //     sm: 'text-sm',
    //     md: 'text-base',
    //     lg: 'px-4 py-3 text-lg',
    //   },
  },
  // compoundVariants: [
  //   {
  //     size: ['sm', 'md'],
  //     class: 'px-3 py-1',
  //   },
  // ],
  defaultVariants: {
    // size: 'md',
    color: 'primary',
  },
});

export function HomeContainer() {
  const { status } = useSession();

  return (
    <div className={containerVariant({ color: 'secondary' })}>
      <div className={'flex flex-col gap-4'}>
        {status === 'authenticated' && <FindUserAnimeList />}
        {status === 'unauthenticated' && <ConnectAnilistButton />}
      </div>
    </div>
  );
}
