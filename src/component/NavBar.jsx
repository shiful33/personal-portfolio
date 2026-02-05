import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
import { SiCodeceptjs } from "react-icons/si";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [active, setActive] = useState("Home");
  const [langOpen, setLangOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = lng === "ar" ? "rtl" : "ltr";
    setLangOpen(false);
  };

  // Theme Toggle
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDark]);

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Services", id: "services" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
      ];

      const scrollPosition = window.scrollY + 150;

      sections.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActive(item.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", key: "nav_home", link: "#hero", icon: <HiOutlineHome /> },
    {
      name: "About",
      key: "nav_about",
      link: "#about",
      icon: <FaUserAstronaut />,
    },
    { name: "Skills", key: "nav_skills", link: "#skills", icon: <GiSkills /> },
    {
      name: "Services",
      key: "nav_services",
      link: "#services",
      icon: <GrServicePlay />,
    },
    {
      name: "Projects",
      key: "nav_projects",
      link: "#projects",
      icon: <HiOutlineBriefcase />,
    },
    {
      name: "Contact",
      key: "nav_contact",
      link: "#contact",
      icon: <HiOutlineMail />,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 z-[100] w-full px-4 py-6">
      <div className="flex items-center justify-between px-6 py-3 mx-auto transition-all duration-500 border shadow-2xl max-w-[1560px] bg-white/10 dark:bg-black/20 backdrop-blur-lg border-white/20 dark:border-white/10 rounded-2xl relative">
        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-gray-700 text-[22px] dark:text-white text-shadow-sm font-title">
          <span className="px-3 py-1 text-white bg-[#ff6900] shadow-lg rounded-xl shadow-orange-500/20">
            <SiCodeceptjs />
          </span>
          <span className="hidden sm:block">Shiful Islam</span>
        </div>

        {/* Desktop Links */}
        <ul className="items-center hidden gap-2 lg:flex">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  active === item.name
                    ? "bg-[#ff6900] text-white shadow-md shadow-orange-500/20 scale-105"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#ff6900]"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{t(item.key)}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Tools */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 flex items-center gap-1 cursor-pointer"
            >
              <FiGlobe size={18} />
              <span className="text-xs font-bold uppercase">
                {i18n.language}
              </span>
            </button>

            {langOpen && (
              <div className="absolute top-14 right-0 bg-white dark:bg-[#727272] border border-gray-200 dark:border-white/10 rounded-xl shadow-xl p-2 flex flex-col gap-1 min-w-[100px] cursor-pointer">
                <button
                  onClick={() => changeLanguage("en")}
                  className="px-4 py-2 text-sm transition-all rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("bn")}
                  className="px-4 py-2 text-sm transition-all rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white"
                >
                  বাংলা
                </button>
                <button
                  onClick={() => changeLanguage("ar")}
                  className="px-4 py-2 text-sm text-right transition-all rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white"
                >
                  العربية
                </button>
              </div>
            )}
          </div>

          {/* Theme Switcher */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-orange-500 dark:text-yellow-400 hover:scale-110 transition-all border border-gray-200 dark:border-white/10 cursor-pointer"
          >
            {isDark ? (
              <BiSolidTorch size={20} className="rotate-180" />
            ) : (
              <FiSun size={20} />
            )}
          </button>

          {/* Hire Me */}
          <button className="hidden sm:block bg-[#ff6900] hover:bg-[#e05e00] text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/30 cursor-pointer">
            {t("hire_me")}
          </button>

          {/* Mobile Menu Toggle */}
          <div
            className="text-3xl text-orange-500 cursor-pointer lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute top-24 left-4 right-4 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 shadow-2xl ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"} lg:hidden`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 p-4 rounded-xl font-medium transition-all ${active === item.name ? "bg-orange-500 text-white" : "text-gray-700 dark:text-gray-300"}`}
              >
                <span className="text-xl">{item.icon}</span>
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
