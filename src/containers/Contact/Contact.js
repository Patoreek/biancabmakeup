import React, { useEffect, useContext, useState } from "react";
import classes from "./Contact.module.scss";

import { PageContext } from "../../context/globalContext";

const Contact = () => {
  const [page, setPage] = useContext(PageContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setPage("contact");
  }, []);

  const submitHandler = () => {
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(message);
    //* Make form send email here
  };

  return (
    <div className={classes.contact}>
      <div className={classes.contact__left}>
        <h1>Contact</h1>

        <div className={classes.socialsContainer}>
          <div className={classes.social}>
            <span className={classes.social__label}>Email</span>
            <a
              className={classes.social__link}
              href="mailto:biancabrown@hotmail.com"
            >
              biancabrown@hotmail.com
            </a>
          </div>
          <div className={classes.social}>
            <span className={classes.social__label}>Facebook</span>
            <a
              className={classes.social__link}
              href="https://www.facebook.com/biancabmakeup"
            >
              www.facebook.com/biancabrown
            </a>
          </div>
          <div className={classes.social}>
            <span className={classes.social__label}>Instagram</span>
            <a
              className={classes.social__link}
              href="https://www.instagram.com/biancabmakeup"
            >
              www.instagram.com/biancabrown
            </a>
          </div>
        </div>
      </div>
      <div className={classes.contact__right}>
        <h2>Get In Touch</h2>
        <div className={classes.form}>
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
            <span className={classes.input__label}>Message</span>
            <textarea
              className={classes.input__textArea}
              rows="10"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <div className={classes.input}>
            <button className={classes.sendBtn} onClick={submitHandler}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
