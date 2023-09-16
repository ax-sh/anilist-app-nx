import { Button } from '@nextui-org/button';
import { Hello } from './components';

export default async function Index() {
  return (
    <section className={'container mx-auto'}>
      <Hello />
      <Button>Click me</Button>
    </section>
  );
}
