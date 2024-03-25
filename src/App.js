import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Logo from './pages/logo/Logo';
import Graphic from './pages/graphic/Graphic';
import Header from './components/Header'
import Footer from './components/Footer'




function App() {
  
  const [logosCat, setLogosCat] = useState([]);

  useEffect(() => {
    const fetchLogosCat = async () => {
      try {
        const response = await fetch('https://clients.muhammadprojects.com/new-muhammad/wp-json/wp/v2/logos_category');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLogosCat(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchLogosCat();
  }, []);

  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/graphic" element={<Graphic />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
