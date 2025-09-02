import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Products from './components/pages/Products.jsx';
import Home from './components/pages/home';
import Services from './components/pages/Services.jsx';
import SignUp from './components/pages/SignUp.jsx';
import Footer from './components/pages/Footer.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
