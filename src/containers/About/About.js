import React, { useEffect } from "react";
import classes from "./About.module.scss";

import biancaImg from "../../images/content/bianca_01.png";

import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

import Footer from "../Footer/Footer";

import {
  useViewportScroll,
  motion,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const aboutVariants = {
  initial: { display: "none" },
  animate: {
    display: "block",
    transition: {
      duration: 1,
      delay: 4,
    },
  },
};

const About = () => {
  const { scrollY } = useViewportScroll();

  // first[] <-- offset of page (x,y) | second [] offset of the transform value in this example y [starting value, ending value]
  // match arrays togeter
  //* [0, 700] = arr1[0] = 0, arr1[1] = 700
  //* [500, 0] = arr2[0] = 500, arr2[1] = 0;

  //* arr1 is the scroll position of that component. it matches with arr2 saying at 0px on this component, start
  //* the transform value at +500px for whichever div it is for.
  //*
  //* by the time it hits arr1[1] = 700px, the transform value will be whatever arr2[1] is (0px).

  const yName = useTransform(scrollY, [0, 1150, 1400], [500, 0, -500]);
  const yLocation = useTransform(scrollY, [0, 1150, 1400], [750, 0, -500]);
  const yMakeup = useTransform(scrollY, [0, 1150, 1400], [750, 0, -950]);
  const yMakeupOpacity = useTransform(scrollY, [0, 400, 950], [0, 0, 1]);
  const yArtist = useTransform(scrollY, [0, 1150, 1400], [950, 0, -950]);
  const yArtistOpacity = useTransform(scrollY, [0, 400, 950], [0, 0, 1]);

  const yImage = useTransform(
    scrollY,
    [0, 1000, 1500, 2750],
    [650, 0, 600, -550]
  );

  const yAboutContent = useTransform(
    scrollY,
    [1150, 1700, 2750],
    [500, 0, -500]
  );

  return (
    <AnimatePresence>
      <motion.div
        className={classes.about}
        variants={aboutVariants}
        initial="initial"
        animate="animate"
        exit={{
          y: 0,
          opacity: 0,
          transition: {
            transiton: 2,
          },
        }}
      >
        <motion.h1 className={classes.name} style={{ y: yName }}>
          Bianca Brown
        </motion.h1>
        <motion.h1 className={classes.location} style={{ y: yLocation }}>
          Sydney, Australia
        </motion.h1>
        <motion.h2
          className={classes.makeup}
          style={{ x: yMakeup, opacity: yMakeupOpacity }}
        >
          Makeup
        </motion.h2>
        <motion.h2
          className={classes.text}
          style={{ x: yArtist, opacity: yArtistOpacity }}
        >
          Artist
        </motion.h2>
        <motion.div style={{ y: yImage }} className={classes.biancaImg}>
          <img src={biancaImg} className={classes.biancaImg} />
        </motion.div>
        <motion.div className={classes.aboutMe} style={{ y: yAboutContent }}>
          <span className={classes.aboutMe__label}>About Me</span>
          <p className={classes.aboutMe__content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
            risus sit amet ex faucibus luctus ut sit amet magna. Nunc sagittis
            porttitor nisi vel convallis. Maecenas vel finibus ipsum. Proin
            malesuada scelerisque arcu eu dignissim. In fringilla pretium ipsum,
            quis eleifend lectus interdum vitae. Etiam malesuada rutrum luctus.
            Ut eu lacus eu nunc dictum posuere ut sit amet erat. In lacinia odio
            leo, eget iaculis urna porta eget. Sed pellentesque quam et lorem
            posuere rutrum.
          </p>
        </motion.div>
        <div className={classes.services}>
          <Services />
        </div>
        <div className={classes.testimonials}>
          <span className={classes.testimonials__label}>
            Clients / Testimonals
          </span>
          <Testimonial
            quote="Amazing work and blah blah blah, will definately be coming back!"
            image={biancaImg}
            name="Patrick Minda"
            position="left"
          />
          <Testimonial
            quote="Another happy customer. I looked faboulous and blah blah blah im
          amazing"
            image={biancaImg}
            name="Nicholas De Michiel"
            position="right"
          />
        </div>
        <div className={classes.footerContainer}>
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
