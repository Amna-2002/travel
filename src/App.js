import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Destination from './components/pages/Destination.jsx';
import Home from './components/pages/home';
import Services from './components/pages/Services.jsx';
import SignUp from './components/pages/SignUp.jsx';
import Footer from './components/pages/Footer.jsx';
import Packages from './components/pages/Packages.jsx';
import InternationalTours from './components/pages/InternationalTours.jsx';
import DiscoverPakistan from './components/pages/DiscoverPakistan.jsx';
import Contact from './components/pages/Contact.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/packages" element={<Packages />} />
  <Route path="/discover-pakistan" element={<DiscoverPakistan />} />
  <Route path="/international-tours" element={<InternationalTours />} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/footer" element={<Footer/>} />

    
      </Routes>

    
    </Router>
  );
}

export default App;
