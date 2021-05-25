import classes from "./WelcomeScreen.module.scss";
import React from "react";
import { ReactComponent as LogoSVG } from "../../images/logo.svg";
import { motion } from "framer-motion";

import Navbar from "../../components/Navbar/Navbar";

const WelcomeScreen = () => {
  return (
    <motion.div
      className={classes.welcomeScreenContainer}
      initial={{ background: "#f5c7b0" }}
      animate={{ background: "transparent", pointerEvents: "none" }}
      transition={{ delay: 1.9 }}
    >
      <div className={classes.welcomeScreenMain}>
        <motion.div // FADES IN LOGO
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div // remove logo from screen after welcomescreen is done
            initial={{ display: "block" }}
            animate={{ display: "none" }}
            transition={{ duration: 0.1, delay: 2 }}
          >
            <LogoSVG className={`${classes.logo} ${classes.logo__black}`} />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className={classes.dropdown}
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <motion.div // THIS ONE SCALES DOWN LOGO TOWARDS NAVBAR
          initial={{ y: 0 }}
          animate={{
            y: -330,
            scale: 0.7,
            opacity: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 3.5,
          }}
        >
          <LogoSVG className={`${classes.logo} ${classes.logo__pink}`} />
        </motion.div>

        <motion.div
          className={classes.dropdown__left}
          initial={{ width: "50vw" }}
          animate={{ width: "0vw" }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        ></motion.div>
        <motion.div
          className={classes.dropdown__right}
          initial={{ width: "50vw" }}
          animate={{ width: "0vw" }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
