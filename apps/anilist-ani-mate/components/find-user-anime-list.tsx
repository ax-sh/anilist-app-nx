'use client';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import SearchInput from './search-input';
import { Button, Divider } from '@nextui-org/react';

export function FindUserAnimeList() {
  const router = useRouter();
  const [value, setValue] = useState('');

  const validationState = useMemo(() => {
    if (value === '') return undefined;

    return value ? 'valid' : 'invalid';
  }, [value]);

  function handleFind() {
    router.push(`/user/${value}`);
  }

  return (
    <div className={'flex flex-col'}>
      <SearchInput
        type={'text'}
        value={value}
        onValueChange={setValue}
        isClearable
        placeholder="Find user"
        className="max-w-xl"
        color={validationState === 'invalid' ? 'danger' : 'success'}
        errorMessage={
          validationState === 'invalid' && 'Please enter a valid email'
        }
        validationState={validationState}
      />
      <Divider className={'my-2'} />
      <Button isDisabled={!value} className={'grow'} onClick={handleFind}>
        Find
      </Button>
    </div>
  );
}
