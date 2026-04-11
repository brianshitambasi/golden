// ==================== src/components/ProductsSection.jsx ====================
const React = require('react');

const ProductsSection = () => {
  const products = [
    { icon: 'fa-pills', name: 'Nutritional Supplements' },
    { icon: 'fa-mug-hot', name: 'Nutritional Beverages' },
    { icon: 'fa-weight-scale', name: 'Weight Loss Products' },
    { icon: 'fa-spa', name: 'Personal Care Products' },
    { icon: 'fa-child', name: "Children's Program" },
  ];

  return React.createElement('section', { id: 'products', className: 'py-20 bg-white' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement('h2', { className: 'text-4xl md:text-5xl font-bold text-center mb-4' },
        'OUR ', React.createElement('span', { className: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600' }, 'PRODUCTS')
      ),
      React.createElement('div', { className: 'grid grid-cols-2 md:grid-cols-5 gap-6 mt-10' },
        products.map((product, idx) =>
          React.createElement('div', { key: idx, className: 'text-center p-5 rounded-xl hover:bg-amber-50 transition' },
            React.createElement('div', { className: 'w-20 h-20 mx-auto bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl flex items-center justify-center mb-4' },
              React.createElement('i', { className: `fas ${product.icon} text-3xl text-yellow-700` })
            ),
            React.createElement('p', { className: 'font-semibold text-gray-800' }, product.name)
          )
        )
      ),
      React.createElement('div', { className: 'mt-12 max-w-2xl mx-auto bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl text-center border-2 border-red-200' },
        React.createElement('p', { className: 'text-2xl font-bold text-red-700 flex items-center justify-center gap-2' },
          React.createElement('i', { className: 'fas fa-fire-flame-curved' }), ' WEIGHT LOSS PRODUCT: BURN SLIM'
        ),
        React.createElement('p', { className: 'text-lg text-gray-700 mt-2' }, 'by ', React.createElement('strong', { className: 'text-red-600' }, 'WEIDER')),
        React.createElement('p', { className: 'text-sm text-gray-500 mt-1' }, 'BURN • SLIM — Accelerate your transformation journey')
      )
    )
  );
};

module.exports = ProductsSection;