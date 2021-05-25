import React, { useEffect } from "react";
import classes from "./Services.module.scss";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Services = () => {
  const servicesVariants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.85,
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={classes.services}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={servicesVariants}
    >
      <span className={classes.services__label}>Services</span>
      <ul className={classes.services__list}>
        <li className={classes.services__list__item}>&bull; Bridal Makeup</li>
        <li className={classes.services__list__item}>&bull; Events Makeup</li>
        <li className={classes.services__list__item}>&bull; Photoshoots</li>
        <li className={classes.services__list__item}>
          &bull; Editorial Makeup
        </li>
      </ul>
    </motion.div>
  );
};

export default Services;
