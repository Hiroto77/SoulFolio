import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const sectionControlsUp = useAnimation();
  const sectionControlsDown = useAnimation();
  const sectionDivControls = useAnimation();

  const [selectedId, setSelectedId] = useState("");

  const variant = {
    initialPositionUp: { translateY: "-100%", opacity: 0 },
    initialPositionDown: { translateY: "100%", opacity: 0 },
    finalPosition: { translateY: "0%", opacity: 1 },
    finalPositionForO: { opacity: 1 },
    initialPositionForO: { opacity: 0 },
    hideSectionDiv: { display: "none" },
    showSectionDiv: { display: "flex" },
  };

  useEffect(() => {
    const initialSequenceSimultaneous = async () => {
      sectionControlsUp.start("finalPosition");
      return sectionControlsDown.start("finalPosition");
    };
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    initialSequenceSimultaneous();
  });

  return (
    <div className={"relative"}>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="When logic and proportions, have fallen sloppy dead"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        SectionControlUp={sectionControlsUp}
        SectionControlDown={sectionControlsDown}
        SectionDivControl={sectionDivControls}
      ></Navbar>

      <main className={`relative md:overflow-y-hidden`}>
        <motion.div
          className={`flex md:flex-row flex-col relative`}
          initial={"showSectionDiv"}
          animate={sectionDivControls}
          variants={variant}
        >
          <motion.section
            initial={"initialPositionDown"}
            animate={sectionControlsUp}
            variants={variant}
            transition={{ delay: 0.4 }}
            layoutId="123"
            onClick={() => setSelectedId("123")}
            role="button"
            tabIndex={0}
            className={`h-screen md:w-1/2  flex flex-col justify-between items-center md:border-r-2 border-b-2  pb-4`}
          >
            <h1 className={`${styles.bigTexts}`}>S</h1>
            <p className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase">
              Who am I?
            </p>
            <small className={`md:text-2xl text-xl text-justify w-4/5`}>
              0.01
            </small>
          </motion.section>

          <AnimatePresence>
            {selectedId === "123" && (
              <motion.div
                key={2}
                layoutId={selectedId}
                className="z-50 absolute md:h-3/4 md:w-1/4 h-screen  self-center   w-4/5   flex flex-col justify-center items-center  pb-4  cursor-pointer"
                onClick={() => setSelectedId("")}
              >
                <motion.p
                  className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  A Web Designer <br></br>
                  <motion.p
                    className="text-8xl"
                    initial={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    +
                  </motion.p>
                  <br></br>
                  Typical Punk
                </motion.p>
                <Link href="/">
                  <motion.a
                    className="md:text-xl hover:underline decoration-2 decoration-red-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Learn More about me
                  </motion.a>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.section
            initial={"initialPositionForO"}
            animate={sectionControlsDown}
            variants={variant}
            transition={{ delay: 0.5 }}
            layoutId="321"
            onClick={() => setSelectedId("321")}
            role="button"
            tabIndex={1}
            className={`${styles.section2} h-screen  md:w-1/2  flex flex-col items-center justify-between  md:border-r-2 border-b-2    pb-4`}
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
          </motion.section>

          <motion.section
            initial={"initialPositionDown"}
            animate={sectionControlsUp}
            variants={variant}
            transition={{ delay: 0.4 }}
            role="button"
            tabIndex={2}
            className={`h-screen  md:w-1/2 flex flex-col items-center justify-between md:border-r-2 border-b-2    pb-4`}
          >
            <h1 className={`${styles.bigTexts}`}>U</h1>
            <p className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase">
              Hire me
            </p>
            <small className={`md:text-2xl text-xl text-justify w-4/5`}>
              0.03
            </small>
          </motion.section>
          <motion.section
            initial={"initialPositionUp"}
            animate={sectionControlsDown}
            variants={variant}
            transition={{ delay: 0.4 }}
            role="button"
            tabIndex={3}
            className={`h-screen  md:w-1/2  flex flex-col justify-between items-center border-b-2   pb-4`}
          >
            <h1 className={`${styles.bigTexts}`}>L</h1>
            <p className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase">
              OPINION IS DEAD
            </p>
            <small className={`md:text-2xl text-xl text-justify w-4/5`}>
              0.04
            </small>
          </motion.section>
          <motion.section
            className={`md:h-screen w-screen flex justify-center md:items-end relative md:w-6  p-4 `}
          >
            <p
              className={`relative md:bottom-24 md:rotate-90 uppercase text-center`}
            >
              Somnath&#169;2022
            </p>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
