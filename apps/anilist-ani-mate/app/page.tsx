import { ProfileButton } from './components';
import {
  ConnectAnilistButton,
  DisconnectAnilistButton,
} from '@anilist-app-nx/auth';

export default async function Index() {
  return (
    <section className={'container mx-auto'}>
      <div className={'flex flex-col gap-4'}>
        <ConnectAnilistButton />
        <DisconnectAnilistButton />
        <ProfileButton />
        {/*<RegisterButton />*/}
      </div>
    </section>
  );
}
