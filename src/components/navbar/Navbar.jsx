/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import { motion } from "framer-motion";

const Navbar = ({ width }) => {
  const [open, setOpen] = useState(false);

  const linksVarients = {
    close: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      color: "#000",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 7,
      },
    },
  };

  useEffect(() => {
    if (width > 992) {
      setOpen(false);
    }
  }, [width]);
  return (
    <motion.div
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
        },
      }}
      initial={{
        opacity: 0,
        y: -100,
      }}
      className="navbar"
    >
      <div className="container flex-between">
        <div className="logo flex-between">
          <div className="menu" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <i className="fa-solid fa-border-all"></i>
          <h1>Grid</h1>
        </div>
        <div className="links">
          <ul className="flex-between hidden">
            <motion.li
              initial="close"
              variants={linksVarients}
              whileHover="hover"
              className="active"
            >
              How it works
            </motion.li>
            <li className="circal"></li>
            <motion.li
              initial="close"
              variants={linksVarients}
              whileHover="hover"
            >
              Who are you
            </motion.li>
            <li className="circal"></li>
            <motion.li
              initial="close"
              variants={linksVarients}
              whileHover="hover"
            >
              What we do
            </motion.li>
            <li className="circal"></li>
            <motion.li
              initial="close"
              variants={linksVarients}
              whileHover="hover"
            >
              Contact us
            </motion.li>
          </ul>
        </div>
        <div className="signIn">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#9d23b8",
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 7,
              },
            }}
            className="default-button"
          >
            sign in
          </motion.button>
        </div>
      </div>
      <Drawer open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default Navbar;
