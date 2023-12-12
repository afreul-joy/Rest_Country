import React from "react";
import ban from "/src/assets/ban.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-8">
      <div className="max-w-md text-white">
        <h1 className="text-4xl font-bold mb-4">Explore Countries</h1>
        <p className="text-lg">
          Discover the beauty and diversity of countries around the world. Learn
          about their cultures, traditions, and more.
        </p>
      </div>
      <div className="flex-shrink-0 relative overflow-hidden">
        <img
          src={ban}
          alt="Banner"
          className="w-64 h-auto transform hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Banner;
