import React, { useState, useEffect } from "react";
import {
  HiMenuAlt3,
  HiX,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineMail,
} from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import { BiSolidTorch } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GrServicePlay } from "react-icons/gr";
import { FaUserAstronaut } from "react-icons/fa";
import { SiCodeceptjs } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [active, setActive] = useState("Home");

  // Theme Toggle Function
  useEffect(() => {
  const htmlElement = document.documentElement;
  if (isDark) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }
}, [isDark]);

  const navLinks = [
    { name: "Home", link: "#hero", icon: <HiOutlineHome /> },
    { name: "About", link: "#about", icon: <FaUserAstronaut /> },
    { name: "Skills", link: "#skills", icon: <GiSkills /> },
    { name: "Services", link: "#services", icon: <GrServicePlay /> },
    { name: "Projects", link: "#projects", icon: <HiOutlineBriefcase /> },
    { name: "Contact", link: "#contact", icon: <HiOutlineMail /> },
  ];

  return (
    <nav id="home" className="fixed top-0 left-0 z-50 w-full px-4 py-6">
      <div className="flex items-center justify-between px-6 py-3 mx-auto transition-all duration-500 border shadow-2xl max-w-7xl bg-white/10 dark:bg-black/20 backdrop-blur-lg border-white/20 dark:border-white/10 rounded-2xl">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="px-3 py-2 text-white bg-orange-500 shadow-lg rounded-xl shadow-orange-500/20 group-hover:rotate-12">
          <SiCodeceptjs />
          </div>
          <span className="text-xl font-bold tracking-wider text-black dark:text-white">
            Shiful
          </span>
        </div>

        {/* Desktop Links with Icons & Active State */}
        <ul className="items-center hidden gap-2 md:flex">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  active === item.name
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "text-gray-600 dark:text-gray-300 hover:text-orange-500"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Theme Toggle + Button */}
        <div className="flex items-center gap-4">
          {/* Theme Switcher Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-orange-500 dark:text-yellow-400 hover:scale-110 transition-all active:scale-95 border border-gray-200 dark:border-white/10 cursor-pointer"
          >
            {isDark ? <BiSolidTorch size={20} className="rotate-180"/> : <FiSun size={20} />}
          </button>

          {/* Contact Button */}
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/30 active:scale-95">
            Hire Me
          </button>

          {/* Mobile Menu Icon */}
          <div
            className="text-3xl text-orange-500 cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute top-24 left-4 right-4 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 shadow-2xl ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => {
                  setIsOpen(false);
                  setActive(item.name);
                }}
                className={`flex items-center gap-4 p-4 rounded-xl font-medium ${
                  active === item.name
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
