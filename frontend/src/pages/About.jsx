import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import zebra from "../assets/Safari_Images/Zebra_photo.avif";
import lion from "../assets/Safari_Images/Lion_photo.avif";
import elephant from "../assets/Safari_Images/Elephants_photo.avif";
import Tiger from "../assets/Safari_Images/Tiger_Photo.avif";
import Deer from "../assets/Safari_Images/Deer_Photo.avif";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : -40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    },
  };
};

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-green-950 via-green-800 to-green-700 text-white px-6 py-12 md:px-16 lg:px-36">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Title */}
          <motion.h1
            variants={fadeIn("up", 0.1)}
            className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-400 drop-shadow-lg"
          >
            About WildLifeStay
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200 text-center"
          >
            Welcome to <span className="text-yellow-300 font-semibold">WildLifeStay</span>, your gateway to the heart of nature. 
            We are dedicated to providing unforgettable experiences in breathtaking wildlife reserves and national parks 
            around the world — connecting you with the wild while promoting sustainability.
          </motion.p>

          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200 text-center"
          >
            Founded by passionate conservationists, WildLifeStay offers eco-friendly lodges and luxury safari tents designed 
            to minimize environmental impact. Together, let’s preserve biodiversity and create timeless memories.
          </motion.p>

          {/* Mission & Vision */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            className="grid md:grid-cols-2 gap-8 mt-12"
          >
            <div className="bg-green-800 bg-opacity-60 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-opacity-80">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                Our Mission
              </h2>
              <p className="text-gray-300">
                To promote wildlife conservation through immersive experiences
                and educate visitors about the importance of protecting our
                natural heritage.
              </p>
            </div>

            <div className="bg-green-800 bg-opacity-60 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-opacity-80">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                Our Vision
              </h2>
              <p className="text-gray-300">
                A world where humans and wildlife coexist harmoniously, with
                sustainable tourism driving positive change for ecosystems
                worldwide.
              </p>
            </div>
          </motion.div>

          {/* Wildlife Safaris Section */}
          <motion.div variants={fadeIn("up", 0.5)} className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">
              Our Wildlife Safaris
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  img: elephant,
                  title: "Elephant Encounters",
                  desc: "Elephant Encounters** lets you connect closely with gentle giants and witness their majestic grace in a natural, ethical setting.",
                },
                {
                  img: lion,
                  title: "Lion Safaris",
                  desc: "Lion Safaris offers an exhilarating adventure to witness the king of the jungle in his natural realm... ",
                },
                {
                  img: zebra,
                  title: "Zebra Herds",
                  desc: "Zebra Herds let you marvel at the striking beauty of black-and-white stripes moving in harmony across the vast grasslands.",
                },
                {
                  img: Tiger,
                  title: "Tiger Trails",
                  desc: "Tiger Trails** takes you deep into the wilderness for a thrilling encounter with the majestic tiger in its natural habitat"
                },
              ].map((safari, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.2 * index)}
                  className="bg-green-800 bg-opacity-60 p-4 rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl hover:bg-opacity-80 transition-all duration-500"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={safari.img}
                      alt={safari.title}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                      <p className="text-yellow-300 text-sm font-medium tracking-wide">
                        Explore More →
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400 mt-4 mb-2">
                    {safari.title}
                  </h3>
                  <p className="text-gray-300">{safari.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
