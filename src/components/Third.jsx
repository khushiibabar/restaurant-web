import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaStar,
  FaShareAlt,
} from "react-icons/fa";
import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import pizza1 from "../assets/pizza1.png";
import pizza2 from "../assets/pizza2.png";
import cupcake1 from "../assets/cupcake1.png";
import cupcake2 from "../assets/cupcake2.png";
import icecream1 from "../assets/icecream1.png";
import icecream2 from "../assets/icecream2.png";

const menuItems = [
  { name: "Burger", price: 25.0, icon: "🍔", image1: burger1, image2: burger2 },
  { name: "Pizza", price: 110.0, icon: "🍕", image1: pizza1, image2: pizza2 },
  {
    name: "Cupcake",
    price: 50.0,
    icon: "🧁",
    image1: cupcake1,
    image2: cupcake2,
  },
  {
    name: "Ice Cream",
    price: 20.0,
    icon: "🍦",
    image1: icecream1,
    image2: icecream2,
  },
];

const Third = () => {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-50
     to-yellow-50 py-12 px-4 sm:px-6 md:px-8 lg:px-8 flex flex-col 
     md:flex-col lg:flex-row items-center gap-8"
    >
      {/* LEFT SIDEBAR */}
      <div
        className="w-full md:w-3/4 lg:w-1/4 bg-white p-4 md:p-6 
      rounded-3xl shadow-lg border border-amber-300"
      >
        <h1
          className="text-3xl md:text-4xl font-pacifico text-amber-600 mb-4 
md:mb-6 text-center uppercase"
        >
          Our Menu
        </h1>
        <p
          className="text-base md:text-lg font-comfortaa text-amber-700 italic
 mb-4 md:mb-6 text-center"
        >
          Menu That Always <br /> Makes You Fall In Love
        </p>
        <div className="space-y-3 md:space-y-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(item)}
              className={`flex
     items-center justify-between w-full p-2 md:p-3 rounded-2xl
      transition-all duration-300 ${
        selectedItem.name === item.name
          ? "bg-amber-600 text-white"
          : "bg-white text-gray-800 border border-amber-300"
      } hover:bg-amber-500 hover:text-white shadow-md`}
            >
              <div className="flex items-center space-x-2 md:space-x-3">
                {/* ICONS CONTAINER */}
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
     rounded-full bg-gradient-to-r ${
       selectedItem.name === item.name
         ? "from-yellow-400 to-orange-500 border-4 border-white shadow-lg scale-105"
         : "from-gray-200 to-gray-300 border-2 border-transparent"
     } text-white shadow-md transition-all duration-300 transform hover:scale-110`}
                >
                  <span className="text-lg md:text-xl">{item.icon}</span>
                </div>
                <h3 className="text-sm md:text-base font-semibold">
                  {item.name}
                </h3>
              </div>
              <span className="text-sm md:text-base font-bold">
                ${item.price}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-3/4 flex flex-col items-center">
        <div className="relative flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="p-2 md:p-4 rounded-3xl">
            <img
              src={selectedItem.image1}
              alt={`${selectedItem.name} 1`}
              className="
w-full md:w-[400px] lg:w-[450px] h-auto object-cover rounded-xl"
            />
          </div>

          <div className="p-2 md:p-4 rounded-3xl">
            <img
              src={selectedItem.image2}
              alt={`${selectedItem.name} 2`}
              className="
w-full md:w-[400px] lg:w-[460px] h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        <h2
          className="text-2xl md:text-3xl font-comfortaa font-bold mt-4 
        md:mt-6 text-gray-600"
        >
          {selectedItem.name}
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-amber-600">
          ${selectedItem.price}
        </p>

        {/* NAVIGATION BUTTON */}
        <div className="mt-4 md:mt-6 flex gap-3 md:gap-4 lg:gap-6">
          <button
            onClick={() => {
              const currentIndex = menuItems.findIndex(
                (item) => item.name === selectedItem.name
              );
              setSelectedItem(
                menuItems[
                  (currentIndex - 1 + menuItems.length) % menuItems.length
                ]
              );
            }}
            className="p-2 md:p-3 bg-amber-600 text-white rounded-full shadow-lg
 hover:bg-amber-500 transition"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={() => {
              const currentIndex = menuItems.findIndex(
                (item) => item.name === selectedItem.name
              );
              setSelectedItem(menuItems[(currentIndex + 1) % menuItems.length]);
            }}
            className="p-2 md:p-3 bg-amber-600 text-white rounded-full shadow-lg
 hover:bg-amber-500 transition"
          >
            <FaChevronRight size={18} />
          </button>
        </div>

        {/* ADDITIONAL ICONS */}
        <div
          className="mt-4 md:mt-6 flex items-center space-x-3
         md:space-x-4 lg:space-x-6"
        >
          <div
            className="flex items-center justify-center p-2 md:p-3 bg-white 
rounded-full shadow-xl transform transition hover:scale-110"
          >
            <FaHeart className="text-red-500" size={20} />
          </div>
           <div
            className="flex items-center justify-center p-2 md:p-3 bg-white 
rounded-full shadow-xl transform transition hover:scale-110"
          >
            <FaStar className="text-yellow-500" size={20} />
          </div>
           <div
            className="flex items-center justify-center p-2 md:p-3 bg-white 
rounded-full shadow-xl transform transition hover:scale-110"
          >
            <FaShareAlt className="text-blue-500" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
