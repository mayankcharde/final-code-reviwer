import React from 'react';
import LiquidChrome from '../components/Animation';
import Navbar from '../components/Navbar';
import './About.css';

const About = () => {
  return (
    <div className="relative">
      <LiquidChrome />
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">
            Welcome to Code Reviewer, your go-to platform for high-quality code reviews. Our mission is to help developers improve their code quality, enhance their skills, and ensure their projects meet the highest standards.
          </p>
          <p className="about-text">
            At Code Reviewer, we provide comprehensive code review services for developers and teams of all sizes. Whether you're working on a small personal project or a large enterprise application, our experts are here to help you:
          </p>
          <ul className="about-list">
            <li>Identify and fix bugs</li>
            <li>Improve code readability and maintainability</li>
            <li>Ensure adherence to coding standards and best practices</li>
            <li>Optimize performance and efficiency</li>
            <li>Enhance security and compliance</li>
          </ul>
          <p className="about-text">
            Thank you for choosing Code Reviewer. Let's build better code together!
          </p>
          <div className="about-button-container">
            <button className="about-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;