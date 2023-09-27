import { ProfileButton } from './components';
import { Profile } from './components/profile';

export default async function Index() {
  return (
    <section className={'container mx-auto'}>
      <Profile />
      <div className={'flex flex-col gap-4'}>
        <ProfileButton />
        {/*<ConnectAnilistButton />*/}
        {/*<DisconnectAnilistButton />*/}
        {/*<RegisterButton />*/}
      </div>
    </section>
  );
}
