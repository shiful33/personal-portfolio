import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMenuAlt3,
  HiX,
  HiOutlineHome,
  HiOutlineBriefcase,
  HiOutlineMail,
} from "react-icons/hi";
import { FiSun, FiGlobe } from "react-icons/fi";
import { BiSolidTorch } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GrServicePlay } from "react-icons/gr";
import { FaUserAstronaut } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import Logo from "./Logo";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [active, setActive] = useState("Home");
  const [langOpen, setLangOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = lng === "ar" ? "rtl" : "ltr";
    setLangOpen(false);
  };

  useEffect(() => {
    const htmlElement = document.documentElement;
    isDark ? htmlElement.classList.add("dark") : htmlElement.classList.remove("dark");
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Certification", id: "certification" },
        { name: "Skills", id: "skills" },
        { name: "Services", id: "services" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
      ];
      const scrollPosition = window.scrollY + 150;
      sections.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActive(item.name);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", key: "nav_home", link: "#hero", icon: <HiOutlineHome /> },
    { name: "About", key: "nav_about", link: "#about", icon: <FaUserAstronaut /> },
    { name: "Certification", key: "nav_certification", link: "#certification", icon: <GrCertificate /> },
    { name: "Skills", key: "nav_skills", link: "#skills", icon: <GiSkills /> },
    { name: "Services", key: "nav_services", link: "#services", icon: <GrServicePlay /> },
    { name: "Projects", key: "nav_projects", link: "#projects", icon: <HiOutlineBriefcase /> },
    { name: "Contact", key: "nav_contact", link: "#contact", icon: <HiOutlineMail /> },
  ];

  return (
    <nav className="fixed top-0 left-0 z-[100] w-full px-4 py-6">
      <div className="flex items-center justify-between px-6 py-3 mx-auto transition-all duration-500 border shadow-2xl max-w-[1560px] bg-white/40 dark:bg-black/40 backdrop-blur-xl border-white/20 dark:border-white/10 rounded-2xl relative">
        
        {/* Logo with Pop Animation */}
        <Logo />

        {/* Desktop Links */}
        <ul className="relative items-center hidden gap-2 lg:flex text-[14px]">
          {navLinks.map((item) => (
            <motion.li 
              key={item.name}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
              whileHover="hover"
              className="relative"
            >
              <a
                href={item.link}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 relative z-10 ${
                  active === item.name ? "text-white" : "text-[#000b69] dark:text-gray-300"
                }`}
              >
                {/* Icon Container with Celebration Effect */}
                <div className="relative flex items-center justify-center">
                  <motion.span
                    className="relative z-10 text-lg"
                    variants={{
                      hover: { scale: 1.4, rotate: [0, -15, 15, 0], transition: { duration: 0.3 } }
                    }}
                  >
                    {item.icon}
                  </motion.span>

                  {/* Celebration Particles */}
                  <AnimatePresence>
                    {hovered === item.name && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ 
                              scale: [0, 1.2, 0], 
                              opacity: [1, 1, 0],
                              x: Math.cos(i * 45) * 28, 
                              y: Math.sin(i * 45) * 28 
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute w-1 h-1 bg-orange-500 rounded-full"
                          />
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                <span className="font-medium">{t(item.key)}</span>
              </a>

              {/* Sliding Active Pill */}
              {active === item.name && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#ff6900] rounded-xl shadow-lg shadow-orange-500/20 z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Right Tools */}
        <div className="flex items-center gap-3">
          {/* Lang Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 flex items-center gap-1 cursor-pointer border border-transparent hover:border-orange-500/50 transition-all"
            >
              <FiGlobe size={18} />
              <span className="text-xs font-bold uppercase">{i18n.language}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="absolute top-14 right-0 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-2xl p-2 flex flex-col gap-1 min-w-[120px] z-50 overflow-hidden"
                >
                  {["en", "bn", "ar"].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className={`px-4 py-2 text-sm text-left rounded-lg transition-all hover:bg-orange-500 hover:text-white ${i18n.language === lng ? "bg-orange-100 dark:bg-orange-500/20 text-orange-600" : ""}`}
                    >
                      {lng === "en" ? "English" : lng === "bn" ? "বাংলা" : "العربية"}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Switch */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 15 }}
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-orange-500 dark:text-yellow-400 border border-transparent hover:border-orange-500/50 cursor-pointer"
          >
            {isDark ? <BiSolidTorch size={20} className="rotate-180" /> : <FiSun size={20} />}
          </motion.button>

          {/* Mobile Toggle */}
          <motion.div 
            whileTap={{ scale: 0.8 }}
            className="text-3xl text-orange-500 cursor-pointer lg:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute z-50 p-6 border border-gray-200 shadow-2xl top-24 left-4 right-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl dark:border-zinc-800 rounded-3xl lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((item, i) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 p-4 rounded-2xl font-medium transition-all ${
                      active === item.name ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30" : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    {t(item.key)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;