import { motion } from "framer-motion";

const Pricing = () => {
  const cardVarients = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="pricing">
      <div className="container">
        <div className="pricing-titles">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
            }}
            viewport={{ once: true }}
            className="main-title"
          >
            Affordable pricing
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
            }}
            viewport={{ once: true }}
            className="sub-title"
          >
            Bill me <span className="special">monthly</span>
            <span className="dot"></span> yearly
          </motion.div>
        </div>
        <div className="pricing-plans">
          <motion.div
            variants={cardVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.6,
            }}
          >
            <div className="card">
              <div>
                <div className="title">
                  <p>like a homeless</p>
                </div>
                <div className="price">
                  Free<span>/ forever</span>
                </div>
                <div className="features">
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>componenets-driven system</p>
                  </div>
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>sales-boosting landing pages</p>
                  </div>
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>awesome feather icons pack</p>
                  </div>
                </div>
              </div>
              <button>try it free</button>
            </div>
          </motion.div>
          <motion.div
            variants={cardVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
          >
            <div className="card">
              <div>
                <div className="title">
                  <p>
                    <i className="fa-solid fa-user"></i> individual
                  </p>
                  <p className="label">best!</p>
                </div>
                <div className="price">
                  $24<span>/ month</span>
                </div>
                <div className="features">
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>componenets-driven system</p>
                  </div>
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>sales-boosting landing pages</p>
                  </div>
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>awesome feather icons pack</p>
                  </div>
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>themed into 3 different styles</p>
                  </div>
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>will help to learn figm</p>
                  </div>
                </div>
              </div>
              <button className="best-seller">regular lincense</button>
            </div>
          </motion.div>
          <motion.div
            variants={cardVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="card">
              <div>
                <div className="title">
                  <p>
                    <i className="fa-solid fa-users"></i> corporate
                  </p>
                </div>
                <div className="price">
                  $12<span>/ editor</span>
                </div>
                <div className="features">
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>componenets-driven system</p>
                  </div>
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>sales-boosting landing pages</p>
                  </div>
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>awesome feather icons pack</p>
                  </div>
                  <div className="feature">
                    <div className="icon-container">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p>themed into 3 different styles</p>
                  </div>
                </div>
              </div>
              <button>extended lincense</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
