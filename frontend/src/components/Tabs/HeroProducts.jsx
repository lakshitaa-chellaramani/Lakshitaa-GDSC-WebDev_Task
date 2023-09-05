import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
const HeroProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = "https://fakestoreapi.com/products";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-screen-2xl py-6 sm:py-8 lg:py-12">
        <div class=" mb-6 flex items-end justify-between gap-4">
          <h2 class="text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 lg:text-3xl">
           All Products
          </h2>
        </div>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id}>
              {/* ... your existing code for each product ... */}
              <Link to={`/product/${product.id}`}>
              <div>
                
                  <img
                    src={product.image}
                    loading="lazy"
                    alt="Photo by Rachit Tank"
                    class="h-full w-full object-cover  transition duration-200 group-hover:scale-110"
                  />

                  <span class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    sale
                  </span>
               

                <div>
                  <a
                    href="#"
                    class="hover:gray-800 mb-1 text-gray-700  font-bold transition duration-100 lg:text-lg"
                  >
                    {product.title}
                  </a>

                  <div class="flex items-end gap-2">
                    <span class="font-bold text-cyan-500 lg:text-lg">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroProducts;