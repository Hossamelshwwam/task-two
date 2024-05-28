import { motion } from "framer-motion";
import img1 from "../../assets/images/blog.webp";
import img2 from "../../assets/images/question.webp";
import img3 from "../../assets/images/infrastructure.webp";
import img4 from "../../assets/images/heroImage.webp";
import img5 from "../../assets/images/finishing.webp";
import img6 from "../../assets/images/building.webp";
import Fancybox from "../../utilts/FancyBox";

const Home = () => {
  return (
    <div className="home">
      <div className="titles">
        <div className="main-title">
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ x: -200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: 0.3,
              },
            }}
          >
            combine
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: 0.3,
              },
            }}
            className="special-word"
          >
            fine
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ x: 200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: 0.3,
              },
            }}
          >
            images
          </motion.span>
        </div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: 0.3,
              type: "spring",
              bounce: 7,
              stiffness: 200,
            },
          }}
          className="sec-title"
        >
          to represent a product
        </motion.div>
      </div>
      <Fancybox>
        <div className="gallery">
          <motion.a
            href={img1}
            data-fancybox="gallery"
            className="gallery-1"
            initial={{ opacity: 0, x: -200 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.6,
              },
            }}
            whileHover={{
              scale: 0.9,
              transition: {
                duration: 0.3,
              },
            }}
          ></motion.a>
          <motion.a
            href={img2}
            data-fancybox="gallery"
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.6,
              },
            }}
            whileHover={{
              scale: 0.9,
              transition: {
                duration: 0.3,
              },
            }}
            className="gallery-2"
          ></motion.a>
          <motion.a
            href={img3}
            data-fancybox="gallery"
            initial={{ opacity: 0, x: -200 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.5,
              },
            }}
            whileHover={{
              scale: 0.9,
              transition: {
                duration: 0.3,
              },
            }}
            className="gallery-3"
          ></motion.a>
          <motion.a
            href={img4}
            data-fancybox="gallery"
            initial={{ opacity: 0, x: -200 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.4,
              },
            }}
            whileHover={{
              scale: 0.9,
              transition: {
                duration: 0.3,
              },
            }}
            className="gallery-4"
          ></motion.a>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 0.9,
              transition: {
                duration: 0.3,
              },
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.7,
              },
            }}
            className="gallery-5"
          >
            building
          </motion.div>
          <motion.a
            href={img5}
            data-fancybox="gallery"
            initial={{ opacity: 0, x: -200 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.6,
              },
            }}
            whileHover={{
              scale: 0.9,
              transition: {
                duration: 0.3,
              },
            }}
            className="gallery-6"
          ></motion.a>
          <motion.a
            href={img6}
            data-fancybox="gallery"
            initial={{ opacity: 0, x: -200 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.5,
              },
            }}
            whileHover={{
              scale: 0.9,
              transition: {
                duration: 0.3,
              },
            }}
            className="gallery-7"
          ></motion.a>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.4,
              },
            }}
            viewport={{ once: true }}
            className="gallery-8"
          >
            <motion.button
              whileHover={{
                scale: 0.9,
                backgroundColor: "#9d23b8",
                color: "#fff",
                transition: {
                  duration: 0.3,
                },
              }}
            >
              Learn more
            </motion.button>
          </motion.div>
        </div>
      </Fancybox>
    </div>
  );
};

export default Home;
