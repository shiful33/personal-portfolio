import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt 
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, color: "text-[#61DBFB]", shadow: "shadow-[#61DBFB]/20" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-[#68a063]", shadow: "shadow-[#68a063]/20" },
  { name: "JavaScript", icon: <FaJs />, color: "text-[#f7df1e]", shadow: "shadow-[#f7df1e]/20" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]", shadow: "shadow-[#47A248]/20" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-500", shadow: "shadow-gray-500/20" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#38bdf8]", shadow: "shadow-[#38bdf8]/20" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-[#e34c26]", shadow: "shadow-[#e34c26]/20" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-[#264de4]", shadow: "shadow-[#264de4]/20" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-[#ffca28]", shadow: "shadow-[#ffca28]/20" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-[#f1502f]", shadow: "shadow-[#f1502f]/20" },
];

const Skills = () => {
  return (
    <section id="skills" className="dark:bg-[#160014] py-40 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bold tracking-widest text-orange-500 uppercase"
          >
            My Expertise
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-[24px] font-extrabold mb-6 text-[#000b69] dark:text-white leading-tight font-title title-shadow-sm"
          >
            Technologies <span className="text-[#ff6900]"> I Use</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              {/* Background Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-orange-500/20 group-hover:to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>
              
              <div className={`relative flex flex-col items-center p-8 bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-lg group-hover:border-orange-500/30 transition-all duration-300 ${skill.shadow}`}>
                
                {/* Floating Animated Icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2 
                  }}
                  className={`text-5xl mb-4 ${skill.color}`}
                >
                  {skill.icon}
                </motion.div>

                <h3 className="font-bold tracking-wide text-gray-700 dark:text-gray-300">
                  {skill.name}
                </h3>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 w-0 h-1 transition-all duration-500 -translate-x-1/2 bg-orange-500 left-1/2 group-hover:w-full rounded-b-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;