import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{
              opacity: 0,
              x: 200,
            }}
            animate={{ opacity: 1, x: 0, y: [7, -7] }}
            transition={{
              y: { duration: 0.5, repeat: Infinity, repeatType: "mirror" },
              opacity: { duration: 0.5 },
              x: { duration: 0.5 },
            }}
            exit={{
              x: 200,
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            }}
            className="arrow-to-top"
            onClick={scrollToTop}
          >
            <i className="fa-solid fa-arrow-up"></i>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;
