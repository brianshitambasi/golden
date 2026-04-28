// src/components/Cart.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleQuantityChange = (id, newQty) => {
    if (newQty < 1) return;
    updateQuantity(id, newQty);
  };

  const handleCheckout = () => {
    onClose();          // close the cart drawer
    navigate('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
        style={{ zIndex: 1040 }}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className="position-fixed top-0 end-0 h-100 bg-white shadow-lg"
        style={{
          width: '400px',
          maxWidth: '90vw',
          zIndex: 1050,
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <h5 className="m-0">
            <i className="fas fa-shopping-cart me-2"></i>Your Cart
            <span className="badge bg-warning text-dark ms-2">{cart.totalQuantity}</span>
          </h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        {/* Cart items */}
        <div className="flex-grow-1 overflow-auto p-3">
          {cart.items.length === 0 ? (
            <div className="text-center text-muted py-5">
              <i className="fas fa-box-open fa-3x mb-3"></i>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.items.map((item) => (
              <div key={item.id} className="d-flex mb-3 pb-3 border-bottom">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <div className="ms-3 flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-1">{item.name}</h6>
                    <button
                      className="btn btn-sm text-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                  <div className="text-success fw-bold">KES {item.price.toLocaleString()}</div>
                  <div className="d-flex align-items-center mt-2">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-2" style={{ width: '30px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <span className="ms-3 text-muted small">
                      Total: KES {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className="border-top p-3">
            <div className="d-flex justify-content-between mb-3">
              <strong>Total:</strong>
              <strong className="text-success fs-5">KES {cart.totalAmount.toLocaleString()}</strong>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-warning" onClick={handleCheckout}>
                <i className="fas fa-credit-card me-2"></i>Checkout
              </button>
              <button className="btn btn-outline-secondary" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}