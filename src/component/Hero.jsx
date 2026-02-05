import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import heroImg from "../assets/heroImg.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const titles = [
    t("hero_role_frontend"),
    t("hero_role_mern"),
    t("hero_role_fullstack"),
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
      {/* --- LIGHT MODE DYNAMIC BACKGROUND --- */}
      {!isDark && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-0"
            style={{
              backgroundImage: `radial-gradient(#ff6900 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      )}

      {/* REALISTIC SPACE BACKGROUND (Dark Mode) */}
      {isDark && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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

          {/* Spaceship Animation */}
          <motion.div
            animate={{
              y: ["110vh", "-20vh"],
              x: ["40vw", "45vw", "35vw"],
              rotate: [-10, -5, -10],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute left-0"
          >
            <div className="relative flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/ZRTs72QD/png-clipart-starcraft-brood-war-starcraft-ii-wings-of-liberty-starcraft-ii-nova-covert-ops-protoss-c.png"
                alt="Spaceship"
                className="w-22 md:w-30 drop-shadow-[0_0_30px_rgba(255,100,0,0.4)] relative z-10 -rotate-85"
              />
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
            {t("hero_welcome")}
          </motion.h4>

          <h1 className="text-2xl md:text-5xl font-extrabold mb-8 md:mb-16 text-[#000b69] dark:text-white leading-tight font-title text-shadow-sm">
            {t("hero_hello")}{" "}
            <span className="text-[#ff6900] relative">
              {t("hero_name_only")}
              <svg
                className="absolute left-0 w-full lg:-bottom-16"
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
            <h2 className="text-[22px] font-semibold text-[#01073d] md:text-4xl dark:text-gray-300 text-shadow-sm">
              {t("hero_passionate")}{" "}
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

          <p className="max-w-lg py-4 mb-8 text-lg text-gray-700 border dark:text-gray-400 backdrop-blur-sm bg-white/5 rounded-xl border-white/10 text-shadow-sm">
            {t("hero_desc")}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://wa.me/8801711037548"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255, 105, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 font-bold text-white transition-all bg-gradient-to-r from-[#ff6900] to-[#e05e00] rounded-full shadow-xl cursor-pointer text-shadow-sm flex items-center justify-center"
            >
              {t("hero_talk")}
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="/Shiful_Resume.pdf"
              download="Shiful_Resume.pdf"
              className="flex items-center gap-3 px-8 py-4 font-bold text-[#ff6900] border-2 border-[#ff6900] rounded-full hover:bg-[#ff6900] hover:text-white transition-all duration-300 group text-shadow-sm"
            >
              {t("hero_cv")}{" "}
              <HiDownload className="text-2xl transition-transform group-hover:rotate-12" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <div className="relative flex items-center justify-center">
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
          <div className="absolute z-20 flex flex-col gap-5 -right-4">
            {[
              { icon: <FaGithub />, link: "https://github.com/shiful33" },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/shiful-islam-webdeveloper",
              },
              { icon: <FaXTwitter />, link: "https://x.com/PiousO_B" },
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
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white hover:bg-orange-500 dark:bg-zinc-800 text-2xl rounded-full shadow-xl text-[#021b52] dark:text-white transition-all hover:text-white border border-gray-100 dark:border-zinc-700 cursor-pointer"
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
