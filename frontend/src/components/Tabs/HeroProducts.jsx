import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const HeroProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";
    
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
      <div className="mx-auto max-w-screen-xl px-10 py-6 sm:py-8 lg:py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 lg:text-3xl">
            All Products
          </h2>
        </div>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className="group relative flex flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                  <img
                    src={product.image}
                    loading="lazy"
                    alt="Photo by Rachit Tank"
                    className="h-48 w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    sale
                  </span>

                  <div className="p-4">
                    <a
                      href="#"
                      className="hover:gray-800 mb-1 text-gray-700 font-bold transition duration-100"
                    >
                      {product.title}
                    </a>

                    <div className="flex items-end gap-2">
                      <span className="font-bold text-cyan-500">
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
