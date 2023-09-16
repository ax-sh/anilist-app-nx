import { PropsWithChildren } from 'react';
import './global.css';

export const metadata = {
  title: 'Ani-Mate | Anilist',
  description: '',
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
