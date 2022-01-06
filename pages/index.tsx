import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="When logic and proportions, have fallen sloppy dead"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <main className={`relative md:overflow-y-hidden`}>
        <div className={`md:w-screen flex md:flex-row flex-col relative`}>
          <section
            role="button"
            tabIndex={0}
            className={`${styles.fadeInUp} h-screen md:w-1/2 flex flex-col justify-between items-center md:border-r-2 border-b-2  pb-4`}
          >
            <h1 className={`${styles.bigTexts}`}>S</h1>
            <p className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase">
              Who am I?
            </p>
            <small className={`md:text-2xl text-xl text-justify w-4/5`}>
              0.01
            </small>
          </section>

          <section
            role="button"
            tabIndex={1}
            className={`${styles.fadeInDown} ${styles.section2} h-screen  md:w-1/2  flex flex-col items-center justify-between  md:border-r-2 border-b-2    pb-4`}
          >
            <h1 className={`${styles.bigTexts} md:-rotate-45 translate-y-10`}>
              O
            </h1>
            <p className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase text-center">
              My Works
            </p>
            <small className={`md:text-2xl text-xl text-justify w-4/5`}>
              0.02
            </small>
          </section>
          <section
            role="button"
            tabIndex={2}
            className={`${styles.fadeInUp}  h-screen  md:w-1/2 flex flex-col items-center justify-between md:border-r-2 border-b-2    pb-4`}
          >
            <h1 className={`${styles.bigTexts}`}>U</h1>
            <p className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase">
              Hire me
            </p>
            <small className={`md:text-2xl text-xl text-justify w-4/5`}>
              0.03
            </small>
          </section>
          <section
            role="button"
            tabIndex={3}
            className={`${styles.fadeInDown}  h-screen  md:w-1/2  flex flex-col justify-between items-center border-b-2   pb-4`}
          >
            <h1 className={`${styles.bigTexts}`}>L</h1>
            <p className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase">
              OPINION IS DEAD
            </p>
            <small className={`md:text-2xl text-xl text-justify w-4/5`}>
              0.04
            </small>
          </section>
          <section
            className={`${styles.flash} md:h-screen w-screen flex justify-center md:items-end relative md:w-6  p-4 `}
          >
            <p
              className={`relative md:bottom-24 md:rotate-90 uppercase text-center`}
            >
              Copyright&#169;2022
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
