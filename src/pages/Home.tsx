import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import ScholarsExclusive from "../components/scholarExclusive";
import scholarImages from "../constants/scholarImage";

const Home = () => {
  const navigate = useNavigate();

  const handleGoToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="relative">
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center bg-black bg-opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('src/assets/images/cover.png')",
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
      <Categories />
      <ScholarsExclusive images={scholarImages} />
    </div>
  );
};

export default Home;
