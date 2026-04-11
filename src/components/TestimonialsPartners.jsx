// ==================== src/components/TestimonialsPartners.jsx ====================
const React = require('react');

const TestimonialsPartners = () => {
  return React.createElement('section', { id: 'testimonials', className: 'py-20 bg-gray-100' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement('h2', { className: 'text-4xl md:text-5xl font-bold text-center mb-4' }, 
        '⭐ TESTIMONIES ⭐'
      ),
      React.createElement('p', { className: 'text-center text-gray-600 mb-12' }, 
        'Success stories from Kenya & Gulf region'
      ),
      
      // Testimonials Grid
      React.createElement('div', { className: 'grid md:grid-cols-3 gap-8' },
        // Testimonial 1
        React.createElement('div', { className: 'bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow' },
          React.createElement('img', { 
            src: 'https://randomuser.me/api/portraits/women/68.jpg', 
            className: 'w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400' 
          }),
          React.createElement('h3', { className: 'text-xl font-bold text-gray-800' }, 'DINNA NEKESA'),
          React.createElement('p', { className: 'text-yellow-600 font-semibold' }, 'Trek Qualifier'),
          React.createElement('p', { className: 'italic text-gray-600 mt-2' }, '"Tamarind Trees — Resilience!"'),
          React.createElement('div', { className: 'flex justify-center mt-3 text-yellow-500' },
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' })
          )
        ),
        
        // Testimonial 2
        React.createElement('div', { className: 'bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow' },
          React.createElement('img', { 
            src: 'https://randomuser.me/api/portraits/men/75.jpg', 
            className: 'w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400' 
          }),
          React.createElement('h3', { className: 'text-xl font-bold text-gray-800' }, 'LEADER SILAS OKOTH'),
          React.createElement('p', { className: 'text-yellow-600 font-semibold' }, 'Leadership Award Winner'),
          React.createElement('p', { className: 'italic text-gray-600 mt-2' }, '"Excellent Leadership Award"'),
          React.createElement('div', { className: 'flex justify-center mt-3 text-yellow-500' },
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' })
          )
        ),
        
        // Testimonial 3
        React.createElement('div', { className: 'bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow' },
          React.createElement('img', { 
            src: 'https://randomuser.me/api/portraits/men/32.jpg', 
            className: 'w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400' 
          }),
          React.createElement('h3', { className: 'text-xl font-bold text-gray-800' }, 'PAUL BARASA'),
          React.createElement('p', { className: 'text-yellow-600 font-semibold' }, 'CEO Golden Dreamers'),
          React.createElement('p', { className: 'italic text-gray-600 mt-2' }, '"Building leaders that last"'),
          React.createElement('div', { className: 'flex justify-center mt-3 text-yellow-500' },
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' }),
            React.createElement('i', { className: 'fas fa-star' })
          )
        )
      ),
      
      // Partners Section
      React.createElement('div', { className: 'mt-16 bg-white p-8 rounded-2xl shadow-lg' },
        React.createElement('h3', { className: 'text-2xl font-bold text-center mb-6' }, '🤝 OUR PARTNERS'),
        React.createElement('div', { className: 'flex flex-wrap justify-center gap-8 items-center' },
          React.createElement('div', { className: 'text-center' },
            React.createElement('i', { className: 'fas fa-university text-3xl text-blue-700' }),
            React.createElement('p', { className: 'font-semibold mt-1' }, 'EcoBank'),
            React.createElement('p', { className: 'text-xs text-gray-500' }, 'The Pan African Bank')
          ),
          React.createElement('div', { className: 'text-center' },
            React.createElement('i', { className: 'fas fa-building text-3xl text-blue-600' }),
            React.createElement('p', { className: 'font-semibold mt-1' }, 'Stanbic Bank'),
            React.createElement('p', { className: 'text-xs text-gray-500' }, 'A member of Standard Bank Group')
          ),
          React.createElement('div', { className: 'text-center' },
            React.createElement('i', { className: 'fas fa-leaf text-3xl text-green-600' }),
            React.createElement('p', { className: 'font-semibold mt-1' }, "Nature's Way"),
            React.createElement('p', { className: 'text-xs text-gray-500' }, 'Vegetarian V-CAPS')
          ),
          React.createElement('div', { className: 'text-center' },
            React.createElement('i', { className: 'fas fa-flask text-3xl text-purple-600' }),
            React.createElement('p', { className: 'font-semibold mt-1' }, 'DSM • Weider'),
            React.createElement('p', { className: 'text-xs text-gray-500' }, 'resVida')
          )
        )
      ),
      
      // Leadership Award Section
      React.createElement('div', { className: 'mt-10 text-center bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl' },
        React.createElement('i', { className: 'fas fa-trophy text-4xl text-yellow-600 mb-2' }),
        React.createElement('p', { className: 'text-2xl font-bold text-gray-800' }, '🏆 EXCELLENT LEADERSHIP AWARD'),
        React.createElement('p', { className: 'text-xl text-gray-800 mt-2' }, 'PAUL BARASA — Congratulations for this achievement!'),
        React.createElement('a', { 
          href: '#', 
          className: 'text-yellow-700 text-sm mt-2 inline-block hover:underline' 
        }, 'www.betawayoutlifeproject.com')
      )
    )
  );
};

// IMPORTANT: Make sure this is the correct export
module.exports = TestimonialsPartners;