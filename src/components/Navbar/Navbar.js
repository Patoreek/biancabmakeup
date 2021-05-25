import React, { useContext, useEffect } from "react";
import classes from "./Navbar.module.scss";
import { ReactComponent as LogoSVG } from "../../images/logo.svg";
import { Link } from "react-router-dom";

import {
  ShowPricingModalContext,
  PageContext,
} from "../../context/globalContext";

const Navbar = () => {
  const [showPricingModal, setShowPricingModal] = useContext(
    ShowPricingModalContext
  );

  const [page, setPage] = useContext(PageContext);

  useEffect(() => {
    console.log(showPricingModal);
  }, [showPricingModal]);

  return (
    <div className={classes.navbar}>
      <Link
        to="/"
        className={`${classes.navbar__circle} ${
          page == "contact" ? classes.darkNavCircle : null
        }`}
        onClick={() => setPage("home")}
      >
        <div className={classes.circle}></div>
      </Link>
      <div className={classes.navbar__left}>
        <div className={classes.rotate}>
          <Link
            to="/contact"
            className={`${classes.option} ${
              page == "contact" ? classes.darkNav : null
            }`}
            onClick={() => setPage("contact")}
          >
            <span className={classes.contact__1}>Contact</span>
            <span className={classes.contact__2}>Contact</span>
          </Link>
          <Link
            className={`${classes.option} ${
              page == "contact" ? classes.darkNav : null
            }`}
            onClick={() => {
              setShowPricingModal(true);
              //setPage("pricing");
            }}
          >
            <span className={classes.pricing__1}>Pricing</span>
            <span className={classes.pricing__2}>Pricing</span>
          </Link>
        </div>
      </div>
      <div className={classes.navbar__top}>
        <Link
          to="/gallery"
          className={`${classes.option} ${
            page == "contact" ? classes.darkNav : null
          }`}
          onClick={() => setPage("gallery")}
        >
          <span className={classes.gallery__1}>Gallery</span>
          <span className={classes.gallery__2}>Gallery</span>
        </Link>
        <Link
          to="/booknow"
          className={`${classes.option} ${
            page == "contact" ? classes.darkNav : null
          }`}
          onClick={() => setPage("booknow")}
        >
          <span className={classes.bookNow__1}>Book Now</span>
          <span className={classes.bookNow__2}>Book Now</span>
        </Link>
      </div>
      <Link
        to="/"
        className={classes.navbar__logo}
        onClick={() => setPage("home")}
      >
        <LogoSVG
          className={`${classes.logo} ${
            page == "contact" ? classes.darkNavLogo : null
          }`}
        />
      </Link>
    </div>
  );
};

export default Navbar;
