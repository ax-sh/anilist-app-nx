import { type PropsWithChildren } from 'react';
import { Nav } from '@anilist-app-nx/ui';
import { Providers } from './providers';
import './global.scss';

export const metadata = {
  title: 'Ani-Mate | Anilist',
  description: '',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
