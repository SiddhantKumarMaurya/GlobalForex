import React, { Component } from 'react';
import './Contact.css'; // Import the CSS file

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', this.state);
    // Reset the form fields if needed
    this.setState({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  }

  render() {
    return (
      <div id='contact' className="contact-container">
        <h1>Get In Touch</h1>
        <form onSubmit={this.handleSubmit} className="contact-form">
          <div className="form-group fa-heart">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
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
}

export default Contact;

