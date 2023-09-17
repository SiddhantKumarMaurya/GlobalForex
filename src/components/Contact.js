import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file


  const ContactUs = () => {

    const [formState, setFormState] = useState({});

    const config = {
      Username: 'globalforex2023@gmail.com',
      Password: 'C6E9BFD9CFC1C50A60961D27A83124BBB9F4',
      Host: 'smtp.elasticemail.com',
      Port: 2525,
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    };

    const changeHandler = (event) => {
      setFormState({...formState, [event.target.name]: event.target.value})
    }

    const submitHandler = () => {
      
      const config = {
        Username: 'globalforex2023@gmail.com',
        Password: 'C6E9BFD9CFC1C50A60961D27A83124BBB9F4',
        Host: 'smtp.elasticemail.com',
        Port: 2525,
        To : 'globalforex2023@gmail.com',
        From : formState.email,
        Subject : "This is from my contact from",
        Body : `${formState.message} 
                Phone Number:  ${formState.phoneNumber}`,
      };


      if(window.Email) {
        window.Email.send(config);
      }
      
    }
    return (
      <div id='contact' className="contact-container">
        <h1>Get In Touch</h1>
        <form onSubmit={submitHandler} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name <i className="fa fa-user fa-bounce"></i></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address <i className="fa-solid fa-envelope fa-bounce"></i></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number <i className="fa-solid fa-phone fa-bounce"></i></label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formState.phoneNumber}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message <i className="fa-solid fa-message fa-bounce"></i></label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    );
  }

export default ContactUs;

