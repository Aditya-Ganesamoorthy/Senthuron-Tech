import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBanner from './components/LogoBanner';
import Content from './components/Content';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <LogoBanner />
      <Content />
      <Gallery />
    </div>
  );
}

export default App;