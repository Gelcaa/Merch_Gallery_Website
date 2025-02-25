import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import CategoryBox from "../components/CategoryBox";
import Carousel from "../components/Carousel";

const Home = () => {
  const navigate = useNavigate();

  const handleGoToProducts = () => {
    navigate("/products");
  };

  const categories = [
    {
      id: 1,
      imageSrc: "image1.jpg",
      title: "Category 1",
      className: "col-span-1 row-span-1 ",
    },
    {
      id: 3,
      imageSrc: "image2.jpg",
      title: "Category 2",
      className: "sm:col-span-1 col-span-2 row-span-1",
    },
    {
      id: 2,
      imageSrc: "image5.jpg",
      title: "Category 5",
      className: "col-span-1 row-span-1",
    },
    {
      id: 4,
      imageSrc: "image3.jpg",
      title: "Category 3",
      className: "col-span-1 row-span-1",
    },
    {
      id: 5,
      imageSrc: "image4.jpg",
      title: "Category 4",
      className: "sm: col-span-2 col-span-1 row-span-1",
    },
  ];

  const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.png"];

  return (
    <div className="relative">
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
      <div className="text-center py-12">
        <h1 className="font-lora text-black text-4xl md:text-5xl lg:text-6xl font-bold pt-8 pb-3">
          Categories
        </h1>
        {/* <Button onClick={handleGoToProducts} variant="default" size="md">
          View All
        </Button> */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 w-full max-w-5xl mx-auto p-4 mt-4 mb-12">
          {categories.map((category) => (
            <CategoryBox
              key={category.id}
              imageSrc={category.imageSrc}
              title={category.title}
              className={category.className}
            />
          ))}
        </div>
      </div>

      <div className="h-full bg-gray-200 pt-12">
        <div className="text-center h-screen">
          <h1 className="font-lora text-black text-4xl md:text-5xl lg:text-6xl font-bold pt-8 pb-3">
            Scholars Exclusive
          </h1>
          <div className="flex justify-center items-center p-4 m-4">
            <Carousel images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
