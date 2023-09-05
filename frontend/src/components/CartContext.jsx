import React, { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update its quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;

        return { ...state, items: updatedItems };
      } else {
        // If the item is not in the cart, add it
        return { ...state, items: [...state.items, action.payload] };
      }

    case 'REMOVE_FROM_CART':
      // Remove the item from the cart
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, items: updatedItems };

    case 'CLEAR_CART':
      // Clear all items from the cart
      return { ...state, items: [] };

    case 'LOAD_CART':
      // Load cart data from local storage
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    // Load cart data from local storage when the app initializes
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: savedCart });
    }
  }, []);

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
