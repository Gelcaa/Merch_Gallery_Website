import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // Import for reading query params
import products, { Product } from "../constants/products";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import ProductModal from "../components/ProductModal";

const ProductPage = () => {
  const [searchParams] = useSearchParams(); // Get query params
  const categoryFromURL = searchParams.get("category") || "ALL"; // Get category or default to "ALL"

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setSelectedCategory(categoryFromURL); // Update selected category when URL changes
  }, [categoryFromURL]);

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-[#f5f2e6] min-h-screen px-4 py-6 md:p-8 lg:px-16 mt-16">
      <h1 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">
        Products
      </h1>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-6xl xl:mx-auto sm:gap-5 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductPage;
