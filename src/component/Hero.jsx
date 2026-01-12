import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import heroImg from "../assets/heroImg.png";

const Hero = () => {
  const titles = [
    "Frontend Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
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
      className="dark:bg-[#160014] min-h-screen flex items-center px-6 md:px-20 transition-colors duration-500 overflow-hidden pt-40 md:pt-20 relative"
    >
      {/* --- LIGHT MODE DYNAMIC BACKGROUND (Only in Light Mode) --- */}
      {!isDark && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Floating Decorative Circles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute border rounded-full border-orange-500/10 bg-gradient-to-br from-orange-500/5 to-transparent"
              style={{
                width: Math.random() * 300 + 100 + "px",
                height: Math.random() * 300 + 100 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            />
          ))}

          {/* Abstract Moving Lines/Grids */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-0"
            style={{
              backgroundImage: `radial-gradient(#ff6900 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Soft Colorful Blurs for Light Mode */}
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] -right-[10%] w-[35%] h-[35%] bg-orange-400/10 blur-[120px] rounded-full" />
        </div>
      )}

      {/* REALISTIC SPACE BACKGROUND (Only in Dark Mode) */}
      {isDark && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Twinkling Stars */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
              className="absolute bg-white rounded-full shadow-[0_0_8px_white]"
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            />
          ))}

          {/* LARGE SPACESHIP MOVING BOTTOM TO TOP */}
          <motion.div
            animate={{
              y: ["110vh", "-20vh"],
              x: ["40vw", "45vw", "35vw"],
              rotate: [-10, -5, -10],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0"
          >
            <div className="relative flex flex-col items-center">
              {/* Realistic Spaceship Image */}
              <img
                src="https://i.ibb.co.com/ZRTs72QD/png-clipart-starcraft-brood-war-starcraft-ii-wings-of-liberty-starcraft-ii-nova-covert-ops-protoss-c.png"
                alt="Spaceship"
                className="w-22 md:w-30 drop-shadow-[0_0_30px_rgba(255,100,0,0.4)] relative z-10 -rotate-85"
              />

              {/* Dynamic Thruster Flame */}
              <div className="absolute flex flex-col items-center -bottom-24">
                <motion.div
                  animate={{
                    scaleY: [0.8, 1, 1.1, 0.8, 1],
                    opacity: [0.7, 1, 0.8],
                  }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                  className="w-10 h-32 origin-top rounded-full bg-gradient-to-b from-orange-600 via-yellow-300 to-transparent blur-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <div className="container relative z-10 grid items-center grid-cols-1 gap-12 mx-auto md:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 font-body"
        >
          <motion.h4
            whileHover={{ scale: 1.05 }}
            className="mb-2 text-lg font-bold tracking-[0.3em] text-[#ff6900] font-title title-shadow-sm"
          >
            WELCOME TO MY WORLD
          </motion.h4>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#000b69] dark:text-white leading-tight font-title text-shadow-sm">
            I'm Shiful{" "}
            <span className="text-[#ff6900] relative">
              Islam
              <svg
                className="absolute left-0 w-full -bottom-9"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  d="M0 15 Q 50 0 100 15"
                  fill="none"
                  stroke="#ff6900"
                  strokeWidth="4"
                />
              </svg>
            </span>
          </h1>

          <div className="flex items-center h-16 mb-4">
            <h2 className="text-2xl font-semibold text-[#01073d] md:text-4xl dark:text-gray-300 text-shadow-sm">
              A Passionate{" "}
              <span className="inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titles[index]}
                    initial={{ y: 30, opacity: 0, skewY: 10 }}
                    animate={{ y: 0, opacity: 1, skewY: 0 }}
                    exit={{ y: -30, opacity: 0, skewY: -10 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                    className="block ml-2 text-[#ff6900] drop-shadow-lg"
                  >
                    {titles[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>
          </div>

          <p className="max-w-lg p-4 mb-8 text-lg text-gray-700 border dark:text-gray-400 backdrop-blur-sm bg-white/5 rounded-xl border-white/10 ">
            Designing and developing robust, full-stack solutions with a focus
            on **MERN** stack and **Next.js**. I turn complex problems into
            elegant, interactive web experiences.
          </p>

          <div className="flex flex-wrap gap-6">
            {/* LET'S TALK Button: WhatsApp Link */}
            <motion.a
              href="https://wa.me/8801711037548" // WhatsApp number link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255, 105, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 font-bold text-white transition-all bg-gradient-to-r from-[#ff6900] to-[#e05e00] rounded-full shadow-xl cursor-pointer text-shadow-sm flex items-center justify-center"
            >
              LET'S TALK
            </motion.a>

            {/* RESUME Button: PDF Download */}
            <motion.a
              whileHover={{ y: -5 }}
              href="/Shiful-Frontend developer.pdf"
              download="Shiful-Frontend-Developer-Resume.pdf"
              className="flex items-center gap-3 px-8 py-4 font-bold text-[#ff6900] border-2 border-[#ff6900] rounded-full hover:bg-[#ff6900] hover:text-white transition-all duration-300 group text-shadow-sm"
            >
              RESUME{" "}
              <HiDownload className="text-2xl transition-transform group-hover:rotate-12" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="relative flex items-center justify-center">
          {isDark && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-[-260px] right-[170px] z-0 pointer-events-none"
            >
              <div
                className="hidden lg:block w-[300px] h-[500px] bg-gradient-to-b from-yellow-400/60 via-yellow-200/20 to-transparent rotate-5"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 120% 100%)",
                  filter: "blur(40px)",
                }}
              />
            </motion.div>
          )}

          <div className="relative flex items-center justify-center md:ml-20">
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] bg-orange-500/20 dark:bg-orange-600/10 rounded-full blur-[100px] -z-10"
            />

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="relative overflow-hidden border-none rounded-full shadow-2xl border-white/10">
                <img
                  src={heroImg}
                  alt="Shiful"
                  className="w-72 h-72 md:w-[400px] md:h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Floating Social Icons */}
          <div className="absolute z-20 flex flex-col gap-5 -right-4 md:-right-10">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/shiful33",
                color: "hover:bg-gray-800",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/shiful-islam-webdeveloper",
                color: "hover:bg-blue-400",
              },
              { icon: <FaFacebook />, link: "#", color: "hover:bg-[#000b69]" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
