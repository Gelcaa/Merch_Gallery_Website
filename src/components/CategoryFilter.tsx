import React from "react";
import Button from "./Button";

const categories = ["ALL", "T-SHIRT", "TOTEBAG", "CAP", "PINS", "LANYARD"];

type CategoryFilterProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => (
  <div className="flex flex-wrap justify-center gap-2 xs:gap-2 sm:gap-4 md:gap-4 lg:gap-4">
    {categories.map((category) => (
      <Button
        key={category}
        variant={selectedCategory === category ? "primary" : "outline"}
        size="lg"
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </Button>
    ))}
  </div>
);

export default CategoryFilter;
