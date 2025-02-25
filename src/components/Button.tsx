import React from "react";

const Button = ({ children, variant = "default", size = "md", onClick }) => {
  const baseStyle =
    "border rounded-full px-4 py-2 font-bold transition-all duration-300";

  const variantStyles = {
    default:
      "bg-transparent text-white border-white hover:bg-[#48773C] hover:text-white hover:border-transparent",
    primary: "bg-green-700 text-white border-2 border-green-700",
    outline: "border-2 border-green-700 text-green-700 hover:bg-green-50",
  };

  const sizedStyles = {
    sm: "px-3 py-1 text-xs md:px-4 md:text-sm",
    md: "px-3 py-2 text-sm md:px-6 md:text-base",
    lg: "px-3 py-1.5 text-sm xs:px-4 xs:py-2 xs:text-xs sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-md lg:px-8 lg:py-4 lg:text-md",
  };

  const buttonClass = `${baseStyle} ${variantStyles[variant]} ${sizedStyles[size]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
