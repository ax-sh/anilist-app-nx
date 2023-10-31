import { type PropsWithChildren } from 'react';
import { Nav } from '@anilist-app-nx/ui';
import { AniMateProvider } from './providers';
import './global.scss';

import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import * as process from 'process';

async function initMocks() {
  if (typeof window === 'undefined') {
    // todo: fix this
    // const { server } = await import('./src/mocks/server')
    // await server.listen({ onUnhandledRequest: 'bypass' })
  } else {
    const { worker } = await import('../mocks/browser');
    console.log(worker, 2323);
    await worker.start({ onUnhandledRequest: 'bypass' });
  }
}

// Note the change in ENV var name here
// https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser
// if (process.env.NEXT_PUBLIC_MOCK_APIS === 'enabled') {
void initMocks();
// }

if (process.env.NODE_ENV === 'development') {
  // NOTE: Adds messages only in a dev environment
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
        <AniMateProvider>
          <Nav />
          {children}
        </AniMateProvider>
      </body>
    </html>
  );
}
