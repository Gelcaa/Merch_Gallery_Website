import React from "react";

const CategoryBox = ({ imageSrc, title, className }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
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
