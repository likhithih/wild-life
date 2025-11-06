import React from "react";
import { FaLeaf, FaPaw, FaTree, FaMapMarkedAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-green-900 text-white">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-36 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400 drop-shadow-lg">
            Explore the Wild, Stay in Comfort
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover breathtaking safaris, serene stays, and unforgettable
            experiences amidst nature’s untouched beauty.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-400 text-green-950 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300">
              Start Your Adventure
            </button>
            <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-green-950 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-green-800 text-center">
        <h2 className="text-3xl font-bold mb-12 text-yellow-400">
          Our Safari Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaMapMarkedAlt size={40} />,
              title: "Guided Jungle Tours",
              desc: "Explore the wild with expert guides and witness the majesty of nature up close.",
            },
            {
              icon: <FaTree size={40} />,
              title: "Eco-Luxury Stays",
              desc: "Experience cozy stays surrounded by nature with modern comfort and sustainability.",
            },
            {
              icon: <FaLeaf size={40} />,
              title: "Wildlife Photography",
              desc: "Capture stunning moments with our professional wildlife photography tours.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-green-950 p-8 rounded-2xl shadow-lg hover:bg-green-700 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-4 text-yellow-400">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-center py-6 text-gray-400">
        © 2025 WildlifeStay | Crafted with 🌿 for Nature Lovers
      </footer>
    </div>
  );
};

export default HeroSection;
