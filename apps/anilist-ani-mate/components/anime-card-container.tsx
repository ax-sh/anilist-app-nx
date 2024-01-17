import React from 'react';

type AnimeCardContainerProps<T> = { rows: T[]; renderRow: React.FC<T> };

export function AnimeCardContainer<T extends Record<string, any>>(
  props: AnimeCardContainerProps<T>,
) {
  return (
    <section className={'grid grid-cols-4 flex-wrap container gap-2'}>
      {props.rows.map((row, index) => (
        <props.renderRow {...row} key={index} />
      ))}
    </section>
  );
}
