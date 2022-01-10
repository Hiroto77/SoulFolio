import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import PopUpCard from "../components/PopUpCard";

const Home: NextPage = () => {
  const sectionControlsUp = useAnimation();
  const sectionControlsDown = useAnimation();
  const sectionDivControls = useAnimation();

  const [selectedId, setSelectedId] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  const variant = {
    initialPositionUp: { translateY: "-100%", opacity: 0 },
    initialPositionDown: { translateY: "100%", opacity: 0 },
    finalPosition: { translateY: "0%", opacity: 1 },
    finalPositionForO: { opacity: 1 },
    initialPositionForO: { opacity: 0 },
    hideSectionDiv: { display: "none" },
    showSectionDiv: { display: "flex" },
    fadeInAndShow: { opacity: 1, display: "flex" },
  };

  useEffect(() => {
    const initialSequenceSimultaneous = async () => {
      sectionControlsUp.start("finalPosition");
      return sectionControlsDown.start("finalPosition");
    };

    initialSequenceSimultaneous();
  });

  useEffect(() => {}, [selectedId]);

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
            role="button"
            tabIndex={0}
            className={`h-screen  md:w-1/2`}
          >
            <AnimatePresence>
              {isTrue && selectedId === 1 ? (
                ""
              ) : (
                <motion.div
                  className="h-screen flex flex-col justify-between items-center  pb-4"
                  variants={variant}
                  onClick={() => {
                    setSelectedId(1);
                    setIsTrue(true);
                  }}
                >
                  <h1 className={`${styles.bigTexts}`}>S</h1>
                  <p className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase">
                    Who am I?
                  </p>
                  <small className={`md:text-2xl text-xl text-justify w-4/5`}>
                    0.01
                  </small>
                </motion.div>
              )}
            </AnimatePresence>
            <PopUpCard
              truth={isTrue}
              SetTruth={(value: boolean | ((prevState: boolean) => boolean)) =>
                setIsTrue(value)
              }
              linkLocation="/about"
              currentId={selectedId}
              targetId={1}
              transition="down"
              linkDescription="Learn more about me"
            />
          </motion.section>

          <motion.section
            initial={"initialPositionForO"}
            animate={sectionControlsDown}
            variants={variant}
            transition={{ delay: 0.5 }}
            role="button"
            tabIndex={1}
            className={`${styles.section2} h-screen  md:w-1/2 `}
          >
            <AnimatePresence>
              {isTrue && selectedId === 2 ? (
                ""
              ) : (
                <motion.div
                  className={`${styles.soul} h-screen flex flex-col justify-between items-center   pb-4`}
                  onClick={() => {
                    setSelectedId(2);
                    setIsTrue(true);
                  }}
                  variants={variant}
                >
                  <h1
                    className={`${styles.bigTexts} md:-rotate-45 translate-y-10`}
                  >
                    O
                  </h1>
                  <p className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase text-center">
                    My Works
                  </p>
                  <small className={`md:text-2xl text-xl text-justify w-4/5`}>
                    0.02
                  </small>
                </motion.div>
              )}
            </AnimatePresence>

            <PopUpCard
              truth={isTrue}
              SetTruth={(value: boolean | ((prevState: boolean) => boolean)) =>
                setIsTrue(value)
              }
              linkLocation="/projects"
              currentId={selectedId}
              targetId={2}
              transition="in"
              description="Most of the time I work on frontend, sometimes I do backend too"
              linkDescription="Show! Don't tell "
            />
          </motion.section>

          <motion.section
            initial={"initialPositionDown"}
            animate={sectionControlsUp}
            variants={variant}
            transition={{ delay: 0.4 }}
            role="button"
            tabIndex={2}
            className={`h-screen  md:w-1/2 `}
          >
            <AnimatePresence>
              {isTrue && selectedId === 3 ? (
                ""
              ) : (
                <motion.div
                  className="h-screen flex flex-col items-center justify-between md:border-r-2 border-b-2    pb-4"
                  onClick={() => {
                    setSelectedId(3);
                    setIsTrue(true);
                  }}
                  variants={variant}
                >
                  <h1 className={`${styles.bigTexts}`}>U</h1>
                  <p className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase">
                    Hire me
                  </p>
                  <small className={`md:text-2xl text-xl text-justify w-4/5`}>
                    0.03
                  </small>
                </motion.div>
              )}
            </AnimatePresence>
            <PopUpCard
              truth={isTrue}
              SetTruth={(value: boolean | ((prevState: boolean) => boolean)) =>
                setIsTrue(value)
              }
              linkLocation="/hireme"
              currentId={selectedId}
              targetId={3}
              transition="down"
              description="Looking for someone as crazy as me to hire? Sure"
              linkDescription="Hire Me!"
            />
          </motion.section>

          <motion.section
            initial={"initialPositionUp"}
            animate={sectionControlsDown}
            variants={variant}
            transition={{ delay: 0.4 }}
            role="button"
            tabIndex={3}
            className={`h-screen md:w-1/2 `}
          >
            <AnimatePresence>
              {isTrue && selectedId === 4 ? (
                ""
              ) : (
                <motion.div
                  className="h-screen  flex flex-col justify-between items-center border-b-2   pb-4"
                  onClick={() => {
                    setSelectedId(4);
                    setIsTrue(true);
                  }}
                  variants={variant}
                >
                  <h1 className={`${styles.bigTexts}`}>L</h1>
                  <p className="text-2xl md:text-3xl p-4 relative bottom-10 uppercase">
                    OPINION IS DEAD
                  </p>
                  <small className={`md:text-2xl text-xl text-justify w-4/5`}>
                    0.04
                  </small>
                </motion.div>
              )}
            </AnimatePresence>
            <PopUpCard
              truth={isTrue}
              SetTruth={(value: boolean | ((prevState: boolean) => boolean)) =>
                setIsTrue(value)
              }
              linkLocation="/socials"
              currentId={selectedId}
              targetId={4}
              transition="up"
              description="Opinions on the internet? What a joke! checkout my socials"
              linkDescription="Chat me up"
            />
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
