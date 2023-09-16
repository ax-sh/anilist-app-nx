import { ProfileButton, RegisterButton } from './components';
import {
  ConnectAnilistButton,
  DisconnectAnilistButton,
  LoginButton,
  LogoutButton,
} from '@anilist-app-nx/auth';

export default async function Index() {
  return (
    <section className={'container mx-auto'}>
      <div>
        <ConnectAnilistButton />
        <DisconnectAnilistButton />
        <ProfileButton />
        {/*<RegisterButton />*/}
      </div>
    </section>
  );
}
