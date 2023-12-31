import React from 'react';
import { Input, InputProps } from '@nextui-org/react';
import { CgSearch } from 'react-icons/cg';

export default function SearchInput(props: InputProps) {
  return (
    <Input
      label="Search"
      isClearable
      radius="lg"
      classNames={{
        innerWrapper: 'bg-transparent',
        input: [
          'bg-transparent',
          'text-black/90 dark:text-white/90',
          'placeholder:text-default-700/50 dark:placeholder:text-white/60',
        ],
        inputWrapper: [
          'shadow-xl',
          'bg-default-200/50',
          'dark:bg-default/60',
          'backdrop-blur-xl',
          'backdrop-saturate-200',
          'hover:bg-default-200/70',
          'dark:hover:bg-default/70',
          'group-data-[focused=true]:bg-default-200/50',
          'dark:group-data-[focused=true]:bg-default/60',
          '!cursor-text',
        ],
        label: 'text-black/50 dark:text-white/90',
      }}
      startContent={
        <CgSearch className="pointer-events-none flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
      }
      {...props}
    />
  );
}
