import React, { useState, useContext } from "react";
import classes from "./Base.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Pricing from "../Pricing/Pricing";
import BookNow from "../BookNow/BookNow";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Footer from "../Footer/Footer";

import { ShowPricingModalContext } from "../../context/globalContext";

const Base = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showPricingModal, setShowPricingModal] = useContext(
    ShowPricingModalContext
  );

  return (
    <div>
      <Router>
        <Navbar />
        <Switch key={19}>
          <Route path="/contact">
            <Contact />
            <Footer />
          </Route>
          <Route path="/booknow">
            <BookNow />
            <Footer />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <div className={classes.emptyContainer}></div>

            <Banner setShowAbout={setShowAbout} />

            <About />
          </Route>
        </Switch>
        {showPricingModal && <Pricing />}
      </Router>
    </div>
  );
};

export default Base;
