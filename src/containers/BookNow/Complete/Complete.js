import React, { useEffect } from "react";
import classes from "./Complete.module.scss";

//TODO: pass all data to here and in here get success message
//TODO: also have a spinner loader
//TODO: Send Data to DB
//TODO: if successful display success message here otherwise show error message

const Complete = (props) => {
  const name = props.name;
  const email = props.email;
  const phone = props.phone;
  const address = props.adress;
  const service = props.service;
  const message = props.message;
  const travelRequired = props.travelRequired;
  const date = props.date;
  const time = props.time;

  useEffect(() => {
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(address);
    console.log(service);
    console.log(message);
    console.log(travelRequired);
    console.log(date);
    console.log(time);
  }, []);

  return (
    <div className={classes.complete}>
      Complete
      <span>Name</span>
      <br />
      <span>{name}</span>
      <br />
      <span>Email</span>
      <br />
      <span>{email}</span>
      <br />
      <span>Phone</span>
      <br />
      <span>{phone}</span>
      <br />
      <span>Address</span>
      <br />
      <span>{address}</span>
      <br />
      <span>Service</span>
      <br />
      <span>{service}</span>
      <br />
      <span>Message</span>
      <br />
      <span>{message}</span>
      <br />
      <span>Travel Required</span>
      <br />
      <span>{travelRequired}</span>
      <br />
      <span>date</span>
      <br />
      <span>{date.toString()}</span>
      <br />
      <span>time</span>
      <br />
      <span>{time.toString()}</span>
      <br />
    </div>
  );
};

export default Complete;
