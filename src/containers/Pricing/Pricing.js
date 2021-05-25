import React, { useContext } from "react";
import classes from "./Pricing.module.scss";

import { ShowPricingModalContext } from "../../context/globalContext";

import { ReactComponent as CloseSVG } from "../../images/icons/close.svg";

import { motion } from "framer-motion";

const modalVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0,
    },
  },
};

const Pricing = () => {
  const [showPricingModal, setShowPricingModal] = useContext(
    ShowPricingModalContext
  );

  return (
    <div>
      <motion.div
        className={classes.pricingOverlay}
        onClick={() => setShowPricingModal(false)}
        variants={modalVariants}
        initial="initial"
        animate="animate"
      ></motion.div>
      <motion.div
        variants={modalVariants}
        initial="initial"
        animate="animate"
        className={classes.pricingModal}
      >
        <CloseSVG
          className={classes.pricingModal__close}
          onClick={() => setShowPricingModal(false)}
        />
        <div className={classes.pricingModal__title}>
          <h1>Makeup Pricing</h1>
        </div>
        <div className={classes.pricingModal__list}>
          <div className={classes.listItem}>
            <p>Makeup one person</p>
            <span>$100 per hour</span>
          </div>
          <div className={classes.listItem}>
            <p>Makeup three people</p>
            <span>$90 per hour</span>
          </div>
          <div className={classes.listItem}>
            <p>Travel</p>
            <span>$20 / 10kms</span>
          </div>
        </div>
        <div className={classes.pricingModal__message}>
          <p>
            I am avaiable to travel across Greater Sydney. I am based in Quakers
            Hill and blah blah blah
          </p>
        </div>
        <div className={classes.pricingModal__bookNow}>
          <button>
            <span className={classes.booknow__1}>Book Now</span>
            <span className={classes.booknow__2}>Book Now</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
