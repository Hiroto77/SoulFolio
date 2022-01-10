import { motion } from "framer-motion";
import { NextPage } from "next";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { useAnimation } from "framer-motion";
import Particles from "react-tsparticles";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { SiCodepen } from "react-icons/si";
import Head from "next/head";

const Socials: NextPage = () => {
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
        <title>Socials</title>
        <meta name="description" content="Democracy is, is democracy" />
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
            <div className="md:w-1/2">
              <h1 className="text-center md:text-5xl text-2xl">
                Connect with me, atleast virtually..
              </h1>
              <div className="flex justify-evenly mt-6">
                <a
                  href="instagram.com/samurai3247"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram
                    size={64}
                    className="hover:scale-125 transition-all"
                  />
                </a>
                <a
                  href="github.com/SomnathDas"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125 transition-all"
                >
                  <BsGithub size={64} />
                </a>
                <a
                  href="codepen.io/samurai2099"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125 transition-all"
                >
                  <SiCodepen size={64} />
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </Layout>
    </>
  );
};

export default Socials;
