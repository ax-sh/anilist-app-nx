import { HomeContainer } from '../components/home-container';
import { tv } from 'tailwind-variants';
// import { Profile } from '../components/profile';

const pageClass = tv({
  base: 'flex grow flex-col items-center justify-between p-24',
});

export default async function Index() {
  return (
    <main className={pageClass()}>
      {/*<Profile />*/}
      <HomeContainer />
    </main>
  );
}
