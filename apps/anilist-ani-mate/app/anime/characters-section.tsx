export function CharactersSection({ characters }: { characters: any[] }) {
  return (
    <section className={'flex gap-2 flex-wrap'}>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <div className={'h-20 w-20 rounded-full overflow-hidden'}>
              <img
                src={character.image.large}
                alt={character.name.userPreferred}
              />
            </div>

            <h5>{character.name.userPreferred}</h5>
          </div>
        );
      })}
    </section>
  );
}
