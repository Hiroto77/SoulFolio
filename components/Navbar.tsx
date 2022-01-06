import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SiReactos } from "react-icons/si";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const AllSections = Array.prototype.slice.call(
      document.getElementsByTagName("section")
    );
    const menu: any = document.getElementById(styles.hamburger);
    const main: any = document.getElementsByTagName("main")[0];
    if (isOpen) {
      main.classList.remove(styles.fadeIn);
      main.classList.add(styles.fadeOut);
      AllSections.map((x, index) => {
        if (index % 2 == 0) {
          AllSections[index].classList.add(styles.fadeOutUp);
        } else {
          AllSections[index].classList.add(styles.fadeOutDown);
        }
      });
      setTimeout(() => {
        AllSections.map((x) => (x.style.display = "none"));
      }, 500);
      setTimeout(() => {
        AllSections.map((x, index) =>
          index % 2 == 0
            ? AllSections[index].classList.remove(styles.fadeOutUp)
            : AllSections[index].classList.remove(styles.fadeOutDown)
        );
        menu.style.display = "flex";
        menu.classList.add(styles.fadeIn);
        menu.classList.remove(styles.fadeOut);
      }, 500);
    } else {
      AllSections.map((x) => x.classList.remove(styles.fadeOut));
      main.classList.remove(styles.fadeOut);
      main.classList.add(styles.fadeIn);
      setTimeout(() => {
        AllSections.map((x) => (x.style.display = "flex"));
      }, 500);
      menu.classList.add(styles.fadeOut);
      menu.classList.remove(styles.fadeIn);
      setTimeout(() => {
        menu.style.display = "none";
      }, 500);
    }
  }, [isOpen]);
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
      <div
        className={`hidden h-screen w-screen pt-14 flex flex-col items-center justify-around gap-10`}
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

          <Link href="/">
            <a>
              <span
                className={`md:text-6xl text-4xl hover:underline decoration-1 decoration-blac`}
              >
                / PROJECTS
              </span>
              <small>02</small>
            </a>
          </Link>

          <Link href="">
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
            <Link href="">
              <a>
                <span
                  className={`md:text-6xl text-4xl hover:underline decoration-1 decoration-blac`}
                >
                  / HIRE ME
                </span>
                <small>04</small>
              </a>
            </Link>
            <Link href="">
              <a>
                <span
                  className={`md:text-6xl text-4xl hover:underline decoration-1 decoration-blac`}
                >
                  / BLOG
                </span>
                <small>05</small>
              </a>
            </Link>
          </div>
        </div>
        <div
          className={` md:text-3xl text-xl flex flex-col uppercase items-center`}
        >
          <span className={`${styles.copyright}`}>Copyright&#169;2022</span>
          <span className={`${styles.copyright}`}>SOMNATH DAS</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
