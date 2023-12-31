'use client';
import { Avatar } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={''}>
      <div className="flex gap-3 items-center">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar name="Junior" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar name="Jane" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        {/* useless */}
        {/* eslint-disable-next-line @cspell/spellchecker */}
        <Avatar name="Joooooooooe" />
      </div>
    </div>
  );
}

export default Ui;
