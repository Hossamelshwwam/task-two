import { motion } from "framer-motion";
import img1 from "../../assets/images/blog.webp";
import img2 from "../../assets/images/question.webp";
import img3 from "../../assets/images/infrastructure.webp";
import img4 from "../../assets/images/heroImage.webp";
import img5 from "../../assets/images/finishing.webp";
import img6 from "../../assets/images/building.webp";
import Fancybox from "../../utilts/FancyBox";

const Home = () => {
  console.log("Homesmall");
  return (
    <div className="home-mobile">
      <div className="titles">
        <motion.p
          initial={{ x: -250, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className="main-mobile-titles"
        >
          mobile
        </motion.p>
        <motion.p
          initial={{ x: -250, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.35 },
          }}
          viewport={{ once: true }}
          className="sec-mobile-title"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.35 },
            }}
            viewport={{ once: true }}
            className="special-word"
          >
            cool
          </motion.span>
          images
        </motion.p>
        <motion.p
          initial={{ rotateX: 90, opacity: 0 }}
          whileInView={{
            rotateX: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.6 },
          }}
          viewport={{ once: true }}
          className="description"
        >
          to create any grid by scaling and resizing
        </motion.p>
        <motion.div
          animate={{ y: [20, -20] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="arrow-down"
        >
          <i className="fa-solid fa-arrow-down"></i>
        </motion.div>
      </div>
      <Fancybox>
        <div className="gallery-mobile">
          <motion.a
            href={img1}
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
            className="gallery-1"
          ></motion.a>

          <motion.a
            href={img2}
            data-fancybox="gallery"
            initial={{ opacity: 0, x: -20 }}
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
                delay: 0.3,
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
                delay: 0.63,
              },
            }}
            className="gallery-4"
          >
            building
          </motion.div>

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
                delay: 0.6,
              },
            }}
            whileHover={{
              scale: 0.9,
              transition: {
                duration: 0.3,
              },
            }}
            className="gallery-5"
          ></motion.a>

          <motion.a
            href={img5}
            data-fancybox="gallery"
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.8,
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
                delay: 0.7,
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
                delay: 0.65,
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
              className="default-button"
            >
              learn more
            </motion.button>
          </motion.div>
        </div>
      </Fancybox>
    </div>
  );
};

export default Home;
