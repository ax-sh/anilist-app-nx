import styles from './page.module.scss';

function Hello() {
  return <div className="bg-indigo-500 p-2 font-mono">Hello!</div>;
}

export default async function Index() {

  return (
    <section className={styles.page}>
     
     <Hello/>
    </section>
  );
}
