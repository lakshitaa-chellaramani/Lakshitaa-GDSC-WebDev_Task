// ProductDetail.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext"; // Import the useCart hook
import CartValue from './CartValue';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart(); // Get the cart dispatch function

  useEffect(() => {
    // Define the API URL for fetching product details based on the productId
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;

    // Fetch product data based on the productId
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

  if (!product) {
    // You can display a loading indicator or error message here
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    // Dispatch an action to add the current product to the cart
    dispatch({
      type: "ADD_TO_CART",
      payload: product,

    });
    console.log("Adding to cart:", product);

  };

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  sale
                </span>
              </div>
            </div>

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  {product.title}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  Pullover with pattern
                </h2>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    ${product.price}
                  </span>
                </div>
              </div>

              <div className="flex gap-2.5">
                <button
                  onClick={handleAddToCart}
                  className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                >
                  Add to cart
                </button>

               
              </div>

              <div className="mt-10 md:mt-16 lg:mt-20">
                <div className="mb-3 text-lg font-semibold text-gray-800">
                  Description
                </div>

                <p className="text-gray-500">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
