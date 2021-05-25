import React, { useEffect } from "react";
import classes from "./Testimonial.module.scss";

import biancaImg from "../../../images/content/bianca_01.png";

import { ReactComponent as LeftQuote } from "../../../images/icons/left-quote.svg";
import { ReactComponent as RightQuote } from "../../../images/icons/right-quote.svg";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Testimonial = (props) => {
  const position = props.position;
  const quote = props.quote;
  const image = props.image;
  const name = props.name;

  const testimonialVariants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.65,
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
      className={`${classes.testimonial} ${
        position == "left"
          ? classes.testimonial__left
          : classes.testimonial__right
      }`}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={testimonialVariants}
    >
      {position == "left" && (
        <div className={classes.imageContainer}>
          <img src={image} className={classes.imageContainer__image} />
        </div>
      )}
      <div className={classes.content}>
        <p className={classes.content__quote}>
          <LeftQuote className={classes.leftQuote} />
          {quote}
          <RightQuote className={classes.rightQuote} />
        </p>
        <span className={classes.content__name}>- {name}</span>
      </div>
      {position == "right" && (
        <div className={classes.imageContainer}>
          <img src={biancaImg} className={classes.imageContainer__image} />
        </div>
      )}
    </motion.div>
  );
};

export default Testimonial;
