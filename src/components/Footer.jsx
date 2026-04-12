// ==================== src/components/Footer.jsx ====================
const React = require('react');

const Footer = () => {
  return React.createElement('footer', { 
    className: 'footer-custom',
    style: {
      background: 'linear-gradient(135deg, #1a1a1a, #0d0d0d)',
      padding: '60px 0 30px 0',
      marginTop: 'auto',
      borderTop: '1px solid rgba(212, 175, 55, 0.2)'
    }
  },
    React.createElement('div', { 
      className: 'container',
      style: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }
    },
      // Main Footer Content
      React.createElement('div', { 
        className: 'row',
        style: { marginBottom: '40px' }
      },
        // Company Info
        React.createElement('div', { 
          className: 'col-lg-4 col-md-6 mb-4 mb-lg-0',
          style: { textAlign: 'left' }
        },
          React.createElement('div', { 
            className: 'd-flex align-items-center gap-2 mb-3',
            style: { justifyContent: 'flex-start' }
          },
            React.createElement('div', {
              style: {
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            },
              React.createElement('i', { className: 'fas fa-crown text-white fs-4' })
            ),
            React.createElement('div', null,
              React.createElement('span', { 
                className: 'fw-bold', 
                style: { fontSize: '20px', color: '#fff' }
              }, 'GOLDEN '),
              React.createElement('span', { 
                className: 'fw-bold', 
                style: { 
                  background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontSize: '20px'
                }
              }, 'DREAMERS')
            )
          ),
          React.createElement('p', { 
            className: 'text-muted',
            style: { 
              fontSize: '14px', 
              lineHeight: '1.6', 
              color: '#999',
              marginBottom: '20px'
            }
          }, 'Empowering dreams across the globe through innovative network marketing solutions. Join us in transforming lives across 60+ countries worldwide.'),
          React.createElement('div', { className: 'd-flex gap-3' },
            React.createElement('div', {
              style: {
                width: '35px',
                height: '35px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              },
              onMouseEnter: function(e) {
                e.currentTarget.style.background = '#D4AF37';
                e.currentTarget.style.transform = 'translateY(-3px)';
              },
              onMouseLeave: function(e) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            },
              React.createElement('i', { className: 'fab fa-facebook-f', style: { color: '#fff', fontSize: '16px' } })
            ),
            React.createElement('div', {
              style: {
                width: '35px',
                height: '35px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              },
              onMouseEnter: function(e) {
                e.currentTarget.style.background = '#D4AF37';
                e.currentTarget.style.transform = 'translateY(-3px)';
              },
              onMouseLeave: function(e) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            },
              React.createElement('i', { className: 'fab fa-instagram', style: { color: '#fff', fontSize: '16px' } })
            ),
            React.createElement('div', {
              style: {
                width: '35px',
                height: '35px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              },
              onMouseEnter: function(e) {
                e.currentTarget.style.background = '#D4AF37';
                e.currentTarget.style.transform = 'translateY(-3px)';
              },
              onMouseLeave: function(e) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            },
              React.createElement('i', { className: 'fab fa-twitter', style: { color: '#fff', fontSize: '16px' } })
            ),
            React.createElement('div', {
              style: {
                width: '35px',
                height: '35px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              },
              onMouseEnter: function(e) {
                e.currentTarget.style.background = '#D4AF37';
                e.currentTarget.style.transform = 'translateY(-3px)';
              },
              onMouseLeave: function(e) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            },
              React.createElement('i', { className: 'fab fa-linkedin-in', style: { color: '#fff', fontSize: '16px' } })
            )
          )
        ),

        // Quick Links
        React.createElement('div', { 
          className: 'col-lg-2 col-md-6 mb-4 mb-lg-0',
          style: { textAlign: 'left' }
        },
          React.createElement('h5', { 
            className: 'fw-bold mb-3',
            style: { 
              color: '#D4AF37', 
              fontSize: '18px',
              position: 'relative',
              paddingBottom: '10px'
            }
          }, 'Quick Links'),
          React.createElement('ul', { 
            className: 'list-unstyled',
            style: { paddingLeft: '0' }
          },
            React.createElement('li', { className: 'mb-2' },
              React.createElement('a', { 
                href: '/', 
                style: { color: '#999', textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s ease' },
                onMouseEnter: function(e) { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.paddingLeft = '5px'; },
                onMouseLeave: function(e) { e.currentTarget.style.color = '#999'; e.currentTarget.style.paddingLeft = '0'; }
              }, 'Home')
            ),
            React.createElement('li', { className: 'mb-2' },
              React.createElement('a', { 
                href: '/about', 
                style: { color: '#999', textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s ease' },
                onMouseEnter: function(e) { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.paddingLeft = '5px'; },
                onMouseLeave: function(e) { e.currentTarget.style.color = '#999'; e.currentTarget.style.paddingLeft = '0'; }
              }, 'About Us')
            ),
            React.createElement('li', { className: 'mb-2' },
              React.createElement('a', { 
                href: '/products', 
                style: { color: '#999', textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s ease' },
                onMouseEnter: function(e) { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.paddingLeft = '5px'; },
                onMouseLeave: function(e) { e.currentTarget.style.color = '#999'; e.currentTarget.style.paddingLeft = '0'; }
              }, 'Products')
            ),
            React.createElement('li', { className: 'mb-2' },
              React.createElement('a', { 
                href: '/packages', 
                style: { color: '#999', textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s ease' },
                onMouseEnter: function(e) { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.paddingLeft = '5px'; },
                onMouseLeave: function(e) { e.currentTarget.style.color = '#999'; e.currentTarget.style.paddingLeft = '0'; }
              }, 'Startup Packages')
            )
          )
        ),

        // Business Links
        React.createElement('div', { 
          className: 'col-lg-3 col-md-6 mb-4 mb-lg-0',
          style: { textAlign: 'left' }
        },
          React.createElement('h5', { 
            className: 'fw-bold mb-3',
            style: { 
              color: '#D4AF37', 
              fontSize: '18px',
              position: 'relative',
              paddingBottom: '10px'
            }
          }, 'Business'),
          React.createElement('ul', { 
            className: 'list-unstyled',
            style: { paddingLeft: '0' }
          },
            React.createElement('li', { className: 'mb-2' },
              React.createElement('a', { 
                href: '/board', 
                style: { color: '#999', textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s ease' },
                onMouseEnter: function(e) { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.paddingLeft = '5px'; },
                onMouseLeave: function(e) { e.currentTarget.style.color = '#999'; e.currentTarget.style.paddingLeft = '0'; }
              }, 'Board of Directors')
            ),
            React.createElement('li', { className: 'mb-2' },
              React.createElement('a', { 
                href: '/compensation', 
                style: { color: '#999', textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s ease' },
                onMouseEnter: function(e) { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.paddingLeft = '5px'; },
                onMouseLeave: function(e) { e.currentTarget.style.color = '#999'; e.currentTarget.style.paddingLeft = '0'; }
              }, 'Compensation Plan')
            ),
            React.createElement('li', { className: 'mb-2' },
              React.createElement('a', { 
                href: '/testimonials', 
                style: { color: '#999', textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s ease' },
                onMouseEnter: function(e) { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.paddingLeft = '5px'; },
                onMouseLeave: function(e) { e.currentTarget.style.color = '#999'; e.currentTarget.style.paddingLeft = '0'; }
              }, 'Testimonials')
            )
          )
        ),

        // Contact Info
        React.createElement('div', { 
          className: 'col-lg-3 col-md-6',
          style: { textAlign: 'left' }
        },
          React.createElement('h5', { 
            className: 'fw-bold mb-3',
            style: { 
              color: '#D4AF37', 
              fontSize: '18px',
              position: 'relative',
              paddingBottom: '10px'
            }
          }, 'Contact Info'),
          React.createElement('div', { className: 'mb-3', style: { display: 'flex', alignItems: 'center', gap: '10px' } },
            React.createElement('i', { className: 'fas fa-phone-alt', style: { color: '#D4AF37', fontSize: '14px' } }),
            React.createElement('span', { style: { color: '#999', fontSize: '14px' } }, '+254 708 956451')
          ),
          React.createElement('div', { className: 'mb-3', style: { display: 'flex', alignItems: 'center', gap: '10px' } },
            React.createElement('i', { className: 'fas fa-envelope', style: { color: '#D4AF37', fontSize: '14px' } }),
            React.createElement('span', { style: { color: '#999', fontSize: '14px' } }, 'info@goldendreamers.com')
          ),
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
            React.createElement('i', { className: 'fas fa-map-marker-alt', style: { color: '#D4AF37', fontSize: '14px' } }),
            React.createElement('span', { style: { color: '#999', fontSize: '14px' } }, 'Nairobi, Kenya')
          )
        )
      ),

      // Divider
      React.createElement('hr', { 
        style: { 
          borderColor: 'rgba(212, 175, 55, 0.2)', 
          margin: '30px 0 20px 0' 
        } 
      }),

      // Bottom Footer
      React.createElement('div', { 
        className: 'text-center',
        style: { textAlign: 'center' }
      },
        React.createElement('p', { 
          className: 'text-muted',
          style: { 
            fontSize: '13px', 
            color: '#666',
            marginBottom: '10px'
          }
        }, '© 2025 Golden Dreamers International. All rights reserved.'),
        React.createElement('p', { 
          className: 'text-muted',
          style: { 
            fontSize: '12px', 
            color: '#555',
            fontStyle: 'italic'
          }
        }, '"The key to getting success is getting started" — CFG INTERNATIONAL')
      )
    )
  );
};

module.exports = Footer;