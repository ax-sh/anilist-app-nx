'use client';
// import { Avatar } from '@nextui-org/react';
import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/react';

export function Hello() {
  return (
    <div className="bg-indigo-500 p-2 font-mono">
      <div className="flex gap-3 items-center">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar name="Junior" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar name="Jane" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar name="Joe" />
      </div>
    </div>
  );
}
