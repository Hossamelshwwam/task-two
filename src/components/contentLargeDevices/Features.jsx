import { motion } from "framer-motion";

const Features = () => {
  const headFeatureVarients = {
    hidden: { x: -100, opacity: 0 },
    view: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const paraFeatureVarients = {
    hidden: { x: -100, opacity: 0 },
    view: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };
  const buttonFeatureVarients = {
    hidden: { x: -100, opacity: 0 },
    view: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
    },
    hover: {
      color: "#fff",
      backgroundColor: "#9d23b8",
    },
  };

  const iconVarients = {
    hidden: {
      opacity: 0,
      rotateY: 90,
    },
    view: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const boxVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div className="featuresContainer">
      <div className="container">
        <div className="titles">
          <motion.p
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
              },
            }}
            viewport={{ once: true }}
            className="main-title"
          >
            delivering good designs
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: [0, 1.2, 1],

              transition: {
                duration: 0.3,
                type: "spring",
                damping: 12,
                stiffness: 200,
              },
            }}
            viewport={{ once: true }}
            className="sec-title"
          >
            since 1954
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
              },
            }}
            viewport={{ once: true }}
            className="decription-title"
          >
            we are the first multi-purpose design kit solution for businesses.
            We help you bridge gaps between your
          </motion.p>
        </div>
        <div className="features">
          <motion.div
            className="feature"
            initial="hidden"
            whileHover="visible"
            viewport={{ once: true }}
            variants={boxVariants}
          >
            <motion.div
              variants={iconVarients}
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              className="icon-container"
            >
              <i className="fa-regular fa-thumbs-up"></i>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              variants={headFeatureVarients}
            >
              swap the icon
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              variants={paraFeatureVarients}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              quis eaque eos amet sit voluptate non repellendus veniam nam
            </motion.p>
            <motion.button
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              whileHover="hover"
              variants={buttonFeatureVarients}
            >
              learn more
            </motion.button>
          </motion.div>
          <motion.div
            className="feature"
            initial="hidden"
            whileHover="visible"
            variants={boxVariants}
          >
            <motion.div
              variants={iconVarients}
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              className="icon-container"
            >
              <i className="fa-solid fa-bolt"></i>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              variants={headFeatureVarients}
            >
              detach if need
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              variants={paraFeatureVarients}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              quis eaque eos amet sit voluptate non repellendus veniam nam
            </motion.p>
            <motion.button
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              whileHover="hover"
              variants={buttonFeatureVarients}
            >
              learn more
            </motion.button>
          </motion.div>
          <motion.div
            className="feature"
            initial="hidden"
            whileHover="visible"
            variants={boxVariants}
          >
            <motion.div
              variants={iconVarients}
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              className="icon-container"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              variants={headFeatureVarients}
            >
              toggle icons
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              variants={paraFeatureVarients}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              quis eaque eos amet sit voluptate non repellendus veniam nam
            </motion.p>
            <motion.button
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              whileHover="hover"
              variants={buttonFeatureVarients}
            >
              learn more
            </motion.button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileHover="visible"
            variants={boxVariants}
            className="feature"
          >
            <motion.div
              variants={iconVarients}
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              className="icon-container"
            >
              <i className="fa-solid fa-suitcase"></i>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              variants={headFeatureVarients}
            >
              replace a title
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              variants={paraFeatureVarients}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              quis eaque eos amet sit voluptate non repellendus veniam nam
            </motion.p>
            <motion.button
              initial="hidden"
              whileInView="view"
              viewport={{ once: true }}
              whileHover="hover"
              variants={buttonFeatureVarients}
            >
              learn more
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
