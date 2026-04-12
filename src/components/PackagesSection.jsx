// ==================== src/components/PackagesSection.jsx ====================
const React = require('react');
const { useState } = React;

const PackagesSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const packages = [
    { 
      name: 'GLOBAL', 
      accounts: 1, 
      cost: '29,888', 
      daily: '96,000', 
      color: '#4A90E2',
      bgLight: '#EBF3FE',
      icon: 'fas fa-globe'
    },
    { 
      name: 'NEOVERSE', 
      accounts: 3, 
      cost: '42,000', 
      daily: '288,000', 
      color: '#50C878',
      bgLight: '#E8F5E9',
      icon: 'fas fa-star'
    },
    { 
      name: 'TECHNOVERSE', 
      accounts: 7, 
      cost: '123,900', 
      daily: '672,000', 
      color: '#9B59B6',
      bgLight: '#F3E8FF',
      icon: 'fas fa-microchip'
    },
    { 
      name: 'DIGIVERSE', 
      accounts: 15, 
      cost: '254,200', 
      daily: '1,444,000', 
      color: '#E67E22',
      bgLight: '#FFF3E0',
      icon: 'fas fa-chart-line'
    },
    { 
      name: 'MEGAVERSE', 
      accounts: 31, 
      cost: '505,100', 
      daily: '2,976,000', 
      color: '#E74C3C',
      bgLight: '#FDEDEC',
      icon: 'fas fa-crown'
    },
  ];

  const handleSelectPlan = function(pkg) {
    setSelectedPackage(pkg);
    setShowContactModal(true);
  };

  const handleCloseModal = function() {
    setShowContactModal(false);
    setSelectedPackage(null);
  };

  // Contact Modal Component
  const ContactModal = function() {
    if (!showContactModal || !selectedPackage) return null;
    
    return React.createElement('div', {
      className: 'modal show d-block',
      style: { backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'auto' },
      onClick: function(e) { if (e.target === e.currentTarget) handleCloseModal(); }
    },
      React.createElement('div', { className: 'modal-dialog modal-dialog-centered modal-lg', style: { margin: '50px auto' } },
        React.createElement('div', { className: 'modal-content rounded-4', style: { background: 'linear-gradient(135deg, #fff, #f8f9fa)' } },
          React.createElement('div', { className: 'modal-header border-0 p-4' },
            React.createElement('h4', { className: 'modal-title fw-bold' }, 
              React.createElement('i', { className: 'fas fa-gem text-warning me-2' }),
              'Select Your Package'
            ),
            React.createElement('button', { type: 'button', className: 'btn-close', onClick: handleCloseModal })
          ),
          React.createElement('div', { className: 'modal-body p-4' },
            React.createElement('div', { className: 'text-center mb-4' },
              React.createElement('div', { 
                className: 'd-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3',
                style: { 
                  background: 'linear-gradient(135deg, ' + selectedPackage.color + ', ' + selectedPackage.color + 'dd)',
                  width: '80px',
                  height: '80px'
                }
              },
                React.createElement('i', { className: selectedPackage.icon + ' fs-1 text-white' })
              ),
              React.createElement('h3', { className: 'fw-bold mb-2' }, selectedPackage.name, ' Package'),
              React.createElement('p', { className: 'text-muted' }, selectedPackage.accounts, ' ACCOUNTS')
            ),
            React.createElement('div', { className: 'row g-3 mb-4' },
              React.createElement('div', { className: 'col-6' },
                React.createElement('div', { className: 'bg-light rounded-3 p-3 text-center' },
                  React.createElement('small', { className: 'text-muted d-block' }, 'Investment'),
                  React.createElement('strong', { className: 'fs-4 text-success' }, 'KES ', selectedPackage.cost)
                )
              ),
              React.createElement('div', { className: 'col-6' },
                React.createElement('div', { className: 'bg-light rounded-3 p-3 text-center' },
                  React.createElement('small', { className: 'text-muted d-block' }, 'Daily Income'),
                  React.createElement('strong', { className: 'fs-4 text-success' }, 'KES ', selectedPackage.daily)
                )
              )
            ),
            React.createElement('h5', { className: 'fw-bold mb-3' }, 'Contact Our Support Team'),
            React.createElement('p', { className: 'text-muted mb-3' }, 'Fill in your details and one of our representatives will contact you shortly.'),
            
            // Contact Form
            React.createElement('form', { 
              id: 'contactForm',
              onSubmit: function(e) {
                e.preventDefault();
                var formData = new FormData(e.target);
                var name = formData.get('name');
                var email = formData.get('email');
                var phone = formData.get('phone');
                
                // Prepare WhatsApp message with user details
                var finalMessage = 'Hello%2C%20I%20am%20interested%20in%20the%20' + selectedPackage.name + '%20package%20(' + selectedPackage.accounts + '%20accounts)%20costing%20KES%20' + selectedPackage.cost + '%20with%20daily%20income%20potential%20of%20KES%20' + selectedPackage.daily + '.%0A%0AName%3A%20' + encodeURIComponent(name) + '%0AEmail%3A%20' + encodeURIComponent(email) + '%0APhone%3A%20' + encodeURIComponent(phone) + '%0A%0APlease%20send%20me%20more%20information%20about%20this%20package.';
                
                // Open WhatsApp
                window.open('https://wa.me/254708956451?text=' + finalMessage, '_blank');
                handleCloseModal();
              }
            },
              React.createElement('div', { className: 'mb-3' },
                React.createElement('label', { className: 'form-label fw-semibold' }, 'Full Name *'),
                React.createElement('input', { 
                  type: 'text', 
                  name: 'name', 
                  className: 'form-control rounded-pill py-2',
                  required: true,
                  placeholder: 'Enter your full name'
                })
              ),
              React.createElement('div', { className: 'mb-3' },
                React.createElement('label', { className: 'form-label fw-semibold' }, 'Email Address *'),
                React.createElement('input', { 
                  type: 'email', 
                  name: 'email', 
                  className: 'form-control rounded-pill py-2',
                  required: true,
                  placeholder: 'your@email.com'
                })
              ),
              React.createElement('div', { className: 'mb-3' },
                React.createElement('label', { className: 'form-label fw-semibold' }, 'Phone Number *'),
                React.createElement('input', { 
                  type: 'tel', 
                  name: 'phone', 
                  className: 'form-control rounded-pill py-2',
                  required: true,
                  placeholder: '+254 XXX XXX XXX'
                })
              ),
              React.createElement('button', { 
                type: 'submit',
                className: 'w-100 py-2 rounded-pill fw-bold border-0 mt-3',
                style: {
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: 'white',
                  transition: 'all 0.3s ease'
                },
                onMouseEnter: function(e) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.4)';
                },
                onMouseLeave: function(e) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              },
                React.createElement('i', { className: 'fab fa-whatsapp me-2' }),
                'Send via WhatsApp'
              )
            ),
            React.createElement('hr', { className: 'my-4' }),
            React.createElement('div', { className: 'text-center' },
              React.createElement('p', { className: 'text-muted small mb-0' }, 
                'Or call us directly: ',
                React.createElement('strong', { className: 'text-warning' }, '+254 708 956451')
              )
            )
          )
        )
      )
    );
  };

  return React.createElement('div', null,
    React.createElement('section', { 
      id: 'packages', 
      className: 'py-5', 
      style: { background: 'linear-gradient(135deg, #ffffff, #f8f9fa)' } 
    },
      React.createElement('div', { className: 'container' },
        // Section Header
        React.createElement('div', { className: 'text-center mb-5' },
          React.createElement('span', { className: 'badge bg-warning text-dark px-4 py-2 rounded-pill mb-3' },
            React.createElement('i', { className: 'fas fa-gem me-2' }), ' START YOUR JOURNEY'
          ),
          React.createElement('h2', { className: 'display-4 fw-bold mb-3' },
            'BASIC START UP ', React.createElement('span', { className: 'golden-text' }, 'PACKAGE')
          ),
          React.createElement('div', { className: 'gold-divider' }),
          React.createElement('p', { className: 'text-muted fs-5' }, 'Choose your plan carefully — Unlock daily income potential')
        ),

        // Packages Grid
        React.createElement('div', { className: 'row justify-content-center g-4' },
          packages.map(function(pkg, idx) {
            return React.createElement('div', { key: idx, className: 'col-lg-3 col-md-6' },
              React.createElement('div', { 
                className: 'card h-100 border-0 rounded-4 overflow-hidden shadow-hover', 
                style: { 
                  background: 'linear-gradient(135deg, ' + pkg.bgLight + ', white)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                } 
              },
                // Package Header
                React.createElement('div', { className: 'text-center pt-4 pb-2' },
                  React.createElement('div', { 
                    className: 'd-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3',
                    style: { 
                      background: 'linear-gradient(135deg, ' + pkg.color + ', ' + pkg.color + 'dd)',
                      width: '70px',
                      height: '70px'
                    }
                  },
                    React.createElement('i', { className: pkg.icon + ' fs-1 text-white' })
                  ),
                  React.createElement('h3', { className: 'fw-extrabold mb-1', style: { color: pkg.color } }, pkg.name),
                  React.createElement('p', { className: 'text-muted small' }, pkg.accounts + ' ACCOUNTS')
                ),

                // Card Body
                React.createElement('div', { className: 'card-body text-center pt-0' },
                  // Investment
                  React.createElement('div', { className: 'mb-3' },
                    React.createElement('p', { className: 'text-muted small mb-1' }, 'Investment'),
                    React.createElement('p', { className: 'display-6 fw-bold text-dark' }, 'KES ' + pkg.cost)
                  ),

                  // Daily Income
                  React.createElement('div', { className: 'rounded-3 p-3 mb-3', style: { background: 'rgba(212, 175, 55, 0.1)' } },
                    React.createElement('p', { className: 'small text-success fw-semibold mb-1' },
                      React.createElement('i', { className: 'fas fa-chart-line me-1' }), ' Daily Income Potential'
                    ),
                    React.createElement('p', { className: 'h3 fw-bold text-success mb-0' }, 'KES ' + pkg.daily)
                  ),

                  // Features
                  React.createElement('div', { className: 'text-start mb-3' },
                    React.createElement('div', { className: 'd-flex align-items-center gap-2 mb-2' },
                      React.createElement('i', { className: 'fas fa-check-circle text-success small' }),
                      React.createElement('small', { className: 'text-muted' }, 'Binary Compensation')
                    ),
                    React.createElement('div', { className: 'd-flex align-items-center gap-2 mb-2' },
                      React.createElement('i', { className: 'fas fa-check-circle text-success small' }),
                      React.createElement('small', { className: 'text-muted' }, 'Spillover Support')
                    ),
                    React.createElement('div', { className: 'd-flex align-items-center gap-2' },
                      React.createElement('i', { className: 'fas fa-check-circle text-success small' }),
                      React.createElement('small', { className: 'text-muted' }, 'Unlimited Matching Bonus')
                    )
                  ),

                  // Select Button - Now opens contact modal
                  React.createElement('button', { 
                    className: 'w-100 py-2 rounded-pill fw-semibold border-0',
                    style: {
                      background: 'linear-gradient(135deg, ' + pkg.color + ', ' + pkg.color + 'cc)',
                      color: 'white',
                      transition: 'all 0.3s ease'
                    },
                    onMouseEnter: function(e) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 5px 15px ' + pkg.color + '66';
                    },
                    onMouseLeave: function(e) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    },
                    onClick: function() { handleSelectPlan(pkg); }
                  },
                    'Select Plan ', React.createElement('i', { className: 'fas fa-arrow-right ms-2' })
                  )
                ),

                // Popular Badge for MEGAVERSE
                pkg.name === 'MEGAVERSE' && React.createElement('div', { className: 'position-absolute top-0 end-0' },
                  React.createElement('div', { className: 'bg-warning text-dark px-3 py-1 rounded-start-pill small fw-bold' },
                    React.createElement('i', { className: 'fas fa-fire me-1' }), ' BEST VALUE'
                  )
                )
              )
            );
          })
        ),

        // Mission Statement
        React.createElement('div', { className: 'row justify-content-center mt-5' },
          React.createElement('div', { className: 'col-lg-10' },
            React.createElement('div', { 
              className: 'text-center p-4 rounded-4', 
              style: { 
                background: 'linear-gradient(135deg, #FFF8E7, #FFF3E0)',
                border: '2px solid rgba(212, 175, 55, 0.3)'
              } 
            },
              React.createElement('i', { className: 'fas fa-bullseye display-4 golden-text mb-3' }),
              React.createElement('h3', { className: 'fw-bold mb-2' }, 'OUR MISSION'),
              React.createElement('p', { className: 'fs-5 text-dark mb-0' },
                'TO IMPACT ', React.createElement('strong', { className: 'golden-text' }, '1,000,000 LIVES'), 
                ' POSITIVELY THROUGH OUR SYSTEMS BY 2025.'
              )
            )
          )
        )
      )
    ),
    React.createElement(ContactModal, null)
  );
};

module.exports = PackagesSection;