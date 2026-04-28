// src/components/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [showPhonePrompt, setShowPhonePrompt] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeTab, setActiveTab] = useState('checkout');

  // Redirect if cart empty
  if (cart.items.length === 0 && !processing && activeTab === 'checkout') {
    navigate('/products');
    return null;
  }

  const deliveryFee = 250;
  const subtotal = cart.totalAmount;
  const total = subtotal + deliveryFee;

  // Real STK Push – calls your backend (sandbox mode)
  const initiateSTKPush = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert('Please enter a valid phone number (e.g., 0712345678)');
      return;
    }

    setProcessing(true);
    setShowPhonePrompt(false);
    setPaymentStatus('pending');

    try {
      const response = await fetch('https://golden-2-m0cs.onrender.com/api/mpesa/stkpush', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          amount: total,
          accountReference: 'GoldenDreamers',
          transactionDesc: `Order ${cart.items.length} items`
        })
      });

      const data = await response.json();

      if (data.success && data.checkoutRequestId) {
        const checkoutId = data.checkoutRequestId;
        // Poll for payment status every second, max 30 seconds
        let attempts = 0;
        const maxAttempts = 30;
        const interval = setInterval(async () => {
          attempts++;
          try {
            const statusRes = await fetch(`https://golden-2-m0cs.onrender.com/api/order/status/${checkoutId}`);
            const statusData = await statusRes.json();

            if (statusData.exists && statusData.status === 'completed') {
              clearInterval(interval);
              setPaymentStatus('success');
              clearCart();
              setTimeout(() => navigate('/'), 3000);
            } else if (statusData.exists && statusData.status === 'failed') {
              clearInterval(interval);
              setPaymentStatus('error');
              setProcessing(false);
              setShowPhonePrompt(true);
              alert('Payment failed: ' + (statusData.details?.resultDesc || 'Unknown error'));
            } else if (attempts >= maxAttempts) {
              clearInterval(interval);
              setPaymentStatus('error');
              setProcessing(false);
              setShowPhonePrompt(true);
              alert('Payment timed out. Please check your M-Pesa statement.');
            }
          } catch (err) {
            console.error('Polling error:', err);
          }
        }, 1000);
      } else {
        setPaymentStatus('error');
        setProcessing(false);
        setShowPhonePrompt(true);
        alert('STK Push request failed: ' + (data.error?.errorMessage || 'Unknown error'));
      }
    } catch (error) {
      console.error('STK Push error:', error);
      setPaymentStatus('error');
      setProcessing(false);
      setShowPhonePrompt(true);
      alert('Cannot connect to payment server. Make sure backend is running on port 5000');
    }
  };

  const handleCheckout = () => setShowPhonePrompt(true);

  // ----- Kilimall‑style My Orders sidebar -----
  const MyOrders = () => (
    <div className="bg-white rounded-4 shadow-sm p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">My Orders</h5>
        <button className="btn btn-link text-warning p-0">View All</button>
      </div>
      <div className="d-flex gap-3 border-bottom pb-2 mb-4">
        {['Unpaid', 'To be Shipped', 'Shipped', 'To be Reviewed', 'Return/Refund'].map((tab) => (
          <button key={tab} className="btn btn-sm text-muted" style={{ fontSize: '0.85rem' }}>
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-warning bg-opacity-10 rounded-3 p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <small className="text-muted">Worth Ksh 15K</small>
            <h6 className="mb-0 fw-bold">Win Home Gift Box!</h6>
            <small className="text-muted">Sponsored by Smartrahalfe</small>
          </div>
          <button className="btn btn-sm btn-outline-warning rounded-pill">Check More &gt;</button>
        </div>
      </div>
      <div className="mb-4">
        <h6 className="fw-bold mb-3">My Assets</h6>
        <div className="d-flex gap-4">
          <div className="text-center">
            <div className="bg-light rounded-circle p-2 mb-1" style={{ width: '45px', height: '45px' }}>
              <i className="fas fa-wallet text-warning"></i>
            </div>
            <small>Wallet</small>
          </div>
          <div className="text-center">
            <div className="bg-light rounded-circle p-2 mb-1" style={{ width: '45px', height: '45px' }}>
              <i className="fas fa-ticket-alt text-warning"></i>
            </div>
            <small>Vouchers</small>
          </div>
          <div className="text-center">
            <div className="bg-light rounded-circle p-2 mb-1" style={{ width: '45px', height: '45px' }}>
              <i className="fas fa-coins text-warning"></i>
            </div>
            <small>Coins</small>
          </div>
        </div>
      </div>
      <div>
        <h6 className="fw-bold mb-3">My Services</h6>
        <div className="row g-3">
          {['Address Book', 'My Reviews', 'Sell on Kilimall', 'FAQ', 'Customer Service', 'Setting'].map((service) => (
            <div key={service} className="col-6">
              <button className="btn btn-outline-secondary w-100 text-start rounded-3">
                <i className="fas fa-circle-info me-2 text-warning"></i>
                <small>{service}</small>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ----- Checkout content (M‑Pesa Sandbox) -----
  const CheckoutContent = () => (
    <>
      {/* Order Summary Card */}
      <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
        <h5 className="fw-bold mb-3">Order Summary</h5>
        {cart.items.map((item) => (
          <div key={item.id} className="d-flex justify-content-between mb-2">
            <span className="text-muted">
              {item.name} <span className="fw-bold">×{item.quantity}</span>
            </span>
            <span>KES {item.price.toLocaleString()}</span>
          </div>
        ))}
        <hr />
        <div className="d-flex justify-content-between mb-2">
          <span>Subtotal</span>
          <span>KES {subtotal.toLocaleString()}</span>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <span>Delivery</span>
          <span>KES {deliveryFee.toLocaleString()}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between fs-5 fw-bold">
          <span>Total</span>
          <span className="text-success">KES {total.toLocaleString()}</span>
        </div>
      </div>

      {/* Payment Method Card - Sandbox Mode */}
      <div className="bg-white rounded-4 shadow-sm p-4">
        <h5 className="fw-bold mb-3">Payment Method</h5>
        <div className="border rounded-3 p-3 mb-3">
          <div className="d-flex align-items-center mb-2">
            <i className="fas fa-mobile-alt fa-2x text-success me-2"></i>
            <span className="fw-semibold">M-Pesa STK Push (Sandbox)</span>
            <span className="badge bg-info ms-2">Test Mode</span>
          </div>
          <p className="small text-muted mb-0">
            Money will be sent to <strong>Test Shortcode 174379</strong> – no real charges
          </p>
        </div>

        {!showPhonePrompt && !processing && !paymentStatus && (
          <button className="btn btn-warning w-100 py-3 fw-bold rounded-3" onClick={handleCheckout}>
            <i className="fas fa-credit-card me-2"></i>
            Proceed to Pay - KES {total.toLocaleString()}
          </button>
        )}

        {showPhonePrompt && !processing && (
          <div className="mt-3">
            <label className="form-label fw-semibold">
              <i className="fas fa-phone-alt text-success me-2"></i>
              M-Pesa Phone Number
            </label>
            <input
              type="tel"
              className="form-control form-control-lg rounded-3 mb-3"
              placeholder="0712345678"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p className="small text-muted mb-2">
              <i className="fas fa-info-circle me-1"></i>
              <strong>Sandbox Test Details:</strong><br />
              Phone: <strong>254708374149</strong> (use this number for testing)<br />
              PIN: <strong>123456</strong> (enter in Daraja Simulator)
            </p>
            <button className="btn btn-success w-100 py-2 fw-bold rounded-3" onClick={initiateSTKPush}>
              <i className="fas fa-paper-plane me-2"></i>
              Request STK Push
            </button>
            <small className="text-muted d-block text-center mt-2">
              You will receive a simulated prompt – complete via Daraja Simulator
            </small>
          </div>
        )}

        {processing && paymentStatus === 'pending' && (
          <div className="text-center py-4">
            <div className="spinner-border text-warning mb-3" role="status"></div>
            <h6>STK Push Sent!</h6>
            <p className="text-muted small">
              <strong>Next step:</strong> Go to <a href="https://developer.safaricom.co.ke/simulator" target="_blank" rel="noopener noreferrer">Daraja Simulator</a><br />
              Enter your CheckoutRequestID and PIN <strong>123456</strong>
            </p>
          </div>
        )}

        {paymentStatus === 'success' && (
          <div className="alert alert-success text-center py-4">
            <i className="fas fa-check-circle fa-3x mb-2"></i>
            <h5>Payment Successful!</h5>
            <p className="small mb-0">Redirecting...</p>
          </div>
        )}

        {paymentStatus === 'error' && (
          <div className="alert alert-danger text-center py-3 mt-3">
            <i className="fas fa-times-circle fa-2x mb-2"></i>
            <h6>Payment Failed</h6>
            <p className="small mb-0">Please try again</p>
          </div>
        )}
      </div>
    </>
  );

  // ----- Main layout (two columns, My Orders on left) -----
  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-lg-4">
          <MyOrders />
        </div>
        <div className="col-lg-8">
          <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
            <h4 className="fw-bold mb-0">
              <span className="golden-text">GOLDEN DREAMERS</span>
            </h4>
            <p className="text-muted small mb-0">Complete your purchase securely (Sandbox Test)</p>
          </div>
          <div className="bg-white rounded-4 shadow-sm mb-4">
            <div className="d-flex border-bottom">
              <button
                className={`btn fw-semibold py-3 px-4 rounded-0 ${activeTab === 'checkout' ? 'text-warning border-bottom border-warning border-2' : 'text-muted'}`}
                onClick={() => setActiveTab('checkout')}
              >
                <i className="fas fa-shopping-cart me-2"></i>Checkout
              </button>
              <button
                className={`btn fw-semibold py-3 px-4 rounded-0 ${activeTab === 'orders' ? 'text-warning border-bottom border-warning border-2' : 'text-muted'}`}
                onClick={() => setActiveTab('orders')}
              >
                <i className="fas fa-box me-2"></i>My Orders
              </button>
            </div>
          </div>
          {activeTab === 'checkout' && <CheckoutContent />}
          {activeTab === 'orders' && (
            <div className="bg-white rounded-4 shadow-sm p-4 text-center py-5">
              <i className="fas fa-inbox fa-3x text-muted mb-3"></i>
              <p className="text-muted">No orders yet</p>
              <button className="btn btn-warning rounded-pill px-4" onClick={() => navigate('/products')}>
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .golden-text {
          background: linear-gradient(135deg, #D4AF37, #B8860B);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .btn-warning {
          transition: all 0.3s ease;
        }
        .btn-warning:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }
      `}</style>
    </div>
  );
}