/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";

const Drawer = ({ open, setOpen }) => {
  const linkVarients = {
    hover: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
      },
    },
    hidden: {
      y: 400,
      opacity: 0,
      scale: 1,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="outlay"
            onClick={() => setOpen(!open)}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              x: -400,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -400,
            }}
            transition={{
              duration: 0.5,
            }}
            className="drawer"
          >
            <div className="header flex-between">
              <div className="icon">
                <i
                  className="fa-solid fa-circle-xmark"
                  onClick={() => setOpen(!open)}
                ></i>
              </div>
              <div className="logos">
                <i className="fa-solid fa-border-all"></i>
                <h1>Grid</h1>
              </div>
            </div>
            <ul className="links">
              <motion.li
                variants={linkVarients}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.3,
                  delay: 0.3,
                }}
                onClick={() => setOpen(!open)}
              >
                <a>How it works</a>
              </motion.li>
              <motion.li
                onClick={() => setOpen(!open)}
                variants={linkVarients}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.3,
                  delay: 0.35,
                }}
              >
                <a>Who are you</a>
              </motion.li>
              <motion.li
                onClick={() => setOpen(!open)}
                variants={linkVarients}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.3,
                  delay: 0.4,
                }}
              >
                <a>What we do</a>
              </motion.li>
              <motion.li
                onClick={() => setOpen(!open)}
                variants={linkVarients}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.3,
                  delay: 0.45,
                }}
              >
                <a>Contact us</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Drawer;
