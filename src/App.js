// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavigationBar from './components/Navbar';
import CartButton from './components/CartButton';
import HomeComponent from './components/HomeComponent';
import AboutUs from './components/AboutUs';
import BoardSection from './components/BoardSection';
import GlobalSection from './components/GlobalSection';
import ProductsSection from './components/ProductsSection';
import CompensationPlan from './components/CompensationPlan';
import PackagesSection from './components/PackagesSection';
import TestimonialsPartners from './components/TestimonialsPartners';
import ContactSupport from './components/ContactSupport';
import Checkout from './components/Checkout';      // <-- ADDED
import Footer from './components/Footer';
import './App.css';

function App() {
  // Add mobile dropdown functionality
  useEffect(() => {
    const handleDropdownClick = (e) => {
      const header = e.target.closest('.dropdown-mobile-header');
      if (header) {
        const content = header.nextElementSibling;
        const allContents = document.querySelectorAll('.dropdown-mobile-content');
        allContents.forEach(c => {
          if (c !== content) {
            c.classList.remove('show');
          }
        });
        content.classList.toggle('show');
        header.classList.toggle('active');
      }
    };

    document.addEventListener('click', handleDropdownClick);
    
    return () => {
      document.removeEventListener('click', handleDropdownClick);
    };
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavigationBar />
          <CartButton />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/board" element={<BoardSection />} />
            <Route path="/global" element={<GlobalSection />} />
            <Route path="/products" element={<ProductsSection />} />
            <Route path="/compensation" element={<CompensationPlan />} />
            <Route path="/packages" element={<PackagesSection />} />
            <Route path="/testimonials" element={<TestimonialsPartners />} />
            <Route path="/contact" element={<ContactSupport />} />
            <Route path="/checkout" element={<Checkout />} />   {/* <-- ADDED */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;