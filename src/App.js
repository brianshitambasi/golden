import React from 'react';
import NavigationBar from './components/Navbar';
import HomeComponent from './components/HomeComponent';
import AboutUs from './components/AboutUs';
import BoardSection from './components/BoardSection';
import GlobalSection from './components/GlobalSection';
import ProductsSection from './components/ProductsSection';
import CompensationPlan from './components/CompensationPlan';
import PackagesSection from './components/PackagesSection';
import TestimonialsPartners from './components/TestimonialsPartners';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomeComponent />
      <AboutUs />
      <BoardSection />
      <GlobalSection />
      <ProductsSection />
      <CompensationPlan />
      <PackagesSection />
      <TestimonialsPartners />
      <Footer />
    </div>
  );
}

export default App;