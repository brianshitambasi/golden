// ==================== src/components/Footer.jsx ====================
const React = require('react');

const Footer = () => {
  return React.createElement('footer', { className: 'bg-gray-900 text-white py-12' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center' },
      React.createElement('div', { className: 'flex justify-center items-center gap-2 mb-4' },
        React.createElement('i', { className: 'fas fa-crown text-3xl text-yellow-500' }),
        React.createElement('span', { className: 'text-2xl font-bold' }, 'GOLDEN ', React.createElement('span', { className: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500' }, 'DREAMERS'))
      ),
      React.createElement('p', { className: 'text-gray-400' }, '© 2025 Golden Dreamers International. All rights reserved.'),
      React.createElement('div', { className: 'flex justify-center space-x-6 mt-4' },
        React.createElement('i', { className: 'fab fa-facebook-f text-xl hover:text-yellow-500 cursor-pointer' }),
        React.createElement('i', { className: 'fab fa-instagram text-xl hover:text-yellow-500 cursor-pointer' }),
        React.createElement('i', { className: 'fab fa-twitter text-xl hover:text-yellow-500 cursor-pointer' })
      ),
      React.createElement('p', { className: 'text-xs text-gray-600 mt-6' }, '"The key to getting success is getting started" — CFG INTERNATIONAL')
    )
  );
};

module.exports = Footer;