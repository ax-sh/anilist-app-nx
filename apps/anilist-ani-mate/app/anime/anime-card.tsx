import { Badge, Card, CardFooter } from '@nextui-org/react';
import Image from 'next/image';

export function AnimeCard({ name, src }: { src: string; name: string }) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="img"
        className="object-cover"
        height={200}
        width={200}
        src={src}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1  py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_1rem)] shadow-small z-10">
        <Badge content={''}>
          <p className="text-lg text-black/80 font-bold">{name}</p>
        </Badge>
        {/*<Button*/}
        {/*  className="text-tiny text-white bg-black/20"*/}
        {/*  variant="flat"*/}
        {/*  color="default"*/}
        {/*  radius="lg"*/}
        {/*  size="sm"*/}
        {/*>*/}
        {/*  Notify me*/}
        {/*</Button>*/}
      </CardFooter>
    </Card>
  );
}
