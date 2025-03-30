import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryBox from "./CategoryBox";
import shirts from "../assets/images/categories/shirts.png";
import pins from "../assets/images/categories/pins.png";
import lanyards from "../assets/images/categories/lanyards.png";
import cap from "../assets/images/categories/Cap.png";
import totebag from "../assets/images/categories/totebag.png";

const categories = [
  {
    id: 1,
    imageSrc: lanyards,
    title: "Lanyards",
    className: "col-span-1 row-span-1 ",
  },
  {
    id: 2,
    imageSrc: totebag,
    title: "Totebags",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    imageSrc: pins,
    title: "Pins",
    className: "sm:col-span-1 col-span-2 row-span-1",
  },
  {
    id: 4,
    imageSrc: cap,
    title: "Cap",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    imageSrc: shirts,
    title: "T-Shirts",
    className: "sm:col-span-2 col-span-1 row-span-1",
  },
];

const Categories: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category}`); // Redirect with category as query param
  };
  return (
    <div className="text-center py-12 bg-[#f5f2e6]">
      <h1 className="font-lora text-black text-4xl md:text-5xl lg:text-6xl font-bold pt-8 pb-3">
        Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-auto gap-4 w-full max-w-5xl mx-auto p-4 mt-4 mb-12">
        {categories.map((category) => (
          <CategoryBox
            key={category.id}
            imageSrc={category.imageSrc}
            title={category.title}
            className={`${category.className} cursor-pointer`}
            onClick={() => handleCategoryClick(category.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
