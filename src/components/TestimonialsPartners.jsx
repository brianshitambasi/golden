// ==================== src/components/TestimonialsPartners.jsx ====================
const React = require('react');

const TestimonialsPartners = () => {
  const testimonials = [
    {
      name: 'ERIC KIMATHI',
      role: 'Trek Qualifier',
      quote: 'Tamarind Trees — Resilience!',
      image: '/images/static/IMG-20260406-WA0334.jpg',
      achievement: 'Top Performer 2024'
    },
    {
      name: 'LEADER SILAS OKOTH',
      role: 'Leadership Award Winner',
      quote: 'Excellent Leadership Award',
      image: '/images/static/IMG-20260406-WA0924.jpg',
      achievement: 'Gold Ambassador'
    },
    {
      name: 'PAUL BARASA',
      role: 'CEO Golden Dreamers',
      quote: 'Building leaders that last',
      image: '/images/static/IMG-20260406-WA0488.jpg',
      achievement: 'Visionary Leader'
    }
  ];

  const partners = [
    { 
      name: 'EcoBank', 
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Ecobank_logo.svg/200px-Ecobank_logo.svg.png',
      tag: 'The Pan African Bank'
    },
    { 
      name: 'Stanbic Bank', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Stanbic_Bank_logo.svg/200px-Stanbic_Bank_logo.svg.png',
      tag: 'A member of Standard Bank Group'
    },
    { 
      name: "Nature's Way", 
      image: 'https://www.naturesway.com/on/demandware.static/-/Sites-NW-US-Library/default/dw5f8e3c8e/images/logo.png',
      tag: 'Vegetarian V-CAPS',
      fallbackImage: 'https://via.placeholder.com/150x80/4A90E2/white?text=Nature%27s+Way'
    },
    { 
      name: 'WEIDER', 
      image: 'https://www.weider.com/on/demandware.static/-/Sites-Weider-US-Library/default/dw8f3c5e6e/images/weider-logo.png',
      tag: 'Global Fitness Brand',
      fallbackImage: 'https://via.placeholder.com/150x80/9B59B6/white?text=WEIDER'
    },
    { 
      name: 'DSM', 
      image: 'https://www.dsm.com/content/dam/dsm/corporate/en_US/logos/dsm-logo-blue.svg',
      tag: 'Science Based Nutrition',
      fallbackImage: 'https://via.placeholder.com/150x80/9B59B6/white?text=DSM'
    }
  ];

  return React.createElement('section', { 
    id: 'testimonials', 
    className: 'py-5', 
    style: { background: 'linear-gradient(135deg, #f8f9fa, #fff)' } 
  },
    React.createElement('div', { className: 'container' },
      // Section Header
      React.createElement('div', { className: 'text-center mb-5' },
        React.createElement('span', { className: 'badge bg-warning text-dark px-4 py-2 rounded-pill mb-3' },
          React.createElement('i', { className: 'fas fa-star me-2' }), ' SUCCESS STORIES'
        ),
        React.createElement('h2', { className: 'display-4 fw-bold mb-3' }, '⭐ TESTIMONIES ⭐'),
        React.createElement('div', { className: 'gold-divider' }),
        React.createElement('p', { className: 'text-muted fs-5' }, 'Success stories from Kenya & Gulf region')
      ),

      // Testimonials Grid
      React.createElement('div', { className: 'row justify-content-center g-4 mb-5' },
        testimonials.map(function(testimonial, idx) {
          return React.createElement('div', { key: idx, className: 'col-lg-4 col-md-6' },
            React.createElement('div', { 
              className: 'card h-100 border-0 rounded-4 shadow-lg overflow-hidden', 
              style: { animationDelay: idx * 0.1 + 's' } 
            },
              // Quote Icon
              React.createElement('div', { className: 'position-absolute top-0 start-0 p-3 opacity-25' },
                React.createElement('i', { className: 'fas fa-quote-left fs-1 text-warning' })
              ),
              
              React.createElement('div', { className: 'card-body text-center p-4' },
                // Avatar
                React.createElement('div', { className: 'position-relative d-inline-block mb-3' },
                  React.createElement('img', { 
                    src: testimonial.image, 
                    alt: testimonial.name,
                    className: 'rounded-circle border-4 border-warning shadow-lg',
                    style: { width: '100px', height: '100px', objectFit: 'cover' }
                  }),
                  React.createElement('div', { className: 'position-absolute bottom-0 end-0 bg-success rounded-circle p-1 border-2 border-white' },
                    React.createElement('i', { className: 'fas fa-check-circle text-white small' })
                  )
                ),

                // Rating Stars
                React.createElement('div', { className: 'mb-2' },
                  Array(5).fill().map(function(_, i) {
                    return React.createElement('i', { key: i, className: 'fas fa-star text-warning mx-0' });
                  })
                ),

                // Quote
                React.createElement('p', { className: 'fs-5 fst-italic text-muted mb-3' }, '"' + testimonial.quote + '"'),

                // Name & Role
                React.createElement('h4', { className: 'fw-bold mb-1' }, testimonial.name),
                React.createElement('p', { className: 'text-warning fw-semibold mb-2' }, testimonial.role),
                
                // Achievement Badge
                React.createElement('span', { className: 'd-inline-block bg-warning bg-opacity-10 px-3 py-1 rounded-pill small' },
                  React.createElement('i', { className: 'fas fa-trophy me-1' }), ' ', testimonial.achievement
                )
              )
            )
          );
        })
      ),

      // Partners Section with Real Pictures
      React.createElement('div', { className: 'text-center mt-5 mb-4' },
        React.createElement('span', { className: 'badge bg-warning text-dark px-4 py-2 rounded-pill mb-3' },
          React.createElement('i', { className: 'fas fa-handshake me-2' }), ' TRUSTED BY'
        ),
        React.createElement('h3', { className: 'display-5 fw-bold mb-3' }, '🤝 OUR PARTNERS'),
        React.createElement('div', { className: 'gold-divider' })
      ),

      React.createElement('div', { className: 'row justify-content-center g-4 mb-5' },
        partners.map(function(partner, idx) {
          return React.createElement('div', { key: idx, className: 'col-lg-2 col-md-3 col-6' },
            React.createElement('div', { 
              className: 'text-center p-3 rounded-4 shadow-sm bg-white', 
              style: { transition: 'all 0.3s ease', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
              onMouseEnter: function(e) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
              },
              onMouseLeave: function(e) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
              }
            },
              // Partner Logo Image
              React.createElement('div', { 
                className: 'd-flex align-items-center justify-content-center mb-2',
                style: { height: '70px', width: '100%' }
              },
                React.createElement('img', { 
                  src: partner.image, 
                  alt: partner.name,
                  style: { maxWidth: '100%', maxHeight: '60px', objectFit: 'contain' },
                  onError: function(e) {
                    e.target.onerror = null;
                    e.target.src = partner.fallbackImage || 'https://via.placeholder.com/120x60/D4AF37/white?text=' + partner.name;
                  }
                })
              ),
              React.createElement('h6', { className: 'fw-bold mb-0', style: { fontSize: '0.9rem' } }, partner.name),
              React.createElement('p', { className: 'text-muted small mb-0', style: { fontSize: '0.7rem' } }, partner.tag)
            )
          );
        })
      ),

      // Leadership Award Section
      React.createElement('div', { className: 'row justify-content-center mt-4' },
        React.createElement('div', { className: 'col-lg-10' },
          React.createElement('div', { 
            className: 'text-center p-5 rounded-4', 
            style: { 
              background: 'linear-gradient(135deg, #FFF8E7, #FFF3E0)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            } 
          },
            // Decorative background
            React.createElement('div', { className: 'position-absolute top-0 start-0 w-100 h-100', style: { opacity: 0.05 } },
              React.createElement('i', { className: 'fas fa-trophy position-absolute top-0 start-0 fs-1 m-3' }),
              React.createElement('i', { className: 'fas fa-trophy position-absolute bottom-0 end-0 fs-1 m-3' })
            ),
            
            React.createElement('div', { className: 'position-relative' },
              React.createElement('div', { 
                className: 'd-inline-block p-3 rounded-circle bg-warning mb-3', 
                style: { boxShadow: '0 0 20px rgba(212,175,55,0.5)' } 
              },
                React.createElement('i', { className: 'fas fa-trophy display-4 text-white' })
              ),
              React.createElement('h2', { className: 'display-5 fw-bold mb-2' }, '🏆 EXCELLENT LEADERSHIP AWARD'),
              React.createElement('p', { className: 'fs-3 fw-semibold text-warning mb-2' }, 'PAUL BARASA'),
              React.createElement('p', { className: 'fs-5 text-dark mb-3' }, 'Congratulations for this achievement!'),
              React.createElement('a', { 
                href: '#', 
                className: 'btn btn-outline-warning rounded-pill px-4 py-2 fw-semibold',
                style: { transition: 'all 0.3s ease' },
                onMouseEnter: function(e) {
                  e.target.style.background = 'linear-gradient(135deg, #D4AF37, #B8860B)';
                  e.target.style.color = 'white';
                },
                onMouseLeave: function(e) {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#B8860B';
                }
              },
                React.createElement('i', { className: 'fas fa-external-link-alt me-2' }),
                'www.betawayoutlifeproject.com'
              )
            )
          )
        )
      ),
      
      // Footer Credit - Fixed: Removed marquee and replaced with proper element
      React.createElement('div', { className: 'text-center mt-4 pt-3 border-top' },
        React.createElement('small', { className: 'text-muted' },
          'Developed by YobbyTech | Contact: 0116378188'
        )
      )
    )
  );
};

module.exports = TestimonialsPartners;