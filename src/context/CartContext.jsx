// src/context/CartContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newItems;
      if (existingIndex >= 0) {
        newItems = state.items.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload }];
      }
      const totalQuantity = newItems.reduce((sum, i) => sum + i.quantity, 0);
      const totalAmount = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
      return { items: newItems, totalQuantity, totalAmount };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter((item) => item.id !== action.payload.id);
      const totalQuantity = newItems.reduce((sum, i) => sum + i.quantity, 0);
      const totalAmount = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
      return { items: newItems, totalQuantity, totalAmount };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) return state;
      const newItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      const totalQuantity = newItems.reduce((sum, i) => sum + i.quantity, 0);
      const totalAmount = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
      return { items: newItems, totalQuantity, totalAmount };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: Number(product.dp), // ensure numeric
        image: product.image,
        quantity,
      },
    });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}