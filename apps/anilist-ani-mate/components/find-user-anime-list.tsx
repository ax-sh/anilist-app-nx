'use client';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import SearchInput from './search-input';
import { Button, Divider } from '@nextui-org/react';

export function FindUserAnimeList() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const isInvalid = useMemo(() => !!value.trim(), [value]);

  const handleFind = () => router.push(`/user/${value}`);

  return (
    <div className={'flex flex-col'}>
      <SearchInput
        type={'text'}
        value={value}
        onValueChange={setValue}
        isClearable
        placeholder="Find user"
        className="max-w-xl"
        color={isInvalid ? 'danger' : 'success'}
        errorMessage={isInvalid && 'Please enter a valid email'}
        isInvalid={isInvalid}
      />
      <Divider className={'my-2'} />
      <Button isDisabled={!value} className={'grow'} onClick={handleFind}>
        Find
      </Button>
    </div>
  );
}
