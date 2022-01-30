import { motion, useAnimation } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Data from "../typings/APIData";

const HireMe: NextPage = () => {
  const sectionControlsDiv = useAnimation();
  const sectionControlsUp = useAnimation();
  const sectionControlsDown = useAnimation();

  const variant = {
    initialPositionUp: { opacity: 0 },
    initialPositionDown: { opacity: 0 },
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
        <title>Hire Me</title>
        <meta
          name="description"
          content="Fear is a mind killer; I must not fear"
        />
        <link rel="icon" href="public/icon_65i_icon.ico" />
      </Head>
      <Particles
        className="absolute md:w-1/2 h-screen -z-50"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000",
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
              value: "#ffffff",
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
              value: 100,
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
            <div className="md:w-1/2 flex flex-col justify-center items-center">
              <h1 className="text-center md:text-5xl text-2xl">Oh My,</h1>
              <p className="md:text-3xl text-lg">
                I see that you are interested in hiring me !! XD
              </p>

              <a
                href="mailto: shivamkiran2@gmail.com"
                className="border-2 border-black p-4 hover:border-dashed"
              >
                Send Email
              </a>
            </div>
          </motion.section>
        </motion.div>
      </Layout>
    </>
  );
};

export default HireMe;
