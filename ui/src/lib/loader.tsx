export function Loader() {
  return (
    <section className={'Loader grow flex items-stretch justify-center'}>
      <div
        className={
          'grow bg-green-500 grid prose max-w-none place-content-center'
        }
      >
        <h1 className={'text-center'}>Loading...</h1>
      </div>
    </section>
  );
}

export default Loader;
