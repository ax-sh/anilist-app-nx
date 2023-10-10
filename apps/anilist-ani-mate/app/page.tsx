import { HomeContainer } from '../components/home-container';
import { Profile } from '../components/profile';
import clsx from 'clsx';

export default async function Index() {
  return (
    <main
      className={clsx(
        'flex min-h-screen flex-col items-center justify-between',
        'p-24',
      )}
    >
      <Profile />
      <HomeContainer />
    </main>
  );
}
