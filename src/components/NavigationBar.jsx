import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setExpanded(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#compensation', label: 'Compensation' },
    { href: '#global', label: 'Global Reach' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#packages', label: 'Packages' },
  ];

  return (
    <Navbar 
      bg={scrolled ? 'white' : 'transparent'} 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      style={{ padding: scrolled ? '0.5rem 0' : '1rem 0' }}
    >
      <Container>
        <Navbar.Brand href="#" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="fw-bold">
          <i className="fas fa-crown text-warning me-2"></i>
          <span className="text-dark">GOLDEN <span className="text-warning">DREAMERS</span></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link 
                key={link.href} 
                href={link.href} 
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="mx-2 fw-semibold"
              >
                {link.label}
              </Nav.Link>
            ))}
            <Nav.Link 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#packages'); }}
              className="btn btn-warning text-dark px-4 rounded-pill ms-2 fw-bold"
            >
              Join Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;