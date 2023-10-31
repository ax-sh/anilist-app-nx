'use client';
import React from 'react';

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import {
  ConnectAnilistButton,
  DisconnectAnilistButton,
} from '@anilist-app-nx/auth';
import { useSession } from 'next-auth/react';

export function Nav() {
  const { status, data } = useSession();
  const username = data?.user?.name ?? '';

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link className="font-bold text-inherit" href={'/'}>
          Anilist
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          {status === 'authenticated' && (
            <Link color="foreground" href={`/user/${username}`}>
              AnimeList
            </Link>
          )}
        </NavbarItem>
        {/*<NavbarItem isActive>*/}
        {/*  <Link href="/" aria-current="page">*/}
        {/*    Search*/}
        {/*  </Link>*/}
        {/*</NavbarItem>*/}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {status === 'unauthenticated' && (
            <ConnectAnilistButton className={'bg-blue-400 text-white'} />
          )}
          {status === 'authenticated' && (
            <DisconnectAnilistButton className={'bg-red-400 text-white'} />
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
