import React, { useState } from "react";
import products from "../constants/products";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-[#f5f2e6] min-h-screen px-4 py-6 md:p-8 lg:px-16 mt-16">
      <h1
        className="text-2xl font-bold text-center 
                    md:text-3xl 
                    lg:text-4xl"
      >
        Products
      </h1>

      <p
        className="text-center text-gray-600 mt-2 text-xs 
                  sm:text-sm sm:m-3
                  md:max-w-2xl md:mx-auto md:m-3 md:text-base"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div
        className="grid grid-cols-1 gap-4 mt-8 
                     sm:grid-cols-2 
                     lg:grid-cols-3 
                     xl:max-w-6xl xl:mx-auto
                     sm:gap-5 
                     md:gap-6"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
