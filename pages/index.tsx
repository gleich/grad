import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const Home: NextPage = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti width={width} height={height} />
      <div className={styles.body}>
        <h1>We&apos;re graduating!</h1>
        <h1>Goffstown Class of 2022</h1>
        <p>
          - A small website by <a href="https://mattglei.ch">Matt Gleich</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
