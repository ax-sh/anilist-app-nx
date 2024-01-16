'use client';
import { useRouter } from 'next/navigation';
import { ComponentProps, useMemo, useState } from 'react';
import SearchInput from './search-input';
import { Button, Divider } from '@nextui-org/react';

function FindUserField(props: {
  value: string;
  onValueChange: (value: ((prevState: string) => string) | string) => void;
  invalid: boolean;
}) {
  return (
    <SearchInput
      type={'text'}
      value={props.value}
      onValueChange={props.onValueChange}
      isClearable
      placeholder="Find user"
      className="max-w-xl"
      color={props.invalid ? 'danger' : 'success'}
      isRequired={true}
    />
  );
}

export function FindUserAnimeList({ className }: ComponentProps<'div'>) {
  const router = useRouter();
  const [value, setValue] = useState('');
  const isInvalid = useMemo(() => !!value.trim(), [value]);
  const handleFind = () => router.push(`/user/${value}`);

  return (
    <div className={className}>
      <FindUserField
        value={value}
        onValueChange={setValue}
        invalid={isInvalid}
      />
      <Divider className={'my-2'} />
      <Button isDisabled={!value} className={'grow'} onClick={handleFind}>
        Find
      </Button>
    </div>
  );
}
