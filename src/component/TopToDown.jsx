import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const TopToDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[999] p-3 rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/30 cursor-pointer border-2 border-white/20 hover:bg-orange-600 transition-colors"
          title="Go to Top"
        >
          <FaArrowUp className="text-xl" />
          
          <span className="absolute inset-0 bg-orange-500 rounded-2xl animate-ping opacity-20 -z-10"></span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default TopToDown;