import { type PropsWithChildren } from 'react';
import { Nav } from '@anilist-app-nx/ui';
import { NextAuthProvider, Providers } from './providers';
import './global.scss';

export const metadata = {
  title: 'Ani-Mate | Anilist',
  description: '',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Providers>
            <Nav />
            {children}
          </Providers>
        </NextAuthProvider>
      </body>
    </html>
  );
}
