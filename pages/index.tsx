import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.body}>
      <h1>We&apos;re graduating!</h1>
      <h1>Goffstown Class of 2022</h1>
    </div>
  );
};

export default Home;
