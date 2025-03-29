import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const categories = ["ALL", "T-Shirts", "Totebags", "Cap", "Pins", "Lanyards"];

type CategoryFilterProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const navigate = useNavigate(); // Add navigation

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    navigate(`/products?category=${category}`); // Update URL
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 xs:gap-2 sm:gap-4 md:gap-4 lg:gap-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "primary" : "outline"}
          size="lg"
          onClick={() => handleCategoryClick(category)} // Use navigation
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
