// ==================== src/components/CompensationPlan.jsx ====================
const React = require('react');

const CompensationPlan = () => {
  const monthlyProjection = [
    { month: 'Month 1', pairs: 2, earnings: '9,600' },
    { month: 'Month 2', pairs: 4, earnings: '19,200' },
    { month: 'Month 3', pairs: 8, earnings: '38,400' },
    { month: 'Month 4', pairs: 16, earnings: '76,800' },
    { month: 'Month 5', pairs: 32, earnings: '153,600' },
    { month: 'Month 6', pairs: 64, earnings: '307,200' },
    { month: 'Month 7', pairs: 128, earnings: '614,400' },
    { month: 'Month 8', pairs: 256, earnings: '1,228,800' },
    { month: 'Month 9', pairs: 512, earnings: '2,457,600' },
    { month: 'Month 10', pairs: 1024, earnings: '4,915,200' },
    { month: 'Month 11', pairs: 2048, earnings: '9,830,400' },
    { month: 'Month 12', pairs: 4096, earnings: '19,660,800' },
  ];

  return React.createElement('section', { 
    id: 'compensation', 
    className: 'py-5', 
    style: { background: 'linear-gradient(135deg, #fef9f0, #fff5e6)' } 
  },
    React.createElement('div', { className: 'container' },
      // Section Header
      React.createElement('div', { className: 'text-center mb-5' },
        React.createElement('span', { className: 'badge bg-warning text-dark px-4 py-2 rounded-pill mb-3' },
          React.createElement('i', { className: 'fas fa-chart-line me-2' }), ' EARNING SYSTEM'
        ),
        React.createElement('h2', { className: 'display-4 fw-bold mb-3' },
          '💰 COMPENSATION ', React.createElement('span', { className: 'golden-text' }, 'PLAN')
        ),
        React.createElement('div', { className: 'gold-divider' }),
        React.createElement('p', { className: 'text-muted fs-5' }, 'Unlimited earning potential with our revolutionary binary system')
      ),
      
      // Two Main Bonus Cards
      React.createElement('div', { className: 'row justify-content-center mb-5 g-4' },
        // Direct Connector's Bonus
        React.createElement('div', { className: 'col-lg-5 col-md-6' },
          React.createElement('div', { className: 'card h-100 border-0 shadow-lg rounded-4 overflow-hidden' },
            React.createElement('div', { className: 'card-body p-4 text-center' },
              React.createElement('div', { className: 'mb-3' },
                React.createElement('div', { className: 'd-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle p-3' },
                  React.createElement('span', { className: 'display-4 fw-bold text-warning' }, '1')
                )
              ),
              React.createElement('h3', { className: 'h2 fw-bold text-warning mb-3' }, "Direct Connector's Bonus"),
              React.createElement('p', { className: 'display-3 fw-bold text-success mb-2' }, 'KES 6,000'),
              React.createElement('p', { className: 'text-muted mb-3' }, 'For anyone you connect directly'),
              React.createElement('div', { className: 'bg-warning bg-opacity-10 rounded-3 p-3 mt-3' },
                React.createElement('p', { className: 'mb-0 fw-semibold' },
                  '100 connections = ', React.createElement('span', { className: 'text-success fs-4 fw-bold' }, 'KES 600,000')
                )
              ),
              React.createElement('div', { className: 'mt-3' },
                React.createElement('i', { className: 'fas fa-users text-warning me-1' }),
                React.createElement('small', { className: 'text-muted' }, ' Unlimited direct referrals')
              )
            )
          )
        ),
        
        // Matching Bonus
        React.createElement('div', { className: 'col-lg-5 col-md-6' },
          React.createElement('div', { className: 'card h-100 border-0 shadow-lg rounded-4 overflow-hidden' },
            React.createElement('div', { className: 'card-body p-4 text-center' },
              React.createElement('div', { className: 'mb-3' },
                React.createElement('div', { className: 'd-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle p-3' },
                  React.createElement('span', { className: 'display-4 fw-bold text-success' }, '2')
                )
              ),
              React.createElement('h3', { className: 'h2 fw-bold text-success mb-3' }, 'Matching Bonus (MB)'),
              React.createElement('p', { className: 'display-3 fw-bold text-warning mb-2' }, 'KES 4,800'),
              React.createElement('p', { className: 'text-muted mb-3' }, 'Per pair (Left & Right group sales)'),
              React.createElement('div', { className: 'bg-success bg-opacity-10 rounded-3 p-3 mt-3' },
                React.createElement('p', { className: 'mb-0 fw-semibold' },
                  React.createElement('i', { className: 'fas fa-arrow-up text-warning me-1' }),
                  React.createElement('span', { className: 'text-warning' }, '↑ UP TO INFINITY ↑')
                )
              ),
              React.createElement('div', { className: 'mt-3' },
                React.createElement('code', { className: 'bg-light p-2 rounded d-inline-block' }, 'LEFT: 6,000 | RIGHT: 6,000 = KES 16,800 per cycle')
              )
            )
          )
        )
      ),
      
      // Yearly Projection Table
      React.createElement('div', { className: 'row justify-content-center mt-5' },
        React.createElement('div', { className: 'col-lg-10' },
          React.createElement('div', { className: 'card border-0 shadow-lg rounded-4 overflow-hidden' },
            React.createElement('div', { className: 'card-header text-white text-center py-3', style: { background: 'linear-gradient(135deg, #D4AF37, #B8860B)' } },
              React.createElement('i', { className: 'fas fa-chart-line me-2' }),
              React.createElement('strong', null, '📈 ONE YEAR SCENARIO - Matching Bonus Growth Projection')
            ),
            React.createElement('div', { className: 'card-body p-0' },
              React.createElement('div', { className: 'table-responsive' },
                React.createElement('table', { className: 'table table-hover mb-0' },
                  React.createElement('thead', { className: 'bg-light' },
                    React.createElement('tr', null,
                      React.createElement('th', { className: 'p-3 text-center' }, 'Month'),
                      React.createElement('th', { className: 'p-3 text-center' }, 'Pairs'),
                      React.createElement('th', { className: 'p-3 text-center' }, 'Earnings (KES)')
                    )
                  ),
                  React.createElement('tbody', null,
                    monthlyProjection.map((item, idx) =>
                      React.createElement('tr', { key: idx, className: 'align-middle' },
                        React.createElement('td', { className: 'p-3 text-center fw-semibold' }, item.month),
                        React.createElement('td', { className: 'p-3 text-center' }, item.pairs.toLocaleString()),
                        React.createElement('td', { className: 'p-3 text-center' },
                          React.createElement('span', { className: 'fw-bold text-success' }, `KES ${parseInt(item.earnings).toLocaleString()}`)
                        )
                      )
                    )
                  ),
                  React.createElement('tfoot', { className: 'bg-warning bg-opacity-10' },
                    React.createElement('tr', null,
                      React.createElement('td', { colSpan: '2', className: 'p-3 text-end fw-bold fs-5' }, '12 Months Total:'),
                      React.createElement('td', { className: 'p-3 text-center' },
                        React.createElement('span', { className: 'fw-bold text-success fs-4' }, 'KES 137,592,000')
                      )
                    )
                  )
                )
              )
            )
          )
        )
      ),
      
      // Spillover System Note
      React.createElement('div', { className: 'row justify-content-center mt-5' },
        React.createElement('div', { className: 'col-lg-8' },
          React.createElement('div', { className: 'text-center p-4 bg-white rounded-4 shadow-sm border border-warning' },
            React.createElement('i', { className: 'fas fa-users fs-1 text-warning mb-3' }),
            React.createElement('h4', { className: 'fw-bold mb-2' }, 'Spillover Support System'),
            React.createElement('p', { className: 'text-muted mb-0' }, 
              '"Left & Right synergy for maximum residual earnings — Our binary system ensures you never work alone"'
            )
          )
        )
      ),
      
      // Disclaimer
      React.createElement('div', { className: 'text-center mt-4' },
        React.createElement('small', { className: 'text-muted' },
          React.createElement('i', { className: 'fas fa-info-circle me-1' }),
          '*Based on binary growth & spillover support system. Actual earnings may vary based on individual effort.'
        )
      )
    )
  );
};

module.exports = CompensationPlan;