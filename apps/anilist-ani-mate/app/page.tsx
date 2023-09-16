import { Button } from '@nextui-org/button';
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from './components';

export default async function Index() {
  return (
    <section className={'container mx-auto'}>
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
    </section>
  );
}
