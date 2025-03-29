// components/ProductCard.tsx
import React from "react";
import { Product } from "../constants/products";

type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => (
  <div
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    onClick={onClick}
  >
    <div className="aspect-square bg-gray-300 ">
      {" "}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-3 md:p-4">
      <h3 className="text-xs line-clamp-2 sm:text-sm md:text-base text-gray-700">
        {product.name}
      </h3>
      <p className="text-sm font-bold mt-1 md:text-lg md:mt-2">
        {product.priceRange
          ? `₱${product.priceRange[0]} - ₱${product.priceRange[1]}`
          : `₱${product.price?.toFixed(2)}`}
      </p>
    </div>
  </div>
);

export default ProductCard;
