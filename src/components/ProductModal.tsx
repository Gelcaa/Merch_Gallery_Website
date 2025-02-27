import React from "react";
import { Product } from "../constants/products";

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-2 sm:mx-0">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-xl sm:text-2xl bg-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shadow-sm hover:bg-gray-100"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden max-h-64 md:max-h-none">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-500 uppercase text-xs sm:text-sm">
                {product.category}
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-green-700">
                ₱{product.price.toFixed(2)}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                {product.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
