import React, { useState } from 'react';

const CartInputBox = () => {
  const [quantity, setQuantity] = useState('');

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;

    // Ensure the entered value is a positive integer
    if (/^[1-9]\d*$/.test(newQuantity)) {
      setQuantity(newQuantity);
    } else {
      // If it's not a valid positive integer, keep the input empty
      setQuantity('');
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <label className="font-bold">Quantity:</label>
      <input
        type="text"
        value={quantity}
        onChange={handleQuantityChange}
        placeholder="Enter quantity"
        className="w-16 h-10 px-2 py-1 border border-gray-300 rounded-md"
      />
      <button
        onClick={() => setQuantity((prev) => String(parseInt(prev, 10) + 1))}
        className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        +
      </button>
      <button
        onClick={() => setQuantity((prev) => String(Math.max(parseInt(prev, 10) - 1, 0)))}
        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        -
      </button>
    </div>
  );
};

export default CartInputBox;
