// components/ProductCard.tsx
import React from "react";
import { Product } from "../constants/products";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="aspect-square bg-gray-300 "></div>
    <div className="p-3 md:p-4">
      <h3 className="text-xs line-clamp-2 sm:text-sm md:text-base text-gray-700">
        {product.name}
      </h3>
      <p className="text-sm font-bold mt-1 md:text-lg md:mt-2">
        ₱{product.price.toFixed(2)}
      </p>
    </div>
  </div>
);

export default ProductCard;
