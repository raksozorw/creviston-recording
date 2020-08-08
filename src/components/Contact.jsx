import React from "react";
import ContactForm from "../contact";

const Contact = () => {
  return (
    <>
      <h1 className='contacth1'>Contact</h1>
      <div className='contact'>
        <div className='contact-item'>
          <div className='contact-description'>
            <h5>Contact for rates and availability.</h5>
            <p>
              Please send me a message detailing what you're looking for.{" "}
              <br></br>For demos, please attach them in an email to:{" "}
              <a className='email' href='mailto:tim.creviston@gmail.com'>
                tim.creviston@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className='contact-item'>
          <ContactForm />
        </div>
      </div>
      <hr></hr>
      <p>Designed and created by Oskar Wroz</p>
      <p>© Copyright 2020</p>
      <p className='icon-attribution'>
        Icons made by Darius Dan from www.flaticon.com
      </p>
    </>
  );
};

export default Contact;
