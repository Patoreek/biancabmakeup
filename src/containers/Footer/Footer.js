import React from "react";
import classes from "./Footer.module.scss";

import { ReactComponent as LogoSVG } from "../../images/logo.svg";
import { ReactComponent as FacebookSVG } from "../../images/icons/facebook.svg";
import { ReactComponent as InstagramSVG } from "../../images/icons/instagram.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <LogoSVG className={classes.logo} />
      <span className={classes.getInTouch}>Get in touch</span>
      <a href="mailTo:biancabmakeup@hotmail.com" className={classes.email}>
        biancabmakeup@hotmail.com
      </a>
      <div className={classes.socials}>
        <a
          href="https://www.instagram.com/biancabmakeup/"
          className={classes.socials__social}
        >
          <FacebookSVG className={classes.icon} />
        </a>
        <a
          href="https://www.facebook.com/Biancabmakeup"
          className={classes.socials__social}
        >
          <InstagramSVG className={classes.icon} />
        </a>
      </div>
      <div className={classes.bottom}>
        <span>© Biancabmakeup {year} · Site by Patrick Minda</span>
      </div>
    </div>
  );
};

export default Footer;
