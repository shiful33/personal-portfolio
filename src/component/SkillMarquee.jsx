import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt 
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiFramer, SiNextdotjs, SiVite } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
  { icon: <SiVite />, name: "Vite", color: "#646CFF" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
  { icon: <SiExpress />, name: "Express", color: "#000000" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
  { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
  { icon: <SiFramer />, name: "Framer Motion", color: "#0055FF" },
];

const SkillMarquee = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="dark:bg-[#160014] bg-white py-20 overflow-hidden transition-colors duration-500 dark:border-zinc-800">

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {duplicatedSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 mx-8 cursor-pointer group"
            >
              <div 
                className="text-4xl transition-transform duration-300 md:text-5xl group-hover:scale-125"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="text-lg font-bold text-gray-600 transition-colors dark:text-gray-300 group-hover:text-orange-500">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillMarquee;