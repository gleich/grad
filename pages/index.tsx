import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const Home: NextPage = () => {
  const { width, height } = useWindowSize();
  return (
    <div className={styles.main}>
      <Confetti width={2000} height={2000} numberOfPieces={1000} />
      <div className={styles.body}>
        <h1>We&apos;re graduating!</h1>
        <h1>Goffstown Class of 2022</h1>
        <p>
          - A small website by <a href="https://mattglei.ch">Matt Gleich</a>
        </p>
        <a
          href="https://mattglei.ch/photography"
          target="_blank"
          rel="noreferrer"
        >
          <button>Checkout the photos I took this year</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
