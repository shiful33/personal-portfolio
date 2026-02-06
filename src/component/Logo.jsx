import React from "react";
import { motion } from "framer-motion";
import { SiCodeceptjs } from "react-icons/si";

const Logo = () => {
  const letterVariants = {
    initial: { y: 0 },
    hover: (i) => ({
      y: -5,
      transition: {
        duration: 0.3,
        delay: i * 0.03,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };

  const logoText = "Shiful Islam";

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex items-center gap-3 cursor-pointer group"
    >
      <div className="relative">
        <motion.div
          variants={{
            hover: { scale: 1.5, opacity: 0.6, filter: "blur(12px)" },
            initial: { scale: 1, opacity: 0, filter: "blur(0px)" }
          }}
          className="absolute inset-0 bg-orange-500 rounded-xl"
        />
        
        <motion.span
          variants={{
            hover: { rotate: 360, scale: 1.1 },
            initial: { rotate: 0, scale: 1 }
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative z-10 block px-3 py-2 text-white bg-[#ff6900] shadow-lg rounded-xl shadow-orange-500/20"
        >
          <SiCodeceptjs size={24} />
        </motion.span>
      </div>

      <div className="flex overflow-hidden font-black text-gray-700 text-[22px] dark:text-white font-title tracking-tight">
        {logoText.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            className={`inline-block ${char === " " ? "mr-2" : ""}`}
          >
            {char}
          </motion.span>
        ))}
        
        <motion.span
          variants={{
            hover: { scale: [1, 1.5, 1], color: "#ff6900" },
          }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="ml-0.5 text-orange-500"
        >
          .
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Logo;