'use client';
import React from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import {
  ConnectAnilistButton,
  DisconnectAnilistButton,
} from '@anilist-app-nx/auth';
import { useSession } from 'next-auth/react';

export function Nav() {
  const { status } = useSession();

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        {/*<AcmeLogo />*/}
        <p className="font-bold text-inherit">Anilist</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            AnimeList
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Search
          </Link>
        </NavbarItem>
        {/*<NavbarItem>*/}
        {/*  <Link color="foreground" href="#">*/}
        {/*    Integrations*/}
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
        {/*<NavbarItem>*/}
        {/*  <Button as={Link} color="primary" href="#" variant="flat">*/}
        {/*    Sign Up*/}
        {/*  </Button>*/}
        {/*</NavbarItem>*/}
      </NavbarContent>
    </Navbar>
  );
}
