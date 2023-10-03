import { Avatar, Badge, Button, Card, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
export default function CharaCard({ src }: { src: string }) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="img"
        className="object-cover"
        height={200}
        width={200}
        src={src}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
}

export function CharactersSection({ characters }: { characters: any[] }) {
  return (
    <section className={'flex gap-2 flex-wrap'}>
      {characters.map((character) => {
        character.gender;
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
      <CharaCard
        src={
          'https://s4.anilist.co/file/anilistcdn/character/large/b223350-yNmgtin88wwu.png'
        }
      />
    </section>
  );
}
