// ==================== src/components/PackagesSection.jsx ====================
const React = require('react');

const PackagesSection = () => {
  const packages = [
    { name: 'GLOBAL', accounts: 1, cost: '29,888', daily: '96,000', color: 'from-blue-50 to-blue-100' },
    { name: 'NEOVERSE', accounts: 3, cost: '42,000', daily: '288,000', color: 'from-green-50 to-green-100' },
    { name: 'TECHNOVERSE', accounts: 7, cost: '123,900', daily: '672,000', color: 'from-purple-50 to-purple-100' },
    { name: 'DIGIVERSE', accounts: 15, cost: '254,200', daily: '1,444,000', color: 'from-orange-50 to-orange-100' },
    { name: 'MEGAVERSE', accounts: 31, cost: '505,100', daily: '2,976,000', color: 'from-red-50 to-red-100' },
  ];

  return React.createElement('section', { id: 'packages', className: 'py-20 bg-white' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement('div', { className: 'text-center mb-4' },
        React.createElement('i', { className: 'fas fa-gem text-4xl text-yellow-600 mb-2' }),
        React.createElement('h2', { className: 'text-4xl md:text-5xl font-bold' },
          'BASIC START UP ', React.createElement('span', { className: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600' }, 'PACKAGE')
        )
      ),
      React.createElement('div', { className: 'grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10' },
        packages.map((pkg, idx) =>
          React.createElement('div', { key: idx, className: `bg-gradient-to-br ${pkg.color} rounded-2xl p-5 text-center border-2 border-yellow-300` },
            React.createElement('h3', { className: 'text-xl font-extrabold text-yellow-800' }, pkg.name),
            React.createElement('p', { className: 'text-sm text-gray-500 mt-1' }, `${pkg.accounts} ACCOUNTS`),
            React.createElement('div', { className: 'my-4' },
              React.createElement('p', { className: 'text-xs text-gray-500' }, 'Investment'),
              React.createElement('p', { className: 'text-2xl font-bold text-gray-800' }, `KES ${pkg.cost}`)
            ),
            React.createElement('div', { className: 'bg-white/50 rounded-lg p-2 mb-4' },
              React.createElement('p', { className: 'text-xs text-green-700 font-semibold' }, 'Daily Income Potential'),
              React.createElement('p', { className: 'text-lg font-bold text-green-600' }, `KES ${pkg.daily}`)
            ),
            React.createElement('button', { className: 'w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition' },
              'Select Plan ', React.createElement('i', { className: 'fas fa-arrow-right ml-1' })
            )
          )
        )
      ),
      React.createElement('div', { className: 'mt-12 bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl text-center' },
        React.createElement('i', { className: 'fas fa-bullseye text-3xl text-yellow-700 mb-2' }),
        React.createElement('p', { className: 'text-xl font-bold text-gray-800' }, 'MISSION: TO IMPACT 1,000,000 LIVES POSITIVELY THROUGH OUR SYSTEMS BY 2025.')
      )
    )
  );
};

module.exports = PackagesSection;