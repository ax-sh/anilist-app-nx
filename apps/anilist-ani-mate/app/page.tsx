import { Button } from '@nextui-org/button';

function Hello() {
  return <div className="bg-indigo-500 p-2 font-mono">Hello!</div>;
}

export default async function Index() {
  return (
    <section>
      <Hello />
      <Button>Click me</Button>
    </section>
  );
}
