import React, { useState, useEffect } from "react";
import classes from "./BookNow.module.scss";

import img1 from "../../images/makeup_02.jpeg";
import img2 from "../../images/makeup_03.jpeg";

import DetailsForm from "./DetailsForm/DetailsForm";
import DatePicker from "./DatePicker/DatePicker";
import TimePicker from "./TimePicker/TimePicker";
import Complete from "./Complete/Complete";

const BookNow = () => {
  const [showForm, setShowForm] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [travelRequired, setTravelRequired] = useState(2);
  const [service, setService] = useState(1);
  const [message, setMessage] = useState("");

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div className={classes.bookNow}>
      <div className={classes.bookNow__left}>
        <h1 className={classes.title}>Book Now</h1>
        <p className={classes.instruction}>Please fill in the details below</p>
        {showForm == 1 ? (
          <DetailsForm
            setShowForm={setShowForm}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            address={address}
            setAddress={setAddress}
            service={service}
            setService={setService}
            message={message}
            setMessage={setMessage}
            travelRequired={travelRequired}
            setTravelRequired={setTravelRequired}
          />
        ) : null}
        {showForm == 2 ? (
          <DatePicker setShowForm={setShowForm} date={date} setDate={setDate} />
        ) : null}
        {showForm == 3 ? (
          <TimePicker setShowForm={setShowForm} time={time} setTime={setTime} />
        ) : null}
        {showForm == 4 ? (
          <Complete
            name={name}
            email={email}
            phone={phone}
            address={address}
            service={service}
            message={message}
            travelRequired={travelRequired}
            date={date}
            time={time}
          />
        ) : null}
      </div>
      <div className={classes.bookNow__right}>
        <div className={classes.imageMainContainer}>
          <img src={img1} className={classes.imageMain} />
        </div>
        <div className={classes.imageSecondaryContainer}>
          <img src={img2} className={classes.imageSecondary} />
        </div>
      </div>
    </div>
  );
};

export default BookNow;
