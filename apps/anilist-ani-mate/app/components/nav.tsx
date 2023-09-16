'use client';
import React from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
// import { AcmeLogo } from './AcmeLogo.jsx';

export default function Nav() {
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
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
