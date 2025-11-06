import React, { useState, useRef } from "react";

const Card = ({ name = '', role = '', image = '', description = '', socialLinks = [] }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-80 h-96 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      {/* Animated Gradient Glow */}
      {visible && (
        <div
          className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 w-60 h-60 absolute z-0 transition-opacity duration-300"
          style={{ top: position.y - 120, left: position.x - 120 }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
        <img
          src={image}
          alt={`${name} Avatar`}
          className="w-24 h-24 rounded-full shadow-md my-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
        <p className="text-sm text-indigo-500 font-medium mb-4">{role}</p>
        <p className="text-sm text-gray-500 mb-4 px-4">{description}</p>

        {/* Social Links */}
        <div className="flex space-x-4 mb-4 text-xl text-indigo-600">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-0.5 transition-transform duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Card };
