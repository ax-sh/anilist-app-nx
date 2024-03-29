import React, { PropsWithChildren } from 'react';
import { Button, Card, CardFooter } from '@nextui-org/react';

export default function AnimeCharacterCard({
  children,
  name,
}: PropsWithChildren<{ name: string }>) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      {children}
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{name}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Like
        </Button>
      </CardFooter>
    </Card>
  );
}
