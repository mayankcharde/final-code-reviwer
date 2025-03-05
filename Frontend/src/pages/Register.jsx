import React, { useState } from 'react';
import axios from 'axios';
import LiquidChrome from '../components/Animation';
import Navbar from '../components/Navbar';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="relative">
      <LiquidChrome />
      <Navbar />
      <div className="register-container">
        <div className="register-content">
          <h1 className="register-title">Register</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" id="username" name="username" className="form-input" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-input" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" name="password" className="form-input" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
              <input type="password" id="confirm-password" name="confirmPassword" className="form-input" onChange={handleChange} />
            </div>
            <div className="form-button-container">
              <button type="submit" className="form-button">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;