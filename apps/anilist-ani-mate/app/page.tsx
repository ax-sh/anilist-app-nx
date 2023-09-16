function Hello() {
  return <div className="bg-indigo-500 p-2 font-mono">Hello!</div>;
}

export default async function Index() {
  return (
    <section>
      <Hello />
      <div className="bg-red-500 p-2 font-mono">Hello!</div>
    </section>
  );
}
