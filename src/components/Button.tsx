import React from "react";

const Button = ({ children, variant = "default", size = "md", onClick }) => {
  const baseStyle =
    "border rounded-full px-4 py-2 font-bold transition-all duration-300";

  const variantStyles = {
    default:
      "bg-transparent text-white border-white hover:bg-white hover:text-black",
  };

  const sizedStyles = {
    sm: "text-sm py-1 px-3",
    md: "text-md py-2 px-4",
    lg: "text-lg py-3 px-5",
  };

  const buttonClass = `${baseStyle} ${variantStyles[variant]} ${sizedStyles[size]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
