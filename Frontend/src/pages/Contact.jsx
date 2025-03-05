import React, { useState } from 'react';
import axios from 'axios';
import LiquidChrome from '../components/Animation';
import Navbar from '../components/Navbar';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/contacts/contact', formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div className="relative">
      <LiquidChrome />
      <Navbar />
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-text">
            If you have any questions or need further information, please feel free to contact us. We are here to help!
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" className="form-input" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-input" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" rows="4" className="form-textarea" onChange={handleChange}></textarea>
            </div>
            <div className="form-button-container">
              <button type="submit" className="form-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;