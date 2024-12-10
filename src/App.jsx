

import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll event to update active section
  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection = 'home'; // default to home section

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 0 && sectionTop + section.offsetHeight > 0) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div style={{ minHeight: '100vh', color: 'white' }}>
          <NavBar activeSection={activeSection} />
          <div id="home" className="section">
            <Home />
          </div>
          <div id="about-us" className="section">
            <About />
          </div>
          <div id="products" className="section">
            <Products />
          </div>
          <div id="contact-us" className="section">
            <Contact />
          </div>
          <Footer />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

