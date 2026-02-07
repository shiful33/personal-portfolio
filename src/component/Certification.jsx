import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaGraduationCap, 
  FaAward, 
  FaShieldAlt, 
  FaLaptopCode,
  FaCalendarAlt,
  FaBuilding
} from "react-icons/fa";

const Certification = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const certifications = [
    {
      id: 1,
      company: "Programming Hero",
      subject: "Frontend Developer",
      duration: "01/06/2025 To 31/01/2026",
      icon: <FaLaptopCode />,
      color: "from-[#ff6900] to-[#e05e00]",
    },
    {
      id: 2,
      company: "MSB Academy",
      subject: "WordPress theme and plugin customization",
      duration: "01/03/2023 To 30/06/2024",
      icon: <FaAward />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 3,
      company: "MSB Academy",
      subject: "WordPress theme and plugin development",
      duration: "01/11/2023 To 28/02/2024",
      icon: <FaGraduationCap />,
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      company: "MSB Academy",
      subject: "Certified Ethical Hacking Masterclass in Bangla",
      duration: "01/04/2023 To 30/06/2023",
      icon: <FaShieldAlt />,
      color: "from-green-500 to-teal-600",
    },
  ];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section 
      id="certifications" 
      className="py-24 px-6 md:px-20 dark:bg-[#160014] transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container relative z-10 mx-auto">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-20 ${isArabic ? "text-right" : "text-left"}`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <h4 className="text-[#ff6900] font-bold tracking-[0.4em] uppercase text-sm mb-3">
            {t("certification_subtitle", "Verified Skills")}
          </h4>
          <h2 className="text-[22px] md:text-[26px] font-black text-[#000b69] dark:text-white font-title leading-tight text-shadow-sm">
            Training & <span className="text-[#ff6900]">Certifications</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Outer Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500`}></div>
              
              {/* Main Content Card */}
              <div className="relative bg-white/80 dark:bg-[#02001a]/60 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] shadow-2xl h-full flex flex-col md:flex-row gap-6 items-center md:items-start transition-all duration-500 group-hover:bg-white dark:group-hover:bg-[#02001a]">
                
                {/* Icon Section */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-3xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white text-3xl shadow-xl transform group-hover:rotate-6 transition-transform duration-500`}>
                  {cert.icon}
                </div>

                {/* Info Section */}
                <div className={`flex-grow ${isArabic ? "text-right" : "text-left"}`} dir={isArabic ? "rtl" : "ltr"}>
                  <div className="flex flex-col gap-2 mb-3 sm:flex-row sm:items-center sm:gap-4">
                    <span className="flex items-center gap-2 text-[#ff6900] text-xs font-bold uppercase tracking-widest">
                      <FaBuilding className="text-[10px]" /> {cert.company}
                    </span>
                    <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                    <span className="flex items-center gap-2 font-mono text-xs text-gray-500 dark:text-gray-400">
                      <FaCalendarAlt /> {cert.duration}
                    </span>
                  </div>

                  <h3 className="text-[18px] md:text-[22px] font-bold text-[#01073d] dark:text-white leading-snug group-hover:text-[#ff6900] transition-colors">
                    {cert.subject}
                  </h3>

                  {/* Decorative Elements */}
                  <div className="flex items-center gap-2 mt-6">
                    <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                    <div className="w-2 h-1 bg-gray-200 rounded-full dark:bg-gray-800"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;