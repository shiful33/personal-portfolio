import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { SiCodeceptjs } from "react-icons/si";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-[#1d0120] pt-20 pb-10 px-6 md:px-20 transition-colors duration-500 overflow-hidden relative w-full">
      {/* FULL WIDTH ANIMATED SEA WAVES */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{ x: [0, -80, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-[-5%] w-[110%] h-[350px] opacity-40 dark:opacity-20"
        >
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000B69"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid items-start grid-cols-1 gap-12 mb-16 md:grid-cols-3">
          {/* Logo & Bio */}
          <div className="space-y-6">
            <Logo />
            <p className="max-w-xs leading-relaxed text-gray-500 dark:text-gray-400">
              {t("footer_bio")}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/shiful33" },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/in/shiful-islam-webdeveloper",
                },
                {
                  icon: <FaFacebookF />,
                  link: "https://facebook.com/your-profile",
                },
                {
                  icon: <FaTwitter />,
                  link: "https://twitter.com/your-profile",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    backgroundColor: "#f97316",
                    color: "#fff",
                  }}
                  className="flex items-center justify-center w-10 h-10 text-gray-600 transition-all bg-gray-100 shadow-sm rounded-xl dark:bg-zinc-800 dark:text-gray-300"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[#021b52] dark:text-white font-bold mb-6 uppercase tracking-widest text-sm">
                {t("footer_services")}
              </h4>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                <li className="transition-colors cursor-pointer hover:text-orange-500">
                  Frontend Dev
                </li>
                <li className="transition-colors cursor-pointer hover:text-orange-500">
                  MERN Stack
                </li>
                <li className="transition-colors cursor-pointer hover:text-orange-500">
                  UI/UX Design
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#021b52] dark:text-white font-bold mb-6 uppercase tracking-widest text-sm">
                {t("footer_company")}
              </h4>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                <li className="transition-colors cursor-pointer hover:text-orange-500">
                  About Me
                </li>
                <li className="transition-colors cursor-pointer hover:text-orange-500">
                  Projects
                </li>
                <li className="transition-colors cursor-pointer hover:text-orange-500">
                  Contact
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Hire Me Box */}
          <div className="bg-orange-500/5 dark:bg-orange-500/10 p-8 rounded-[2rem] border border-orange-500/10 backdrop-blur-sm relative z-20">
            <h4 className="text-lg font-bold text-[#021b52] dark:text-white mb-4">
              {t("footer_hire_title")}
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              {t("footer_hire_desc")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 font-bold text-white bg-orange-500 shadow-lg cursor-pointer rounded-xl shadow-orange-500/20"
            >
              {t("footer_hire_btn")}
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-20 flex flex-col items-center justify-between gap-6 pt-10 border-t border-gray-200/30 dark:border-zinc-800 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <span>©</span> {currentYear}{" "}
            <span className="font-bold text-[#021b52] dark:text-white">
              Shiful Islam.
            </span>{" "}
            {t("footer_all_rights")}
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            {t("footer_developed")}{" "}
            <FaHeart className="text-red-500 animate-pulse" /> {t("footer_by")}
            <span className="pl-1 font-bold text-[#021b52] dark:text-white cursor-pointer hover:text-orange-500 transition-colors">
              Shiful
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
