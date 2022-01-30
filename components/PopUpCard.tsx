/* eslint-disable @next/next/link-passhref */
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { PopUpCardProps } from "../typings/PopUpCardProps";
import styles from "../styles/Home.module.css";

const PopUpCard = ({
  truth,
  SetTruth,
  linkLocation,
  currentId,
  targetId,
  transition,
  description,
  linkDescription,
}: PopUpCardProps) => {
  let variant = {};

  if (transition === "up") {
    variant = {
      initial: { translateY: "100%" },
      final: { translateY: "0%" },
    };
  } else if (transition === "down") {
    variant = {
      initial: { translateY: "-100%" },
      final: { translateY: "0%" },
    };
  } else if (transition === "in") {
    variant = {
      initial: { opacity: 0 },
      final: { opacity: 1 },
    };
  }

  return (
    <AnimatePresence>
      {truth && currentId === targetId ? (
        <motion.div
          variants={variant}
          initial={"initial"}
          animate={"final"}
          className={`h-screen flex flex-col justify-center items-center pb-4 ${
            targetId > 2 && targetId < 4 ? "md:border-r-2 border-b-2" : ""
          } ${targetId == 2 ? `${styles.soul_inside}` : ""}`}
          onClick={() => {
            SetTruth(false);
          }}
        >
          <motion.p
            className="text-2xl md:text-3xl p-4 relative uppercase text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {description}
            {targetId == 1 ? (
              <>
                A Developer <br></br>
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
              </>
            ) : (
              ""
            )}
          </motion.p>
          <Link href={linkLocation}>
            <motion.a
              className={`md:text-xl  border-2 ${
                targetId !== 2 ? "border-black" : "border-white"
              } p-2 hover:border-dashed`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {linkDescription}
            </motion.a>
          </Link>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default PopUpCard;
