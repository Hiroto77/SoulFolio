import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SiReactos } from "react-icons/si";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { AnimationControls, useAnimation, motion } from "framer-motion";
import { NavbarProps } from "../typings/NavbarProps";

const Navbar = ({
  SectionControlUp,
  SectionControlDown,
  SectionDivControl,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuControl = useAnimation();

  const variant = {
    initial: { opacity: 0, display: "none" },
    final: { opacity: 1, display: "flex" },
  };

  useEffect(() => {
    const openNavbarSequence = async () => {
      SectionControlUp.start("initialPositionUp");
      await SectionControlDown.start("initialPositionDown");
      await SectionDivControl.start("hideSectionDiv");
      await menuControl.start("final");
    };

    const closeNavbarSeqence = async () => {
      await menuControl.start("initial");
      SectionControlUp.start("finalPosition");
      SectionControlDown.start("finalPosition");
      return SectionDivControl.start("showSectionDiv");
    };

    isOpen ? openNavbarSequence() : closeNavbarSeqence();
  }, [
    SectionControlDown,
    SectionControlUp,
    SectionDivControl,
    isOpen,
    menuControl,
  ]);
  return (
    <>
      <nav className="fixed z-50 w-full pl-8 pr-8 pt-2">
        <ul className={`flex justify-between relative z-50`}>
          <li>
            <button>
              <SiReactos size={32} />
            </button>
          </li>
          <li>
            <button onClick={() => setIsOpen(!isOpen)}>
              <AiOutlineMenu size={32} />
            </button>
          </li>
        </ul>
      </nav>
      <motion.div
        animate={menuControl}
        initial={"initial"}
        variants={variant}
        className={`h-screen w-screen pt-14 flex flex-col items-center justify-around gap-10`}
        id={styles.hamburger}
      >
        <div className={`flex flex-col w-full items-center gap-10`}>
          <Link href="/">
            <a>
              <span
                className={`md:text-6xl text-4xl hover:underline decoration-1 decoration-black`}
              >
                / HOME
              </span>
              <small>01</small>
            </a>
          </Link>

          <Link href="/projects">
            <a>
              <span
                className={`md:text-6xl text-4xl hover:underline decoration-1 decoration-blac`}

              >
                / PROJECTS
              </span>
              <small>02</small>
            </a>
          </Link>

          <Link href="/about">
            <a>
              <span
                className={`md:text-6xl text-4xl hover:underline decoration-1 decoration-blac`}
              >
                / ABOUT
              </span>
              <small>03</small>
            </a>
          </Link>

          <div
            className={`flex flex-col md:flex-row justify-evenly items-center w-full gap-10`}
          >
            <Link href="/hireme">
              <a>
                <span
                  className={`md:text-6xl text-4xl hover:underline decoration-1 decoration-blac`}
                >
                  / HIRE ME
                </span>
                <small>04</small>
              </a>
            </Link>
            <Link href="/socials">
              <a>
                <span
                  className={`md:text-6xl text-4xl hover:underline decoration-1 decoration-blac`}
                >
                  / SOCIALS
                </span>
                <small>05</small>
              </a>
            </Link>
          </div>
        </div>
        <div
          className={` md:text-xl text-lg flex flex-col uppercase items-center`}
        >
          <span className={`${styles.copyright}`}>Copyright&#169;2022</span>
          <span className={`${styles.copyright}`}>NiTiN</span>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
