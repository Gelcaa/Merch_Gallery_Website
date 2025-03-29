import React from "react";

interface CategoryBoxProps {
  imageSrc: string;
  title: string;
  className?: string;
  onClick?: () => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  imageSrc,
  title,
  className,
  onClick,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 md:h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryBox;
