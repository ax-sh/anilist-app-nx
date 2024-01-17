import React from 'react';

type AnimeCardContainerProps<T> = { rows: T[]; renderRow: React.FC<T> };

export function AnimeCardContainer<T extends Record<string, unknown>>(
  props: AnimeCardContainerProps<T>,
) {
  return (
    <section className={'grid grid-cols-4 flex-wrap container gap-2'}>
      {props.rows.map((row, index) => (
        <props.renderRow key={index} {...row} />
      ))}
    </section>
  );
}
