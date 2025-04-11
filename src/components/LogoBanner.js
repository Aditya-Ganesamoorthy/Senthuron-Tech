import React from 'react';
import './LogoBanner.css';
import logo from '../assets/logo.png';

const LogoBanner = () => {
  return (
    <section className="logo-banner">
      <img src={logo} alt="SLAM Fitness Studio" className="main-logo" />
    </section>
  );
};

export default LogoBanner;