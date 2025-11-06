import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Sign up with Google to start",
    field: null,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    googleOnly: true,
  },
  {
    title: "Create an account",
    field: { label: "Full Name", name: "userName", placeholder: "Enter your name", type: "text" },
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Enter your email",
    field: { label: "Email Address", name: "email", placeholder: "Enter your email", type: "email" },
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Secure your account",
    field: { label: "Password", name: "password", placeholder: "Create a password", type: "password" },
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
];

const Bubbles = ({ step }) => {
  const bubbleCount = 25; // more bubbles for full-page effect
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {Array.from({ length: bubbleCount }).map((_, i) => {
        const size = 10 + Math.random() * 50; // different sizes
        const left = Math.random() * 100 + "%";
        const top = Math.random() * 100 + "%";
        const duration = 3 + Math.random() * 5;
        const delay = Math.random() * 2;
        const opacity = 0.1 + Math.random() * 0.4;

        return (
          <motion.div
            key={step + "-" + i}
            initial={{ y: 0 }}
            animate={{ y: [-20, 20] }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay,
            }}
            className="rounded-full bg-green-200 absolute"
            style={{ width: size, height: size, left, top, opacity }}
          />
        );
      })}
    </div>
  );
};

const Signup = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/login');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during signup');
    }
  };

  const current = steps[step];

  return (
    <div className="md:h-screen p-4 relative bg-linear-to-br from-green-50 via-emerald-50 to-yellow-50 overflow-hidden">
      {/* Floating bubbles */}
      <Bubbles step={step} />

      <div className="flex flex-col justify-center items-center h-full relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-y-8 max-w-7xl w-full shadow-lg rounded-xl overflow-hidden bg-white relative">

          {/* Image Section */}
          <div className="p-4 bg-green-50 h-full flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.image}
                src={current.image}
                alt="wildlife"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="max-w-[90%] w-full h-full object-cover rounded-lg shadow-md"
              />
            </AnimatePresence>
            
          </div>

          {/* Form Section */}
          <div className="flex items-center p-6 max-w-md w-full h-full mx-auto">
            <motion.form
              key={step}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <h1 className="text-green-700 text-3xl font-bold text-center md:text-left mb-8">
                  {current.title}
                </h1>

                {current.googleOnly && (
                  <motion.div className="flex justify-center mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <button
                      type="button"
                      className="flex items-center gap-3 px-6 py-3 border border-green-300 rounded-lg shadow-sm hover:bg-green-50 transition-all"
                    >
                      <FaGoogle className="text-red-500 text-xl" />
                      <span className="text-green-900 font-medium">
                        Sign up with Google
                      </span>
                    </button>
                  </motion.div>
                )}

                {current.field && (
                  <div className="mb-6">
                    <label className="text-slate-900 text-sm font-semibold block mb-2">
                      {current.field.label}
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name={current.field.userName}
                        type={current.field.type}
                        required
                        value={formData[current.field.name]}
                        onChange={(e) => setFormData({ ...formData, [current.field.name]: e.target.value })}
                        className="w-full bg-transparent text-sm text-slate-900 border-2 border-green-200 focus:border-green-600 pl-4 pr-12 py-3.5 outline-0 rounded-xl transition-all"
                        placeholder={current.field.placeholder}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-4">
                {step > 0 ? (
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="px-5 py-2 text-green-700 border border-green-400 rounded-lg hover:bg-green-100 transition"
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Previous
                  </motion.button>
                ) : <div></div>}

                {step < steps.length - 1 ? (
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className="shadow-xl py-2.5 px-6 text-base font-medium tracking-wide rounded-xl bg-green-600 hover:bg-green-700 text-white cursor-pointer focus:outline-0 transition-all"
                    whileTap={{ scale: 0.95 }}
                  >
                    Next Step →
                  </motion.button>
                ) : (
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    className="shadow-xl py-2.5 px-6 text-base font-medium tracking-wide rounded-xl bg-green-600 hover:bg-green-700 text-white cursor-pointer focus:outline-0 transition-all"
                    whileTap={{ scale: 0.95 }}
                  >
                    Finish Signup
                  </motion.button>
                )}
              </div>

              {/* Step Indicators */}
              <div className="flex items-center justify-center gap-4 mt-6">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${i === step ? "bg-green-600" : "bg-gray-300"} transition-all`}
                  ></div>
                ))}
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
