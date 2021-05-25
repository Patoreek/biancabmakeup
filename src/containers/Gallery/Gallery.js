import React, { useState, useEffect } from "react";
import classes from "./Gallery.module.scss";

import GalleryPod from "../../components/GalleryPod/GalleryPod";
import {
  useViewportScroll,
  motion,
  useTransform,
  AnimatePresence,
} from "framer-motion";
const Gallery = () => {
  const { scrollY } = useViewportScroll();

  // first[] <-- offset of page (x,y) | second [] offset of the transform value in this example y [starting value, ending value]
  // match arrays togeter
  //* [0, 700] = arr1[0] = 0, arr1[1] = 700
  //* [500, 0] = arr2[0] = 500, arr2[1] = 0;

  //* arr1 is the scroll position of that component. it matches with arr2 saying at 0px on this component, start
  //* the transform value at +500px for whichever div it is for.
  //*
  //* by the time it hits arr1[1] = 700px, the transform value will be whatever arr2[1] is (0px).

  const yLeftSide = useTransform(scrollY, [0, 3500], [0, -1650]);
  const yRightSide = useTransform(scrollY, [0, 3500], [-1650, 0]);
  const yBar = useTransform(
    scrollY,
    [0, 700, 1400, 2100, 2800, 3500],
    ["0%", "20%", "40%", "60%", "80%", "100%"]
  );

  return (
    <AnimatePresence>
      <div className={classes.emptyContainer}></div>
      <div className={classes.gallery}>
        <div className={classes.overlay}></div>
        <div className={classes.gallery__left}>
          <h1 className={classes.title}>Gallery</h1>
          <p className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
            diam eget ante maximus, et euismod lectus gravida. Morbi pretium
            nibh lectus, quis eleifend orci eleifend non. Vivamus suscipit ex
            congue quam eleifend, eu condimentum sit amet ex fringilla leo
            efficitur imperdiet.
          </p>
          <div className={classes.counter}>
            <span className={classes.counter__number}>1</span>
            <div className={classes.counter__line}>
              <motion.div
                className={classes.innerLine}
                style={{ width: yBar }}
              ></motion.div>
            </div>
            <span className={classes.counter__number}>2</span>
          </div>
        </div>
        <div className={classes.gallery__right}>
          <motion.div className={classes.left} style={{ y: yLeftSide }}>
            <GalleryPod />
            <GalleryPod />
            <GalleryPod />
            <GalleryPod />
            <GalleryPod />
          </motion.div>
          <motion.div className={classes.right} style={{ y: yRightSide }}>
            <GalleryPod />
            <GalleryPod />
            <GalleryPod />
            <GalleryPod />
            <GalleryPod />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Gallery;
