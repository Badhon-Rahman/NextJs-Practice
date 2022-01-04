import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>You are in home Page</p>
        <button className={styles.btn}>Go</button>
      </div>
    </>
    
  )
}
