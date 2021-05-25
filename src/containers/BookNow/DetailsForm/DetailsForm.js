import React, { useState } from "react";
import classes from "./DetailsForm.module.scss";

const DetailsForm = (props) => {
  const setShowForm = props.setShowForm;
  const name = props.name;
  const setName = props.setName;
  const email = props.email;
  const setEmail = props.setEmail;
  const phone = props.phone;
  const setPhone = props.setPhone;
  const address = props.address;
  const setAddress = props.setAddress;
  const service = props.service;
  const setService = props.setService;
  const message = props.message;
  const setMessage = props.setMessage;
  const travelRequired = props.travelRequired;
  const setTravelRequired = props.setTravelRequired;

  const continueHandler = () => {
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(address);
    console.log(travelRequired);
    console.log(service);
    console.log(message);
    setShowForm(2);
  };

  return (
    <div className={classes.detailsForm}>
      <div className={classes.detailsForm__information}>
        <div className={classes.input}>
          <span className={classes.input__label}>Name</span>
          <input
            type="text"
            className={classes.input__input}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={classes.input}>
          <span className={classes.input__label}>Email</span>
          <input
            type="text"
            className={classes.input__input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={classes.input}>
          <span className={classes.input__label}>Phone</span>
          <input
            type="text"
            className={classes.input__input}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className={classes.input}>
          <span className={classes.input__label}>
            Address <span className={classes.optional}>(Optional)</span>
          </span>
          <input
            type="text"
            className={classes.input__input}
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
      </div>
      <div className={classes.detailsForm__travel}>
        <span className={classes.travelLabel}>Travel Required?</span>
        <div className={classes.travelRadioOptions}>
          <div className={classes.input}>
            <label for="yes">Yes</label>
            <input
              type="radio"
              id="yes"
              name="travelRequired"
              value="1"
              checked={travelRequired == 1}
              onClick={(event) => setTravelRequired(event.target.value)}
            />
          </div>
          <div className={classes.input}>
            <label for="no">No</label>
            <input
              type="radio"
              id="no"
              name="travelRequired"
              value="2"
              checked={travelRequired == 2}
              onClick={(event) => setTravelRequired(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={classes.detailsForm__bottom}>
        <div className={classes.bottomLeft}>
          <h1>What Service are you after?</h1>
          <div className={classes.serviceRadioOptions}>
            <div className={classes.input}>
              <input
                type="radio"
                id="m1"
                name="service"
                value="1"
                checked={service == 1}
                onClick={(event) => setService(event.target.value)}
              />
              <label for="m1">Makeup - One Person</label>
            </div>
            <div className={classes.input}>
              <input
                type="radio"
                id="m2"
                name="service"
                value="2"
                checked={service == 2}
                onClick={(event) => setService(event.target.value)}
              />
              <label for="m2">Makeup - Two People</label>
            </div>
            <div className={classes.input}>
              <input
                type="radio"
                id="m3"
                name="service"
                value="3"
                checked={service == 3}
                onClick={(event) => setService(event.target.value)}
              />
              <label for="m3">Makeup - Three People</label>
            </div>
            <div className={classes.input}>
              <input
                type="radio"
                id="m2"
                name="service"
                value="4"
                checked={service == 4}
                onClick={(event) => setService(event.target.value)}
              />
              <label for="m4">Makeup - Four People</label>
            </div>
          </div>
        </div>
        <div className={classes.bottomRight}>
          <div className={classes.input}>
            <input
              type="radio"
              id="other"
              name="service"
              value="5"
              checked={service == 5}
              onClick={(event) => setService(event.target.value)}
            />
            <label for="other">Other</label>
          </div>
          <div className={classes.inputTextArea}>
            <span>Please Specify</span>
            <textarea
              className={classes.textArea}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={classes.detailsForm__continue}>
        <button onClick={continueHandler}>Continue</button>
      </div>
    </div>
  );
};

export default DetailsForm;
