import React from "react";
import Carousel from "./Carousel";

interface ScholarsExclusiveProps {
  images: string[];
}

const ScholarsExclusive: React.FC<ScholarsExclusiveProps> = ({ images }) => {
  return (
    <div className="h-full bg-[#f5f2e6] pt-12">
      <div className="text-center h-screen">
        <h1 className="font-lora text-black text-4xl md:text-5xl lg:text-6xl font-bold pt-8 pb-3">
          Scholars' Exclusive
        </h1>
        <div className="flex justify-center items-center p-4 m-4">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default ScholarsExclusive;
