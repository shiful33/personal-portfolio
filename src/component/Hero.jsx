import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import heroImg from "../assets/heroImg.png";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const { t, i18n } = useTranslation();

  const titles = [
    t("hero_role_frontend"),
    t("hero_role_mern"),
    t("hero_role_fullstack"),
  ];

  const [index, setIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // আরবিক ল্যাঙ্গুয়েজ কিনা চেক করার জন্য
  const isArabic = i18n.language === "ar";

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
        </div>
      )}

      <div className="container relative z-10 grid items-center grid-cols-1 gap-12 mx-auto md:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`relative z-10 font-body ${isArabic ? "text-right" : "text-left"}`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <motion.h4
            whileHover={{ scale: 1.05 }}
            className="mb-2 text-lg font-bold tracking-[0.3em] text-[#ff6900] font-title title-shadow-sm"
          >
            {t("hero_welcome")}
          </motion.h4>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-8 md:mb-16 text-[#000b69] dark:text-white leading-tight font-title text-shadow-sm">
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
            <h2 className="text-[21px] font-semibold text-[#01073d] md:text-[30px] dark:text-gray-300 text-shadow-sm">
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

          {/* --- FIX: CODE EDITOR BOX WITH LANGUAGE KEY --- */}
          <div className="relative max-w-xl py-5 mb-8 overflow-hidden font-mono bg-[#ffffe7] dark:bg-[#02001a] border shadow-2xl text-sm backdrop-blur-sm rounded-xl border-white/10">
            {/* Window Controls */}
            <div className={`flex gap-1.5 px-4 mb-4 border-b border-white/5 pb-2 opacity-80 ${isArabic ? "flex-row-reverse" : ""}`}>
              <div className="w-2.5 h-2.5 bg-[#ff5f56] rounded-full shadow-inner"></div>
              <div className="w-2.5 h-2.5 bg-[#ffbd2e] rounded-full shadow-inner"></div>
              <div className="w-2.5 h-2.5 bg-[#27c93f] rounded-full shadow-inner"></div>
              <span className={`font-sans text-xs text-yellow-500 ${isArabic ? "mr-2" : "ml-2"}`}>
                shiful.js
              </span>
            </div>

            <div className="px-4 leading-relaxed tracking-tight">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">bio</span> ={" "}
              <span className="text-orange-400">"</span>
              <span className="text-[#01073d] dark:text-[#d8d7d7]">
                <Typewriter
                  key={i18n.language} // ল্যাঙ্গুয়েজ চেঞ্জ হলে এটি রিস্টার্ট হবে
                  options={{
                    strings: [t("hero_desc")],
                    autoStart: true,
                    loop: false,
                    delay: 30,
                    cursor: "▎",
                    wrapperClassName: "inline",
                  }}
                />
              </span>
              <span className="text-orange-400">"</span>
              <span className="text-[#01073d] dark:text-white">;</span>
            </div>
          </div>

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
        <div className="relative flex items-center justify-center mt-20 lg:mt-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-72 h-72 md:w-[500px] md:h-[500px] bg-orange-500 rounded-full blur-[120px] -z-10"
          />

          <div className="relative w-75 h-75 md:w-[420px] md:h-[420px] p-1 flex items-center justify-center mb-30 md:mb-0">
            {/* Neon border */}
            <div className="absolute inset-0 overflow-hidden rounded-[40px] rotate-[15deg]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#ff6900_360deg)] opacity-100"
              />
            </div>

            {/* Main image content */}
            <div className="relative w-full h-full bg-[#FFF1E7] dark:bg-[#200113] rounded-[38px] rotate-[15deg] overflow-hidden flex items-center justify-center border-4 border-white/5 shadow-2xl transition-colors duration-500">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="-rotate-[15deg] w-full h-full scale-125 md:scale-110"
              >
                <img
                  src={heroImg}
                  alt="Shiful"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>

            {/* Social Icons */}
            <div className="absolute z-30 flex flex-col gap-4 -translate-y-1/2 -right-16 md:-right-30 top-1/2">
              {[
                { icon: <FaGithub />, link: "https://github.com/shiful33" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shiful-islam-webdeveloper" },
                { icon: <FaXTwitter />, link: "https://x.com/PiousO_B" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    x: 5,
                    backgroundColor: "#ff6900",
                    color: "#fff",
                  }}
                  className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white dark:bg-zinc-800 text-[#021b52] dark:text-white rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 transition-all cursor-pointer text-2xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Experience base */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-20 hidden p-4 text-gray-600 bg-white border border-gray-100 shadow-2xl -bottom-10 right-12 dark:bg-zinc-800 rounded-2xl dark:border-white/10 md:block text-shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 font-bold text-white bg-orange-500 rounded-lg">
                  3+
                </div>
                <div className="text-xs font-bold tracking-tighter uppercase dark:text-white">
                  Years Of <br /> Experience
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;