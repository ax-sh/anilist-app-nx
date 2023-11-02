import { type PropsWithChildren } from 'react';
import { Nav } from '@anilist-app-nx/ui';
import { AniMateProvider } from './providers';
import './global.scss';

import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import * as process from 'process';

if (process.env.NODE_ENV === 'development') {
  // NOTE: Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export const metadata = {
  description: '',
  title: 'Ani-Mate | Anilist',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <AniMateProvider>
          <Nav />
          {children}
        </AniMateProvider>
      </body>
    </html>
  );
}
