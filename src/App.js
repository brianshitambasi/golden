import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomeComponent from './components/HomeComponent';
import AboutUs from './components/AboutUs';
import BoardSection from './components/BoardSection';
import GlobalSection from './components/GlobalSection';
import ProductsSection from './components/ProductsSection';
import CompensationPlan from './components/CompensationPlan';
import PackagesSection from './components/PackagesSection';
import TestimonialsPartners from './components/TestimonialsPartners';
import ContactSupport from './components/ContactSupport';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;