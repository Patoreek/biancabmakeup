import React from "react";
import classes from "./GalleryPod.module.scss";

import img from "../../images/content/bianca_01.png";

const GalleryPod = () => {
  return (
    <div className={classes.galleryPod}>
      <div className={classes.imageContainer}>
        <img src={img} />
      </div>
      <div className={classes.textContainer}>
        <div className={classes.textContainer__year}>
          <span>2021</span>
        </div>
        <div className={classes.textContainer__eventName}>
          <span>Event Name</span>
        </div>
        <div className={classes.textContainer__clientName}>
          <span>Name of Person</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryPod;
