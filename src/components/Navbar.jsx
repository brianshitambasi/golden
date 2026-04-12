import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    { path: '/board', label: 'Board of Directors', icon: 'fas fa-users', description: 'Meet our leadership team' },
    { path: '/compensation', label: 'Compensation Plan', icon: 'fas fa-chart-line', description: 'View our earning structure' },
    { path: '/packages', label: 'Startup Packages', icon: 'fas fa-gem', description: 'Choose your investment plan' },
  ];

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
        {/* Logo */}
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
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav"
          className="border-0 shadow-none"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} fs-3 text-warning`}></i>
        </BootstrapNavbar.Toggle>

        {/* Navigation Links */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex gap-2 align-items-center w-100">
            {/* Main Navigation Links */}
            {navLinks.map(link => {
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

            {/* Business Dropdown - Mobile Friendly */}
            <div className="nav-dropdown-wrapper w-100 d-lg-none">
              <div className="dropdown-mobile-header" onClick={() => {
                const dropdown = document.getElementById('mobile-business-dropdown');
                if (dropdown) {
                  dropdown.classList.toggle('show');
                }
              }}>
                <i className="fas fa-chart-line me-2"></i>
                Business
                <i className="fas fa-chevron-down ms-auto"></i>
              </div>
              <div id="mobile-business-dropdown" className="dropdown-mobile-content">
                {businessDropdown.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="dropdown-mobile-item"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-icon me-3">
                        <i className={`${item.icon} text-warning`}></i>
                      </div>
                      <div>
                        <div className="fw-semibold">{item.label}</div>
                        <small className="text-muted">{item.description}</small>
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="dropdown-divider"></div>
                <Link
                  to="/compensation"
                  onClick={() => setIsOpen(false)}
                  className="dropdown-mobile-item text-center"
                >
                  <i className="fas fa-calculator me-2"></i>
                  Calculate Your Earnings
                </Link>
              </div>
            </div>

            {/* Desktop Dropdown */}
            <NavDropdown
              title={
                <span>
                  <i className="fas fa-chart-line me-2"></i>
                  Business
                </span>
              }
              id="business-dropdown"
              className="nav-dropdown-custom d-none d-lg-block"
              menuVariant="light"
            >
              {businessDropdown.map((item, idx) => (
                <NavDropdown.Item
                  key={idx}
                  as={Link}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="dropdown-item-custom"
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-icon me-3">
                      <i className={`${item.icon} text-warning`}></i>
                    </div>
                    <div>
                      <div className="fw-semibold">{item.label}</div>
                      <small className="text-muted">{item.description}</small>
                    </div>
                  </div>
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item 
                as={Link}
                to="/compensation"
                onClick={() => setIsOpen(false)}
                className="dropdown-item-custom text-center"
              >
                <i className="fas fa-calculator me-2"></i>
                Calculate Your Earnings
              </NavDropdown.Item>
            </NavDropdown>

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

          {/* Join Now Button */}
          <Button
            as={Link}
            to="/packages"
            className="btn-join ms-lg-3 mt-3 mt-lg-0"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
              border: 'none',
              borderRadius: '50px',
              padding: '10px 28px',
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
            <i className="fas fa-user-plus me-2"></i>
            Join Now
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>

      <style>{`
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
        
        /* Mobile Dropdown Styles */
        .nav-dropdown-wrapper {
          margin: 5px 0;
          border-radius: 12px;
          background: white;
          border: 1px solid #e0e0e0;
        }
        
        .dropdown-mobile-header {
          padding: 12px 16px;
          display: flex;
          align-items: center;
          font-weight: 600;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 12px;
        }
        
        .dropdown-mobile-header:hover {
          background-color: rgba(212, 175, 55, 0.1);
          color: #D4AF37;
        }
        
        .dropdown-mobile-header i:first-child {
          margin-right: 12px;
        }
        
        .dropdown-mobile-header i:last-child {
          margin-left: auto;
          transition: transform 0.3s ease;
        }
        
        .dropdown-mobile-header.active i:last-child {
          transform: rotate(180deg);
        }
        
        .dropdown-mobile-content {
          display: none;
          padding: 8px 0;
          border-top: 1px solid #e0e0e0;
          background: #f8f9fa;
          border-radius: 0 0 12px 12px;
        }
        
        .dropdown-mobile-content.show {
          display: block;
        }
        
        .dropdown-mobile-item {
          padding: 12px 16px;
          display: block;
          text-decoration: none;
          color: #4a5568;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .dropdown-mobile-item:hover {
          background-color: rgba(212, 175, 55, 0.1);
          transform: translateX(5px);
          text-decoration: none;
          color: #4a5568;
        }
        
        .dropdown-divider {
          height: 1px;
          background: #e0e0e0;
          margin: 8px 0;
        }
        
        /* Desktop dropdown styles */
        .nav-dropdown-custom .dropdown-toggle {
          font-weight: 600;
          color: #4a5568;
          transition: all 0.3s ease;
          padding: 8px 16px;
          border-radius: 50px;
        }
        
        .nav-dropdown-custom .dropdown-toggle:hover {
          color: #D4AF37 !important;
          background-color: rgba(212, 175, 55, 0.1) !important;
        }
        
        .nav-dropdown-custom .dropdown-menu {
          position: absolute;
          transform: translateX(-20%) !important;
          min-width: 280px;
          margin-top: 0.5rem;
          border: none;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
        }
        
        .dropdown-item-custom {
          padding: 10px 20px;
          transition: all 0.3s ease;
        }
        
        .dropdown-item-custom:hover {
          background-color: rgba(212, 175, 55, 0.1);
          transform: translateX(5px);
        }
        
        .dropdown-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 8px;
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