import React, { useEffect } from "react";
import classes from "./TimePicker.module.scss";

const TimePicker = (props) => {
  const setShowForm = props.setShowForm;
  const setTime = props.setTime;
  const time = props.time;

  useEffect(() => {
    console.log(time);
  }, [time]);

  let timesArray = [
    "4:00am",
    "4:15am",
    "4:30am",
    "4:45am",
    "5:00am",
    "5:15am",
    "5:30am",
    "5:45am",
    "6:00am",
    "6:15am",
    "6:30am",
    "6:45am",
    "7:00am",
    "7:15am",
    "7:30am",
    "7:45am",
    "8:00am",
    "8:15am",
    "8:30am",
    "8:45am",
    "9:00am",
    "9:15am",
    "9:30am",
    "9:45am",
    "10:00am",
    "10:15am",
    "10:30am",
    "10:45am",
    "11:00am",
    "11:15am",
    "11:30am",
    "11:45am",
    "12:00pm",
    "12:15pm",
    "12:30pm",
    "12:45pm",
    "1:00pm",
    "1:15pm",
    "1:30pm",
    "1:45pm",
    "2:00pm",
    "2:15pm",
    "2:30pm",
    "2:45pm",
    "3:00pm",
    "3:15pm",
    "3:30pm",
    "3:45pm",
    "4:00pm",
    "4:15pm",
    "4:30pm",
    "4:45pm",
    "5:00pm",
    "5:15pm",
    "5:30pm",
    "5:45pm",
    "6:00pm",
    "6:15pm",
    "6:30pm",
    "6:45pm",
    "7:00pm",
    "7:15pm",
    "7:30pm",
    "7:45pm",
    "8:00pm",
  ];

  return (
    <div className={classes.timePickerContainer}>
      <div className={classes.timePicker}>
        {timesArray.map((timeSelected) => (
          <div
            className={`${classes.time} ${
              timeSelected == time ? classes.selected : null
            }`}
            onClick={() => setTime(timeSelected)}
          >
            {timeSelected}
          </div>
        ))}
      </div>
      <div className={classes.buttonContainer}>
        <button onClick={() => setShowForm(2)}>Back</button>
        <button onClick={() => setShowForm(4)}>Continue</button>
      </div>
    </div>
  );
};

export default TimePicker;
