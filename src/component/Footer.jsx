import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaHeart } from "react-icons/fa";
import { SiCodeceptjs } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-[#09000a] pt-20 pb-10 px-6 md:px-20 transition-colors duration-500 overflow-visible">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800 to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="grid items-start grid-cols-1 gap-12 mb-16 md:grid-cols-3">
          
          {/* 1. Logo & Bio */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black text-[#021b52] dark:text-white flex items-center gap-2"
            >
              <span className="px-3 py-1 text-white bg-orange-500 shadow-lg rounded-xl shadow-orange-500/20"><SiCodeceptjs /></span>
              Shiful<span className="text-orange-500"></span>
            </motion.div>
            <p className="max-w-xs leading-relaxed text-gray-500 dark:text-gray-400">
              Modern MERN Stack Developer specializing in building premium user experiences and robust web solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[<FaFacebookF />, <FaGithub />, <FaLinkedinIn />, <FaTwitter />].map((icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, backgroundColor: "#f97316", color: "#fff" }}
                  className="flex items-center justify-center w-10 h-10 text-gray-600 transition-all bg-gray-100 shadow-sm rounded-xl dark:bg-zinc-800 dark:text-gray-300"
                  href="#"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[#021b52] dark:text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                <li className="transition-colors cursor-pointer hover:text-orange-500">Frontend Dev</li>
                <li className="transition-colors cursor-pointer hover:text-orange-500">MERN Stack</li>
                <li className="transition-colors cursor-pointer hover:text-orange-500">UI/UX Design</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#021b52] dark:text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                <li className="transition-colors cursor-pointer hover:text-orange-500">About Me</li>
                <li className="transition-colors cursor-pointer hover:text-orange-500">Projects</li>
                <li className="transition-colors cursor-pointer hover:text-orange-500">Contact</li>
              </ul>
            </div>
          </div>

          {/* 3. Newsletter / Quote */}
          <div className="bg-orange-500/5 dark:bg-orange-500/10 p-8 rounded-[2rem] border border-orange-500/10">
            <h4 className="text-lg font-bold text-[#021b52] dark:text-white mb-4">Start a project?</h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              I’m available for freelance projects and full-time positions.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 font-bold text-white bg-orange-500 shadow-lg cursor-pointer rounded-xl shadow-orange-500/20"
            >
              Hire Me Now
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar: Copyright Section */}
        <div className="flex flex-col items-center justify-between gap-6 pt-10 border-t border-gray-100 dark:border-zinc-800 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <span>©</span> {currentYear} <span className="font-bold text-[#021b52] dark:text-white">Shiful Islam.</span> All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            Developed with <FaHeart className="text-red-500 animate-pulse" /> by <span className="font-bold text-orange-500 cursor-pointer">Shiful</span>
          </div>
        </div>
      </div>

      {/* Background Animated Glow */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
    </footer>
  );
};

export default Footer;