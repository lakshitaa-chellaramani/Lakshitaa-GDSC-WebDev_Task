import React, { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        const newState = { ...state, items: updatedItems };
        saveCartToLocalStorage(newState); 
        return newState;
      } else {
        const newState = { ...state, items: [...state.items, action.payload] };
        saveCartToLocalStorage(newState); 
        return newState;
      }

    case 'REMOVE_FROM_CART':
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      const newState = { ...state, items: updatedItems };
      saveCartToLocalStorage(newState); 
      return newState;

    case 'CLEAR_CART':
      const clearedState = { ...state, items: [] };
      saveCartToLocalStorage(clearedState); 
      return clearedState;

    case 'LOAD_CART':
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

const saveCartToLocalStorage = (cartData) => {
  localStorage.setItem('cart', JSON.stringify(cartData.items));
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: savedCart });
    }
  }, []);

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
