import { Media } from '../../../generated/graphql/graphql';
import { useToggle } from 'react-use';
import clsx from 'clsx';
import { Button, Card, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { tv } from 'tailwind-variants';

const card = tv({
  slots: {
    base: [
      // '-translate-x-1/4 -translate-y-1/4',
    ],

    footer: [
      'absolute bottom-1 ',
      'z-10 ml-1 w-[calc(100%_-_8px)] ',
      'justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10',
    ],
  },
});
const { base, footer } = card();

export function AnimeCard({ anime }: { anime: Media }) {
  const [on, toggle] = useToggle(false);
  return (
    <div
      className={clsx(
        'duration-200',
        on &&
          'mb-20 flex w-full grow flex-col items-start rounded-2xl bg-white py-20 ',
      )}
    >
      <Card isFooterBlurred radius="lg" className={base()}>
        <Image
          alt=""
          className="object-cover"
          height={200}
          src={anime?.coverImage?.extraLarge as string}
          width={200}
        />
        <CardFooter className={footer()}>
          <strong className="truncate text-tiny text-black/80">
            {anime?.title?.romaji}
          </strong>
          <Button
            className="bg-black/20 text-tiny text-white"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
            onClick={toggle}
          >
            Expand
          </Button>
        </CardFooter>
      </Card>
      <div className={clsx('p-4 text-black', !on && 'hidden')}>
        <h2>{anime.title?.romaji}</h2>
        {/*<AnimeCharacters animeId={anime.id} />*/}
      </div>
    </div>
  );
}
