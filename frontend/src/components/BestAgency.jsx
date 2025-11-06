import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import zebraVideo from "../assets/Safari_video/Zebra_30fps.mp4";
import lionVideo from "../assets/Safari_video/Lion_24fps.mp4";
import elephantVideo from "../assets/Safari_video/Elephant_25fps.mp4";

export default function BestAgency() {
  // Variants for image container with stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Star variants for sequential animation
  const starVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section
      className={`bg-green-50 py-16 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden`}
    >
      {/* Left Content */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className={`text-4xl md:text-5xl font-bold text-gray-900`}>
          Why We’re Best Agency
        </h2>

        <h3 className={`text-2xl font-semibold text-gray-800`}>
          Welcome to{" "}
          <motion.span
            className="text-blue-600 inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Wildlife Safari Agency
          </motion.span>{" "}
          – Your Gateway to Unforgettable adventures Journeys!
        </h3>

        <p className={`leading-relaxed text-gray-600`}>
        Wildlife Safari Agency offers thrilling and unforgettable adventures into the heart of nature. Experience the wild up close with expertly guided safaris through national parks, dense jungles, and natural reserves. From spotting majestic tigers and elephants to witnessing rare birds in their natural habitat, every journey is crafted for true wildlife lovers. Our mission is to promote eco-friendly tourism while ensuring comfort, safety, and respect for nature’s balance. Discover the beauty, mystery, and excitement of the wild with Wildlife Safari Agency — where every trip is a new adventure into the wild!
        </p>

        <motion.a
          href="#"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          About More Wildlife Safari Agency <FiExternalLink size={16} />
        </motion.a>

        {/* Rating Box */}
        <motion.div
          className={`flex items-center gap-8 mt-6 rounded-2xl p-4 shadow-sm w-fit bg-gray-400/40`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          {/* Tripadvisor */}
          <div className="flex items-center gap-3 border-r pr-6">
            <div className="text-2xl font-semibold">4.6</div>
            <div>
              <div className="flex items-center gap-1 text-black-600 font-semibold">
                <span>Tripadvisor</span>
              </div>
              <motion.div
                className="flex text-green-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    variants={starVariants}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <FaRegStar size={12} fill="green" stroke="green" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Trustpilot */}
          <div className="flex items-center gap-3">
            <div className="text-2xl font-semibold">4.5</div>
            <div>
              <div className="flex items-center gap-1 text-black-600 font-semibold">
                <span>Trustpilot</span>
              </div>
              <motion.div
                className="flex text-green-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    variants={starVariants}
                    whileHover={{ scale: 1.2, rotate: -15 }}
                  >
                    <FaRegStar size={12} fill="green" stroke="green" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Images with Stagger */}
      <motion.div
        className="md:w-1/2 grid grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.video
          src={zebraVideo}
          className="rounded-2xl shadow-lg w-full h-[200px] object-cover"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          autoPlay
          muted
          loop
        />
        <motion.video
          src={lionVideo}
          className="rounded-2xl shadow-lg w-full h-[200px] object-cover"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          autoPlay
          muted
          loop
        />
        <motion.video
          src={elephantVideo}
          className="rounded-2xl shadow-lg w-full h-[200px] object-cover col-span-2"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          autoPlay
          muted
          loop
        />
      </motion.div>
    </section>
  );
}
