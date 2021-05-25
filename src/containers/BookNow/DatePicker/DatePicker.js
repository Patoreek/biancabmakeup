import React, { useState } from "react";
import classes from "./DatePicker.module.scss";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";

const DatePicker = (props) => {
  const date = props.date;
  const setDate = props.setDate;
  const setShowForm = props.setShowForm;

  return (
    <div className={classes.datePicker}>
      <Calendar onChange={setDate} value={date} className={classes.calendar} />
      <div className={classes.backBtnContainer}>
        <button onClick={() => setShowForm(1)}>Back</button>
        <button onClick={() => setShowForm(3)}>Continue</button>
      </div>
    </div>
  );
};

export default DatePicker;
