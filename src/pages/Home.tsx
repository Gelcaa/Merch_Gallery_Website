import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import CategoryBox from "../components/CategoryBox";

const Home = () => {
  const navigate = useNavigate();

  const handleGoToProducts = () => {
    navigate("/products");
  };
  return (
    <div className="relative">
      {/* First full-screen section with background image */}
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center bg-black bg-opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('src/assets/images/home_bg.png')",
        }}
      >
        <h1 className="font-lora text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          CO-SHAPEE
        </h1>
        <div>
          <Button onClick={handleGoToProducts} variant="default" size="md">
            View Products
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-200 py-12">
        <h2 className="text-black text-3xl  font-bold mb-6 text-center">
          Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 w-full max-w-screen-xl mx-auto">
          <CategoryBox
            imageSrc="src/assets/images/home_bg.png"
            title="Category 1"
          />
          <CategoryBox
            imageSrc="src/assets/images/home_bg.png"
            title="Category 2"
          />
          <CategoryBox
            imageSrc="src/assets/images/home_bg.png"
            title="Category 3"
          />
          <CategoryBox
            imageSrc="src/assets/images/home_bg.png"
            title="Category 4"
          />
        </div>
      </div>

      <div className="h-full bg-gray-200 py-12">
        <h1>ANOTHER SECTION</h1>
      </div>
    </div>
  );
};

export default Home;
