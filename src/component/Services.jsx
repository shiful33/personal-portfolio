import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ১. ইমপোর্ট
import { FaCode, FaLayerGroup, FaServer, FaCubes } from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation(); // ২. হুক কল

  // ৩. অ্যারেটি কম্পোনেন্টের ভেতরে নিয়ে আসা হয়েছে যাতে t() ফাংশন কাজ করে
  const services = [
    {
      id: "01",
      title: t("ser_front_title"),
      icon: <FaCode />,
      desc: t("ser_front_desc"),
      tech: "React.js, Tailwind CSS, Framer Motion",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: "02",
      title: t("ser_mern_title"),
      icon: <FaLayerGroup />,
      desc: t("ser_mern_desc"),
      tech: "MongoDB, Express, React, Node.js",
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: "03",
      title: t("ser_full_title"),
      icon: <FaServer />,
      desc: t("ser_full_desc"),
      tech: "Next.js, REST APIs, Cloud (Vercel/Firebase)",
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <section id="services" className="py-40 px-6 relative w-full max-w-full overflow-hidden dark:bg-[#160014] m-0 border-none">
      
      {/* Background Animated Icon */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -40, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -right-20 text-[25rem] text-orange-500/5 dark:text-white/5"
        >
          <FaCubes />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-bold uppercase tracking-[0.2em] mb-3 text-sm text-shadow-sm"
          >
            {t("service_header")}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[22px] md:text-[26px] font-extrabold mb-6 text-[#000b69] dark:text-white leading-tight font-title text-shadow-sm"
          >
            {t("service_title").split(' ').slice(0, -1).join(' ')} <span className="text-[#ff6900]">{t("service_title").split(' ').pop()}</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#ff6900] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="relative p-10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl border border-gray-100 dark:border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden group transition-all duration-500 text-shadow-sm"
            >
              {/* Floating Background Icon */}
              <div className="absolute text-gray-100 transition-colors duration-500 -right-6 -bottom-6 text-9xl dark:text-zinc-800/20 group-hover:text-orange-500/5 -z-10">
                {service.icon}
              </div>

              {/* Top Icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl text-white mb-8 shadow-lg shadow-orange-500/10`}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-[#021b52] dark:text-white">
                {service.title}
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                {service.desc}
              </p>

              <div className="pt-6 border-t border-gray-100 dark:border-zinc-800">
                <p className="text-sm font-bold text-orange-600 dark:text-orange-400/80">
                  {service.tech}
                </p>
              </div>

              {/* Bottom Animated Line */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-orange-500 to-blue-500 w-0 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;