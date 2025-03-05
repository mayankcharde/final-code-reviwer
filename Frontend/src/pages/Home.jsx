import React from 'react';
import { useNavigate } from 'react-router-dom';
import LiquidChrome from '../components/Animation';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleReviewClick = () => {
    navigate("/code-review");
  };

  return (
    <div className="relative">
      <LiquidChrome />
      <Navbar />
      <div className="home-content">
        <h1 className="text-5xl font-bold mb-6">Welcome to Code Reviewer</h1>
        <p className="text-xl mb-8 max-w-md mx-auto">
          Click the button below to get started and Review Your Code
        </p>
        <button
          className="bg-black text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-500 border-green-500 transition duration-200 transform hover:scale-120"
          onClick={handleReviewClick}
        >
          Review Code
        </button>
      </div>
    </div>
  );
};

export default Home;