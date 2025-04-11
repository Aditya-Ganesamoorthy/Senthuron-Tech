import React from 'react';
import './AboutBrand.css';

const AboutBrand = () => {
  return (
    <section className="about-brand">
      <div className="container">
        <h2>ABOUT THE BRAND</h2>
        <p className="brand-description">
          Slam Fitness Studio is a premier destination for fitness enthusiasts who seek a results-driven, holistic approach to health and wellness. Established in 2009, Slam Fitness redefined the fitness industry in India with its innovative programs, cutting-edge facilities, and focus on building a supportive fitness community.
        </p>
        
        <div className="mission-vision">
          <div className="mv-item">
            <h3>Our Mission</h3>
            <p>Empower individuals to unlock their full potential by providing personalized fitness solutions tailored to their goals.</p>
          </div>
          
          <div className="mv-item">
            <h3>Our Vision</h3>
            <p>To make fitness accessible and enjoyable while promoting a lifestyle of health, strength, and positivity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;