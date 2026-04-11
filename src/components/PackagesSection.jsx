// ==================== src/components/PackagesSection.jsx ====================
const React = require('react');

const PackagesSection = () => {
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

  return React.createElement('section', { 
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
        packages.map((pkg, idx) =>
          React.createElement('div', { key: idx, className: 'col-lg-3 col-md-6' },
            React.createElement('div', { 
              className: 'card h-100 border-0 rounded-4 overflow-hidden shadow-hover', 
              style: { 
                background: `linear-gradient(135deg, ${pkg.bgLight}, white)`,
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              } 
            },
              // Package Header
              React.createElement('div', { className: 'text-center pt-4 pb-2' },
                React.createElement('div', { 
                  className: 'd-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3',
                  style: { 
                    background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)`,
                    width: '70px',
                    height: '70px'
                  }
                },
                  React.createElement('i', { className: `${pkg.icon} fs-1 text-white` })
                ),
                React.createElement('h3', { className: 'fw-extrabold mb-1', style: { color: pkg.color } }, pkg.name),
                React.createElement('p', { className: 'text-muted small' }, `${pkg.accounts} ACCOUNTS`)
              ),

              // Card Body
              React.createElement('div', { className: 'card-body text-center pt-0' },
                // Investment
                React.createElement('div', { className: 'mb-3' },
                  React.createElement('p', { className: 'text-muted small mb-1' }, 'Investment'),
                  React.createElement('p', { className: 'display-6 fw-bold text-dark' }, `KES ${pkg.cost}`)
                ),

                // Daily Income
                React.createElement('div', { className: 'rounded-3 p-3 mb-3', style: { background: 'rgba(212, 175, 55, 0.1)' } },
                  React.createElement('p', { className: 'small text-success fw-semibold mb-1' },
                    React.createElement('i', { className: 'fas fa-chart-line me-1' }), ' Daily Income Potential'
                  ),
                  React.createElement('p', { className: 'h3 fw-bold text-success mb-0' }, `KES ${pkg.daily}`)
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

                // Select Button
                React.createElement('button', { 
                  className: 'w-100 py-2 rounded-pill fw-semibold border-0',
                  style: {
                    background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)`,
                    color: 'white',
                    transition: 'all 0.3s ease'
                  },
                  onMouseEnter: (e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = `0 5px 15px ${pkg.color}66`;
                  },
                  onMouseLeave: (e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
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
          )
        )
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
  );
};

module.exports = PackagesSection;