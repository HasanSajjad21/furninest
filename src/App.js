// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
