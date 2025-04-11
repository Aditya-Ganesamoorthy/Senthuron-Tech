import React from 'react';
import './SignatureOfferings.css';

const SignatureOfferings = () => {
  return (
    <section className="offerings">
      <div className="container">
        <h2>SIGNATURE OFFERINGS</h2>
        <p className="subtitle">
          Explore a wide range of fitness programs and services designed for
          everyone, from beginners to professional athletes.
        </p>
        
        <div className="offering-cards">
          <div className="card">
            <h3>Personalized Training</h3>
            <p>
              Created fitness plans tailored to individual needs,
              ensuring optimal results and long-term success.
            </p>
          </div>
          
          <div className="card">
            <h3>Innovative Workouts</h3>
            <p>
              Experience diverse workouts, including functional fitness,
              yoga, strength training, and dance-based exercises.
            </p>
          </div>
          
          <div className="card">
            <h3>Supportive Community</h3>
            <p>
              Become part of a like-minded community that motivates
              and inspires each other to stay committed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureOfferings;