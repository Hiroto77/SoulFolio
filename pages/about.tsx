import { motion } from "framer-motion";
import { NextPage } from "next";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { useAnimation } from "framer-motion";
import Particles from "react-tsparticles";
import Image from "next/image";
import Head from "next/head";

const About: NextPage = () => {
  const sectionControlsDiv = useAnimation();
  const sectionControlsUp = useAnimation();
  const sectionControlsDown = useAnimation();

  const variant = {
    initialPositionUp: { translateX: "-100%", opacity: 0 },
    initialPositionDown: { translateX: "100%", opacity: 0 },
    finalPosition: { translateX: "0%", opacity: 1 },
    finalPositionForO: { opacity: 1 },
    initialPositionForO: { opacity: 0 },
    hideSectionDiv: { display: "none" },
    showSectionDiv: { display: "flex" },
    fadeInAndShow: { opacity: 1, display: "flex" },
  };

  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Detonation of punk in a long lost sea"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
        className="absolute md:w-1/2 h-screen -z-50"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#ffffff",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              resize: true,
            },
            modes: {},
          },
          particles: {
            color: {
              value: "#000000",
            },
            links: {
              color: "#000000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "destroy",
              random: true,
              speed: 0.25,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 2,
            },
          },
          detectRetina: true,
        }}
      />
      <Layout>
        <Navbar
          SectionDivControl={sectionControlsDiv}
          SectionControlUp={sectionControlsUp}
          SectionControlDown={sectionControlsDown}
        />
        <motion.div
          animate={sectionControlsDiv}
          variants={variant}
          className="h-screen w-full md:overflow-y-hidden"
        >
          <motion.section
            animate={sectionControlsUp}
            variants={variant}
            className=" md:w-10/12 h-full border-r-2 md:bg-white p-6 md:pt-12 flex flex-col md:flex-row-reverse justify-center items-center md:justify-evenly"
          >
            <div className="md:w-1/4 w-4/6">
              <Image
                src={"https://avatarfiles.alphacoders.com/274/274047.png"}
                alt="Face"
                className="rounded-full"
                width={5}
                height={5}
                layout="responsive"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-center md:text-5xl text-2xl">Hello there,</h1>
              <h4 className="md:text-3xl text-lg mt-4">
                Born in Schadenfruede, Germany. I am a front-end developer and a
                web designer. I have been utilising my time learning and working
                with react and next.js
              </h4>
            </div>
          </motion.section>
        </motion.div>
      </Layout>
    </>
  );
};

export default About;
