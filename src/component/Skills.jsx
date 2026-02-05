import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ১. ইমপোর্ট করো
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  const { t } = useTranslation(); // ২. হুক কল করো

  const skills = [
    {
      name: "React",
      icon: <FaReact />,
      color: "text-[#61DBFB]",
      shadow: "group-hover:shadow-[#61DBFB]/30",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "text-[#68a063]",
      shadow: "group-hover:shadow-[#68a063]/30",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "text-[#f7df1e]",
      shadow: "group-hover:shadow-[#f7df1e]/30",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-[#47A248]",
      shadow: "group-hover:shadow-[#47A248]/30",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      color: "text-gray-400",
      shadow: "group-hover:shadow-gray-400/30",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "text-[#38bdf8]",
      shadow: "group-hover:shadow-[#38bdf8]/30",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "text-[#e34c26]",
      shadow: "group-hover:shadow-[#e34c26]/30",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "text-[#264de4]",
      shadow: "group-hover:shadow-[#264de4]/30",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "text-[#ffca28]",
      shadow: "group-hover:shadow-[#ffca28]/30",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "text-[#000000] dark:text-white",
      shadow: "group-hover:shadow-white/20",
    },
  ];

  return (
    <section
      id="skills"
      className="dark:bg-[#160014] py-24 px-6 overflow-hidden transition-colors duration-500"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold tracking-[0.3em] text-orange-500 uppercase text-sm mb-2"
          >
            {t("skills_title")} 
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[22px] md:text-3xl font-extrabold text-[#000b69] dark:text-white leading-tight font-title"
          >
            {t("skills_subtitle").split(" ")[0]}{" "}
            <span className="text-[#ff6900]">
              {t("skills_subtitle").split(" ").slice(1).join(" ")}
            </span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#ff6900] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div
                className={`relative flex flex-col items-center p-8 bg-white dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 rounded-2xl shadow-xl transition-all duration-300 ${skill.shadow} group-hover:border-orange-500/50`}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className={`text-5xl mb-4 ${skill.color} drop-shadow-md`}
                >
                  {skill.icon}
                </motion.div>

                <h3 className="font-bold tracking-wide text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>

                {/* Bottom Line Animation */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 group-hover:w-[80%] rounded-t-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
