import { Avatar, Badge } from '@nextui-org/react';
import { AnimeCard } from './anime-card';

export function CharactersSection({ characters }: { characters: any[] }) {
  return (
    <section className={'flex gap-2 flex-wrap'}>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Badge content={character.favourites} color={'primary'}>
              <Avatar
                isBordered
                color="secondary"
                className="w-20 h-20 text-large"
                size={'lg'}
                src={character.image.large}
                alt={character.name.userPreferred}
              />
            </Badge>

            <h5>
              {character.name.userPreferred} {character.gender}
            </h5>
          </div>
        );
      })}
      <AnimeCard
        name={'Reisalin Stout'}
        src={
          'https://s4.anilist.co/file/anilistcdn/character/large/b223350-yNmgtin88wwu.png'
        }
      />
    </section>
  );
}
