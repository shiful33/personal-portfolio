import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFBF8]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-widest text-[#000b69] md:text-6xl">
          Shiful Islam<span className="text-orange-500">.</span>
        </h1>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[4px] bg-orange-500 mt-2"
        />
        
        <p className="mt-4 tracking-widest text-gray-500 uppercase text-md">
          Portfolio is Loading...
        </p>
      </motion.div>

      <div className="flex mt-8 space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="w-3 h-3 bg-orange-500 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;