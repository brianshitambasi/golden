import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'products', 'compensation', 'global', 'testimonials', 'packages'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: 'fas fa-home' },
    { href: '#about', label: 'About', icon: 'fas fa-info-circle' },
    { href: '#products', label: 'Products', icon: 'fas fa-box' },
    { href: '#compensation', label: 'Compensation', icon: 'fas fa-chart-line' },
    { href: '#global', label: 'Global Reach', icon: 'fas fa-globe' },
    { href: '#testimonials', label: 'Testimonials', icon: 'fas fa-star' },
    { href: '#packages', label: 'Packages', icon: 'fas fa-gem' },
  ];

  const scrollToSection = (href, sectionId) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveLink(sectionId);
    setIsOpen(false);
  };

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      expanded={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      className={`navbar-custom transition-all duration-500 ${scrolled ? 'navbar-scrolled shadow-lg py-2' : 'navbar-top py-3'}`}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease'
      }}
    >
      <Container>
        {/* Logo */}
        <BootstrapNavbar.Brand 
          onClick={() => scrollToSection('#home', 'home')}
          className="cursor-pointer brand-logo"
          style={{ cursor: 'pointer' }}
        >
          <div className="d-flex align-items-center gap-2">
            <div className="logo-icon">
              <i className="fas fa-crown text-warning fs-1"></i>
            </div>
            <div className="brand-text">
              <span className="fw-bold fs-4 text-dark">GOLDEN</span>
              <span className="fw-bold fs-4" style={{ 
                background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}> DREAMERS</span>
            </div>
          </div>
        </BootstrapNavbar.Brand>

        {/* Mobile Toggle Button */}
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav"
          className="border-0 shadow-none"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} fs-3 text-warning`}></i>
        </BootstrapNavbar.Toggle>

        {/* Navigation Links */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex gap-2">
            {navLinks.map(link => {
              const isActive = activeLink === link.href.substring(1);
              return (
                <Nav.Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    scrollToSection(link.href, link.href.substring(1)); 
                  }}
                  className={`nav-link-custom ${isActive ? 'active' : ''} px-3 py-2 rounded-pill`}
                  style={{
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    color: isActive ? '#D4AF37' : '#4a5568',
                    backgroundColor: isActive ? 'rgba(212, 175, 55, 0.1)' : 'transparent'
                  }}
                >
                  <i className={`${link.icon} me-2 ${isActive ? 'text-warning' : 'text-secondary'}`}></i>
                  {link.label}
                </Nav.Link>
              );
            })}
          </Nav>

          {/* Join Now Button */}
          <Button
            onClick={() => scrollToSection('#packages', 'packages')}
            className="btn-join ms-lg-3"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
              border: 'none',
              borderRadius: '50px',
              padding: '10px 28px',
              fontWeight: 'bold',
              color: 'white',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
            }}
          >
            <i className="fas fa-user-plus me-2"></i>
            Join Now
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>

      <style jsx>{`
        .navbar-custom {
          transition: all 0.3s ease;
        }
        
        .navbar-top {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
        }
        
        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
        }
        
        .brand-logo {
          transition: all 0.3s ease;
        }
        
        .brand-logo:hover {
          transform: scale(1.02);
        }
        
        .logo-icon {
          transition: all 0.3s ease;
        }
        
        .brand-logo:hover .logo-icon i {
          transform: scale(1.1);
          text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }
        
        .nav-link-custom {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link-custom:hover {
          color: #D4AF37 !important;
          background-color: rgba(212, 175, 55, 0.1) !important;
          transform: translateY(-2px);
        }
        
        .nav-link-custom.active {
          color: #D4AF37 !important;
          background-color: rgba(212, 175, 55, 0.1) !important;
        }
        
        .nav-link-custom.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 3px;
          background: linear-gradient(90deg, #D4AF37, #B8860B);
          border-radius: 3px;
        }
        
        .btn-join {
          position: relative;
          overflow: hidden;
        }
        
        .btn-join::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .btn-join:hover::before {
          width: 300px;
          height: 300px;
        }
        
        @media (max-width: 992px) {
          .navbar-nav {
            margin-top: 20px;
          }
          
          .nav-link-custom {
            text-align: center;
            margin: 5px 0;
          }
          
          .btn-join {
            width: 100%;
            margin-top: 15px;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </BootstrapNavbar>
  );
};

export default NavBar;