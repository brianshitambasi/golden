import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/about', label: 'About', icon: 'fas fa-info-circle' },
    { path: '/products', label: 'Products', icon: 'fas fa-box' },
    { path: '/global', label: 'Global Reach', icon: 'fas fa-globe' },
    { path: '/testimonials', label: 'Testimonials', icon: 'fas fa-star' },
  ];

  const businessDropdown = [
    { path: '/board', label: 'Board of Directors', icon: 'fas fa-users', description: 'Meet our leadership team', color: '#4A90E2' },
    { path: '/compensation', label: 'Compensation Plan', icon: 'fas fa-chart-line', description: 'View our earning structure', color: '#50C878' },
    { path: '/packages', label: 'Startup Packages', icon: 'fas fa-gem', description: 'Choose your investment plan', color: '#D4AF37' },
  ];

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      expanded={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      className={`navbar-custom ${scrolled ? 'navbar-scrolled shadow-lg py-2' : 'navbar-top py-3'}`}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease'
      }}
    >
      <Container fluid="lg">
        {/* Logo - GOLDEN DREAMERS Branding */}
        <BootstrapNavbar.Brand 
          as={Link}
          to="/"
          className="cursor-pointer brand-logo"
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
        <div className="d-lg-none">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
              border: 'none',
              borderRadius: '12px',
              padding: '10px 14px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
            }}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-white fs-3`}></i>
          </button>
        </div>

        {/* Desktop Toggle */}
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav"
          className="border-0 shadow-none d-none d-lg-flex"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} fs-3 text-warning`}></i>
        </BootstrapNavbar.Toggle>

        {/* Navigation Links */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex gap-2 align-items-center w-100">
            {/* Main Navigation Links */}
            {navLinks.map((link) => {
              const isActive = activeLink === link.path;
              return (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
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

            {/* Mobile Dropdown */}
            <div className="nav-dropdown-wrapper w-100 d-lg-none">
              <div 
                className="dropdown-mobile-header" 
                onClick={toggleMobileDropdown}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: mobileDropdownOpen ? 'rgba(212, 175, 55, 0.1)' : 'white',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e0e0e0',
                  marginBottom: mobileDropdownOpen ? '0' : '0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="fas fa-chart-line text-white fs-5"></i>
                  </div>
                  <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>Business Menu</span>
                </div>
                <i className={`fas fa-chevron-${mobileDropdownOpen ? 'up' : 'down'} text-warning fs-5`}></i>
              </div>
              
              {mobileDropdownOpen && (
                <div className="dropdown-mobile-content" style={{
                  marginTop: '8px',
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e0e0e0',
                  animation: 'slideDown 0.3s ease'
                }}>
                  {businessDropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                      className="dropdown-mobile-item"
                      style={{
                        display: 'block',
                        padding: '16px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        borderBottom: idx < businessDropdown.length - 1 ? '1px solid #e0e0e0' : 'none',
                        background: 'white'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div className="d-flex align-items-center" style={{ gap: '15px' }}>
                        <div className="dropdown-icon" style={{
                          width: '50px',
                          height: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                          borderRadius: '12px',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}>
                          <i className={`${item.icon} text-white fs-4`}></i>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div className="fw-bold" style={{ fontSize: '16px', color: '#333', marginBottom: '4px' }}>
                            {item.label}
                          </div>
                          <small className="text-muted" style={{ fontSize: '12px', display: 'block' }}>
                            {item.description}
                          </small>
                        </div>
                        <i className="fas fa-chevron-right text-warning"></i>
                      </div>
                    </Link>
                  ))}
                  <div className="dropdown-divider" style={{ height: '1px', background: '#e0e0e0' }}></div>
                  <Link
                    to="/compensation"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                    className="dropdown-mobile-item"
                    style={{
                      display: 'block',
                      padding: '16px',
                      textDecoration: 'none',
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #FFF8E7, #FFF3E0)',
                      fontWeight: 'bold',
                      color: '#D4AF37'
                    }}
                  >
                    <i className="fas fa-calculator me-2"></i>
                    Calculate Your Earnings
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              )}
            </div>

            {/* Desktop Dropdown */}
            <div className="nav-dropdown-custom d-none d-lg-block">
              <div className="dropdown">
                <button 
                  className="dropdown-toggle-custom"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '8px 16px',
                    fontWeight: '600',
                    color: '#4a5568',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <i className="fas fa-chart-line me-2"></i>
                  Business
                </button>
                <div className="dropdown-menu-custom">
                  {businessDropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="dropdown-item-custom"
                      style={{
                        display: 'block',
                        padding: '12px 20px',
                        textDecoration: 'none',
                        color: '#4a5568',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="dropdown-icon me-3" style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(212, 175, 55, 0.1)',
                          borderRadius: '10px'
                        }}>
                          <i className={`${item.icon} text-warning fs-5`}></i>
                        </div>
                        <div>
                          <div className="fw-semibold">{item.label}</div>
                          <small className="text-muted">{item.description}</small>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div style={{ height: '1px', background: '#e0e0e0', margin: '8px 0' }}></div>
                  <Link
                    to="/compensation"
                    onClick={() => setIsOpen(false)}
                    className="dropdown-item-custom text-center"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      textDecoration: 'none',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: '#D4AF37'
                    }}
                  >
                    <i className="fas fa-calculator me-2"></i>
                    Calculate Your Earnings
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Link */}
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`nav-link-custom ${activeLink === '/contact' ? 'active' : ''} px-3 py-2 rounded-pill`}
              style={{
                fontWeight: '600',
                transition: 'all 0.3s ease',
                color: activeLink === '/contact' ? '#D4AF37' : '#4a5568',
                backgroundColor: activeLink === '/contact' ? 'rgba(212, 175, 55, 0.1)' : 'transparent'
              }}
            >
              <i className="fas fa-headset me-2"></i>
              Contact
            </Nav.Link>
          </Nav>

          {/* Join Now Button - Golden Dreamers Style */}
          <Button
            as={Link}
            to="/packages"
            className="btn-join ms-lg-3 mt-3 mt-lg-0"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
              border: 'none',
              borderRadius: '50px',
              padding: '12px 28px',
              fontWeight: 'bold',
              color: 'white',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
              width: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
            }}
          >
            <i className="fas fa-gem me-2"></i>
            Join Golden Dreamers
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
        
        /* Desktop Dropdown Styles */
        .dropdown {
          position: relative;
          display: inline-block;
        }
        
        .dropdown-toggle-custom {
          cursor: pointer;
        }
        
        .dropdown-toggle-custom:hover {
          color: #D4AF37 !important;
          background-color: rgba(212, 175, 55, 0.1) !important;
        }
        
        .dropdown-menu-custom {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 300px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          margin-top: 8px;
          overflow: hidden;
        }
        
        .dropdown:hover .dropdown-menu-custom {
          display: block;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dropdown-item-custom:hover {
          background-color: rgba(212, 175, 55, 0.1);
          transform: translateX(5px);
        }
        
        /* Mobile menu button animation */
        .mobile-menu-button {
          transition: all 0.3s ease;
        }
        
        .mobile-menu-button:active {
          transform: scale(0.95);
        }
        
        @media (max-width: 992px) {
          .navbar-nav {
            margin-top: 20px;
            width: 100%;
          }
          
          .nav-link-custom {
            text-align: center;
            margin: 5px 0;
            justify-content: center;
            display: flex;
            align-items: center;
          }
          
          .nav-link-custom.active::after {
            bottom: -2px;
          }
        }
      `}</style>
    </BootstrapNavbar>
  );
};

export default NavBar;