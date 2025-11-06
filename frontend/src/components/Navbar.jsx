import React from "react";
import { FaPaw } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-green-950 bg-opacity-70 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-2xl font-bold">
        <FaPaw className="text-yellow-400" />
        <span className="text-white hover:text-yellow-400 transition-all duration-300">
          WildLifeStay
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-lg">
        {["Home", "Safaris", "Resorts", "Gallery", "Contact"].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase()}`}
            className="text-gray-200 hover:text-yellow-400 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-yellow-400 text-green-950 px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-300">
        Book Now
      </button>
    </nav>
  );
};

export default Navbar;
