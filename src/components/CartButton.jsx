// src/components/CartButton.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

export default function CartButton() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <button
        className="btn btn-warning rounded-circle position-fixed"
        style={{ bottom: '20px', right: '20px', zIndex: 1030, width: '56px', height: '56px' }}
        onClick={() => setIsCartOpen(true)}
      >
        <i className="fas fa-shopping-cart fa-lg"></i>
        {cart.totalQuantity > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: '0.7rem' }}
          >
            {cart.totalQuantity}
          </span>
        )}
      </button>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}