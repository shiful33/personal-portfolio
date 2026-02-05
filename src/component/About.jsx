import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutImg from "../assets/aboutImg.jpg";

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t("about_exp_title"), value: "2+" },
    { label: t("about_project_title"), value: "20+" },
    { label: t("about_client_title"), value: "15+" },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 dark:bg-[#160014] transition-colors duration-500 overflow-hidden"
    >
      <div className="mx-auto max-w-[1560px]">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold text-[#000b69] dark:text-white mb-4 text-shadow-sm"
          >
            {t("about_title")}
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#ff6900] mx-auto rounded-full"></div>
        </div>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left: Image with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Gloing Effect */}
            <div className="relative w-80 h-80 md:w-[350px] md:h-[350px] flex items-center justify-center">
              {/* First Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed rounded-full border-orange-500/40"
              ></motion.div>

              {/* Second gloing */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-4 border-[3px] border-orange-500/60 rounded-full shadow-[0_0_50px_rgba(255,105,0,0.5)]"
              ></motion.div>

              {/* Inside gloing shadow */}
              <div className="absolute w-[80%] h-[80%] bg-orange-600/20 blur-[80px] rounded-full"></div>

              {/* Main image */}
              <div className="relative z-10 w-64 h-64 overflow-hidden border-4 rounded-full md:w-80 md:h-80 border-white/20 backdrop-blur-sm">
                <img
                  src={aboutImg}
                  alt="About Me"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[22px] md:text-[26px] font-bold text-[#ff6900] mb-4 text-shadow-sm">
              {t("about_subtitle")}
            </h3>
            <p className="mb-8 leading-relaxed text-gray-700 text-md dark:text-gray-300 text-shadow-sm">
              {t("about_description")}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 text-center bg-white border border-gray-100 shadow-lg dark:bg-zinc-800/50 rounded-xl dark:border-white/10"
                >
                  <h4 className="text-2xl font-bold text-[#ff6900] text-shadow-sm">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-gray-500 md:text-sm dark:text-gray-400 text-shadow-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-3 bg-[#ff6900] text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 text-shadow-sm"
            >
              {t("hero_talk")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
