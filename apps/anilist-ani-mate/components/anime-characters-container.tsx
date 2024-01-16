import clsx from 'clsx';
import React from 'react';

type AnimeCharactersContainerProps = {
  animeId: number;
  className: string;
  src: string;
};

export function AnimeCharactersContainer({
  className,
  animeId,
  src,
}: AnimeCharactersContainerProps) {
  return (
    <div
      className={clsx(className, 'bg-cover w-full')}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={'backdrop-blur-md w-full h-full p-10 '}>
        AnimeCharactersContainer {animeId}
      </div>
    </div>
  );
}
