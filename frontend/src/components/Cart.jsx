import React from 'react';
import { useCart } from './CartContext'; 

const Cart = () => {
  const { state, dispatch } = useCart(); 

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

 

  
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Your Cart</h2>
          </div>

          {state.items.map((item) => (
            <div key={item.id} className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
              <div className="py-5 sm:py-8">
                <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                  <div className="sm:-my-2.5">
                    <a href="#" className="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40">
                      <img src={item.image} loading="lazy" alt={item.title} className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{item.title}</a>

                      <span className="block text-gray-500">Size: {item.size}</span>
                      <span className="block text-gray-500">Color: {item.color}</span>
                    </div>

                    <div>
                      <span className="mb-1 block font-bold text-gray-800 md:text-lg">${item.price}</span>

                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        In stock
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                    <div className="flex flex-col items-start gap-2">
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div  className="text-center text-xl font-bold text-gray-800 mt-4">
              Total Price:  ${item.price}
            </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
