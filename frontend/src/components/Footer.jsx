import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-gray-300 px-6 pt-12 md:px-16 lg:px-36 w-full">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-12 border-b border-green-700 pb-10">
        {/* Logo and about */}
        <div className="md:max-w-96">
          <div className="flex items-center space-x-2">
            <FaLeaf className="text-yellow-400 text-3xl" />
            <h1 className="text-2xl font-bold text-yellow-400">WildLifeStay</h1>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            Experience the beauty of the wilderness with cozy stays, guided
            safaris, and eco-tours that bring you closer to nature. Discover the
            wild, live in comfort, and reconnect with the earth.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-6">
            {[
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-gray-400 hover:text-yellow-400 transition-all duration-300 text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5 text-yellow-400 text-lg">
              Explore
            </h2>
            <ul className="text-sm space-y-2">
              {["Home", "Safaris", "Resorts", "Gallery", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-yellow-400 transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-yellow-400 text-lg">
              Get in Touch
            </h2>
            <div className="text-sm space-y-2">
              <p className="hover:text-yellow-400 transition-all duration-300">
                +91-98765-43210
              </p>
              <p className="hover:text-yellow-400 transition-all duration-300">
                contact@wildlifestay.com
              </p>
              <p className="hover:text-yellow-400 transition-all duration-300">
                Bandipur National Park, Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <p className="pt-6 text-center text-sm pb-5 text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-semibold">WildLifeStay</span>. All
        Rights Reserved. | Crafted with 🌿 for Nature Lovers
      </p>
    </footer>
  );
};

export default Footer;
