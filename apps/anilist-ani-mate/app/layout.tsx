import { type PropsWithChildren } from 'react';
import { Nav } from '@anilist-app-nx/ui';
import {
  AnilistApolloProvider,
  NextAuthProvider,
  Providers,
} from './providers';
import './global.scss';

import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

if (true) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export const metadata = {
  title: 'Ani-Mate | Anilist',
  description: '',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <AnilistApolloProvider>
          <NextAuthProvider>
            <Providers>
              <Nav />
              {children}
            </Providers>
          </NextAuthProvider>
        </AnilistApolloProvider>
      </body>
    </html>
  );
}
