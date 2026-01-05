import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import heroImg from "../assets/heroImg.png";

const Hero = () => {
  const titles = [
    "Frontend Developer",
    "MERN Stack Developer",
    "Backend Developer",
  ];

  const [index, setIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const socialVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  };

  const floatingTransition = {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [titles.length]);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className=" dark:bg-[#160014] min-h-screen flex items-center px-6 md:px-20 transition-colors duration-500 overflow-hidden pt-20"
    >
      <div className="container relative grid items-center grid-cols-1 gap-12 mx-auto md:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 font-body"
        >
          {/* --- Animated Shapes Start --- */}

          {/* (Floating Circle) */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: 360,
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute hidden border rounded-full h-50 w-50 top-5 left-1 bg-orange-500/8 border-orange-300/10 blur-sm -z-10 md:block"
          />

          {/* (Floating Triangle/Abstract) */}
          <motion.div
            animate={{
              y: [0, 40, 0],
              scale: [1, 1.2, 1],
              rotate: -45,
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute hidden w-16 h-16 border bottom-10 left-100 bg-blue-500/10 rounded-xl border-blue-500/20 blur-xs -z-10 lg:block"
          />

          {/* ৩. হালকা আভা (Soft Glow) */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] -z-20" />
          <h4 className="mb-2 text-lg font-bold tracking-widest text-orange-500 font-title">
            HELLO!
          </h4>
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 text-[#021b52] dark:text-white leading-tight font-title">
            I'm <span className="text-orange-500">Shiful</span> Islam
          </h1>

          {/* Dynamic Title Section */}
          <div className="flex items-center h-12 mb-4">
            <h2 className="text-xl font-semibold text-gray-700 md:text-4xl dark:text-gray-300">
              A Passionate{" "}
              <span className="inline-block overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titles[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="block ml-2 text-orange-500"
                  >
                    {titles[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>
          </div>

          <p className="max-w-lg mb-8 text-lg text-gray-600 dark:text-gray-400">
            I build high-performance, eye-catching, and user-friendly modern web
            applications.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 font-bold text-white transition-all bg-orange-500 rounded-full shadow-lg cursor-pointer hover:bg-orange-600 shadow-orange-500/30 hover:-translate-y-1 active:scale-95">
              HIRE ME
            </button>

            <a
              href="/Shiful-Frontend developer.pdf"
              download="Shiful_Islam_CV.pdf"
              className="flex items-center gap-2 px-8 py-3 font-bold text-orange-500 no-underline transition-all border-2 border-orange-500 rounded-full cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-1 active:scale-95 group font-body"
            >
              DOWNLOAD CV
              <HiDownload className="text-xl group-hover:animate-bounce" />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Image + Social Icons */}
        <div className="relative flex items-center justify-center">
          {isDark && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-[-260px] right-[170px] z-0 pointer-events-none"
            >
              {/* Torch light */}
              <div
                className="hidden lg:block w-[300px] h-[500px] bg-gradient-to-b from-yellow-400/60 via-yellow-200/20 to-transparent rotate-5"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 120% 100%)",
                  transform: "",
                  filter: "blur(40px)",
                }}
              />
            </motion.div>
          )}

          {/* Hero image */}
          <div className="relative flex items-center justify-center md:ml-20">
            {/* Background shape */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] bg-orange-500/20 dark:bg-orange-600/10 rounded-full blur-[100px] -z-10"
            />

            {/* Image animation */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              {/* Image border shadow */}
              <div className="relative overflow-hidden border-none rounded-full shadow-2xl border-white/10">
                <img
                  src={heroImg}
                  alt="Shiful"
                  className="w-72 h-72 md:w-[400px] md:h-[400px] object-cover"
                />

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/1 to-orange-200/1" />
              </div>
            </motion.div>
          </div>

          {/* Floating Social Icons */}
          <div className="absolute z-20 flex flex-col gap-5 -right-4 md:-right-10">
            {[
              { icon: <FaGithub />, link: "https://github.com/shiful33", color: "hover:bg-gray-800" },
              { icon: <FaLinkedin />, link: "www.linkedin.com/in/shiful-islam-webdeveloper", color: "hover:bg-blue-600" },
              { icon: <FaFacebook />, link: "#", color: "hover:bg-blue-500" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                variants={socialVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 + idx * 0.2 }}
                whileHover={{ scale: 1.2, x: 5 }}
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white dark:bg-zinc-800 text-2xl rounded-full shadow-xl text-[#021b52] dark:text-white transition-all hover:text-white border border-gray-100 dark:border-zinc-700 cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={floatingTransition}
                >
                  {social.icon}
                </motion.div>
              </motion.a>
            ))}
          </div>

          {/* Background Glow */}
          <div
            className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] -z-0 transition-colors duration-1000
    ${isDark ? "bg-orange-500/20" : "bg-blue-400/40"}`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
