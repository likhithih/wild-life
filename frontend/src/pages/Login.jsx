import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import axios from "axios";

const Bubbles = () => {
  const bubbleCount = 20; // more bubbles
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {Array.from({ length: bubbleCount }).map((_, i) => {
        const size = 10 + Math.random() * 60; // different sizes
        const left = Math.random() * 100 + "%";
        const top = Math.random() * 100 + "%";
        const duration = 3 + Math.random() * 5; // different floating speed
        const delay = Math.random() * 2;
        const opacity = 0.1 + Math.random() * 0.4;

        return (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [-20, 20] }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay,
            }}
            className="rounded-full bg-green-200 absolute"
            style={{
              width: size,
              height: size,
              left,
              top,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};

const images = [
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1609591804050-058bb7d8b66b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
];

const Login = () => {
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      const response = await axios.post('http://localhost:5000/login', { idToken });
      if (response.status === 200) {
        navigate('/home');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred during login');
      }
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      const response = await axios.post('http://localhost:5000/login', { idToken });
      if (response.status === 200) {
        navigate('/home');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred during Google login');
      }
    }
  };

  return (
    <div className="relative lg:min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 bg-linear-to-br from-green-100 via-emerald-50 to-yellow-50 overflow-hidden">
      <Bubbles />

      {/* Left Section - Text & Carousel */}
      <motion.div
        className="relative lg:w-1/2 w-full flex flex-col items-center text-center lg:text-left z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-lg space-y-5">
          <h1 className="lg:text-5xl text-4xl font-bold text-green-900 leading-tight">
            Explore the Wild. Stay in Serenity.
          </h1>
          <p className="text-[16px] text-green-800">
            Embark on unforgettable wildlife safaris and experience nature like never before.
            Log in to book your stay and witness the untamed beauty of the wild.
          </p>
          <p className="text-[15px] text-green-700">
            Don’t have an account?
            <Link to="/signup" className="text-green-900 font-semibold hover:underline ml-1">
              Register here
            </Link >
          </p>
        </div>

        {/* Wildlife Carousel */}
        <div className="relative mt-10 w-full h-72 rounded-2xl overflow-hidden shadow-lg">
          <motion.img
            key={current}
            src={images[current]}
            alt="Wildlife"
            className="absolute w-full h-full object-cover transition-all duration-1000"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
        </div>
      </motion.div>

      {/* Right Section - Login Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md lg:ml-auto w-full bg-white/80 backdrop-blur-sm shadow-2xl p-8 rounded-2xl mt-10 lg:mt-0 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-green-900 text-3xl font-semibold mb-8 text-center">
          Safari Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="space-y-6">
          <div>
            <label className="text-sm text-green-900 font-medium mb-2 block">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-green-50 w-full text-sm text-green-900 px-4 py-3 rounded-md outline-0 border border-green-200 focus:border-green-600 focus:bg-white transition"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-sm text-green-900 font-medium mb-2 block">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-green-50 w-full text-sm text-green-900 px-4 py-3 rounded-md outline-0 border border-green-200 focus:border-green-600 focus:bg-white transition"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-green-900">
              <input type="checkbox" className="accent-green-600" /> Remember me
            </label>
            <a href="#" className="text-green-700 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        <motion.button
          type="submit"
          className="w-full mt-8 py-3 text-white font-medium bg-green-700 hover:bg-green-800 rounded-md shadow-lg transition-transform hover:scale-105"
          whileTap={{ scale: 0.95 }}
        >
          Log In
        </motion.button>

        <div className="my-6 flex items-center gap-4">
          <hr className="w-full border-green-300" />
          <p className="text-sm text-green-900">or</p>
          <hr className="w-full border-green-300" />
        </div>

        {/* ✅ Google Login Only */}
        <div className="flex justify-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            className="p-3 bg-red-50 rounded-full hover:bg-red-100 shadow-md flex items-center justify-center"
          >
            <FaGoogle className="text-red-500 text-2xl" />
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default Login;
