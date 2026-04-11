import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#compensation', label: 'Compensation' },
    { href: '#global', label: 'Global Reach' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#packages', label: 'Packages' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 shadow-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <i className="fas fa-crown text-3xl text-yellow-600"></i>
            <span className="font-bold text-xl text-gray-800">
              GOLDEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600">DREAMERS</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }} className="text-gray-700 hover:text-yellow-600 font-medium transition duration-300 cursor-pointer">
                {link.label}
              </a>
            ))}
          </div>
          
          <button className="md:hidden text-gray-700 text-2xl" onClick={() => setIsOpen(!isOpen)}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col space-y-3 px-4 py-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }} className="text-gray-700 hover:text-yellow-600 py-2 cursor-pointer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;