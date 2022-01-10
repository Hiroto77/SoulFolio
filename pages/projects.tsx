import { motion, useAnimation } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Data from "../typings/APIData";

const Projects: NextPage = () => {
  const [isLoading, setIsLoading] = useState(0);
  const [currentData, setCurrentData] = useState<Data[]>([
    {
      id: 0,
      name: "",
      projectUrl: "",
      screenshotUrl: "/",
      category: "",
      description: "",
    },
  ]);

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

  useEffect(() => {
    const getAllProjects = async () => {
      setIsLoading(1);
      const data = await (await fetch("/api")).json();
      setCurrentData(data);
      setIsLoading(0);
    };

    getAllProjects();
  }, []);
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Fear is a mind killer; I must not fear"
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
          className="h-screen w-full md:overflow-y-hidden flex justify-center"
        >
          <motion.section
            animate={sectionControlsUp}
            variants={variant}
            className=" md:w-10/12 h-full border-r-2 border-l-2 md:bg-white p-6 md:pt-12 flex flex-col  justify-center items-center md:justify-evenly overflow-y-scroll"
          >
            <h1 className="text-3xl font-semibold underline decoration-black">
              Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-3/4">
              {isLoading
                ? "Loading"
                : currentData.map((x) => (
                    <div key={x.id} className=" ">
                      <Card
                        title={x.name}
                        description={x.description}
                        imageURL={x.screenshotUrl}
                        projectLink={x.projectUrl}
                      />
                    </div>
                  ))}
            </div>
          </motion.section>
        </motion.div>
      </Layout>
    </>
  );
};

export default Projects;
