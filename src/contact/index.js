import React, { useState } from "react";
import { Axios } from "../firebase/firebaseConfig";
import Spinner from "react-bootstrap/Spinner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [placeholder, setPlaceholder] = useState({
    name: "Name",
    email: "Email",
    message: "Message",
  });

  const [sent, setSent] = useState("Send Message");

  const [errorFlashName, setErrorFlashName] = useState("white");
  const [errorFlashEmail, setErrorFlashEmail] = useState("white");
  const [errorFlashMessage, setErrorFlashMessage] = useState("white");

  const updateInput = (e) => {
    setErrorFlashName("white");
    setErrorFlashEmail("white");
    setErrorFlashMessage("white");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setPlaceholder({
        name: "Please enter a name!",
        email: "Please enter an email!",
        message: "Please enter a message!",
      });
      if (formData.name === "") {
        setErrorFlashName("pink");
      }
      if (formData.email === "") {
        setErrorFlashEmail("pink");
      }

      if (formData.message === "") {
        setErrorFlashMessage("pink");
      }
    } else {
      setSent(
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      );
      sendEmail();
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  const sendEmail = async () => {
    await Axios.post(
      "https://us-central1-tim-site-282017.cloudfunctions.net/submit",
      formData
    ).catch((error) => {
      console.log(error);
    });
    setPlaceholder({
      name: "Name",
      email: "Email",
      message: "Message",
    });
    setSent("Sent!");
    setTimeout(() => {
      setSent("Send Message");
    }, 3000);
  };

  return (
    <>
      <div className=''>
        <form onSubmit={handleSubmit} className='google-contact'>
          <div>
            <h4>Name</h4>
            <input
              className='contact-name'
              type='text'
              name='name'
              placeholder={placeholder.name}
              onChange={updateInput}
              value={formData.name || ""}
              style={{ backgroundColor: errorFlashName }}
            />

            <h4>Email</h4>
            <input
              className='contact-email'
              type='email'
              name='email'
              placeholder={placeholder.email}
              onChange={updateInput}
              value={formData.email || ""}
              style={{ backgroundColor: errorFlashEmail }}
            />
          </div>
          <div>
            <h4>Message</h4>
            <textarea
              className='contact-message'
              rows='6'
              type='text'
              name='message'
              placeholder={placeholder.message}
              onChange={updateInput}
              value={formData.message || ""}
              style={{ backgroundColor: errorFlashMessage }}
            ></textarea>

            <button
              className='btn btn-outline-light contact-button'
              type='submit'
            >
              {sent}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
