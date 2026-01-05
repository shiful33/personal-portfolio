import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="dark:bg-[#160014] py-40 px-6 md:px-20 transition-colors duration-500 overflow-visible"
    >
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl md:text-[26px] font-extrabold text-left mb-16 text-[#021b52] dark:text-white font-title">
              About <span className="text-orange-500">Me</span>
            </h4>
            <h2 className="text-xl md:text-[22px] font-extrabold mb-6 text-[#021b52] dark:text-white leading-tight font-title">
              I'll Design
              <span className="text-orange-500"> Modern Web</span> Solutions
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 font-body">
              Hello again! I'm Shiful Islam, a passionate Full Stack Developer
              with a strong focus on the MERN stack. My journey began with a
              curiosity for how websites work, evolving into a dedication to
              crafting robust, scalable, and visually appealing web
              applications.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I thrive on turning complex problems into elegant solutions,
              always aiming for clean code and exceptional user experiences.
              From conceptualization to deployment, I love seeing projects come
              to life. Let's build something amazing together!
            </p>
            <button className="px-8 py-3 font-bold text-white transition-all bg-orange-500 rounded-full shadow-lg hover:bg-orange-600">
              Contact Me
            </button>
          </motion.div>

          {/* Right Side: Image with STATIC Shapes  */}
          <div className="relative flex items-center justify-center py-10">
            {/* Top right box */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/20 dark:bg-blue-500/20 rounded-3xl rotate-[45deg] border border-blue-300/50 animate-pulse"
              style={{ zIndex: 0, display: "block !important", opacity: 1 }}
            ></div>

            {/* Middle right shape */}
            <div
              className="absolute top-1/3 -right-0 w-16 h-32 bg-orange-200/30 dark:bg-purple-400/20 rounded-full blur-[2px] animate-ping duration-500"
              style={{ zIndex: 0, display: "block !important", opacity: 1 }}
            ></div>

            {/* Green & Orange Circle */}
            <div
              className="absolute rounded-full -bottom-12 -left-12 w-44 h-44 bg-orange-500/30 dark:bg-green-500/20 blur-xl"
              style={{ zIndex: 0, display: "block !important", opacity: 1 }}
            ></div>

            {/* Purple Square */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute -top-16 -left-10 w-20 h-20 border-[3px] border-purple-500/50 dark:border-purple-400/40 rounded-xl animate-pulse"
              style={{ zIndex: 0, display: "block !important", opacity: 1 }}
            ></motion.div>

            {/* ABOUT IMAGE (Shudhu ekhane Bubble & Animation add kora hoyeche) */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                borderRadius: [
                  "50% 50% 50% 50% / 50% 50% 50% 50%",
                  "60% 40% 50% 50% / 40% 60% 50% 50%",
                  "45% 55% 45% 55% / 55% 45% 55% 45%",
                  "50% 50% 50% 50% / 50% 50% 50% 50%",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 group shadow-2xl overflow-hidden border-4 border-white dark:border-zinc-800 bg-white dark:bg-zinc-900 w-72 h-96 md:w-[380px] md:h-[480px]"
              style={{ borderRadius: "40% 60% 70% 30% / 40% 40% 60% 60%" }}
            >
              <img
                src={aboutImg}
                alt="Shiful Islam"
                className="object-cover w-full h-full scale-110"
              />
            </motion.div>

            {/* Experience Box (Ager motoi thakbe) */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute bottom-6 right-8 md:right-20 bg-white dark:bg-zinc-800 p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-700 flex items-center gap-4 min-w-[180px] z-20"
            >
              <div className="flex items-center justify-center w-12 h-12 text-2xl font-bold text-white bg-orange-500 rounded-lg">
                2+
              </div>
              <div>
                <h4 className="text-[#021b52] dark:text-white font-bold text-lg leading-tight whitespace-nowrap">
                  Years
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experience
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
