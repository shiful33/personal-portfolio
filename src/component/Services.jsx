import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaLayerGroup } from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "FrontEnd Development",
    icon: <FaCode />,
    desc: "I create visually stunning and highly interactive user interfaces. I focus on responsive design and smooth animations to provide the best user experience.",
    tech: "Technologies: React.js, Tailwind CSS, Framer Motion, Redux, JavaScript (ES6+), and HTML5/CSS3.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "02",
    title: "MERN Stack Development",
    icon: <FaLayerGroup />,
    desc: "Providing full-stack solutions with the MERN power. From architecting the database to building the front-end, I handle the entire development lifecycle.",
    tech: "Stack: MongoDB, Express.js, React.js, Node.js, Rest APIs, and JWT Authentication.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: "03",
    title: "BackEnd Development",
    icon: <FaDatabase />,
    desc: "I build robust and scalable server-side applications. I ensure data security, efficient database management, and fast API response times.",
    tech: "Tools: Node.js, Express, MongoDB (Mongoose), Firebase, Postman, and Server-side Security.",
    color: "from-green-500 to-emerald-400",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-40 px-6 relative overflow-hidden dark:bg-[#160014]">
      {/* Background Glow Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-bold uppercase tracking-[0.2em] mb-3 text-sm"
          >
            Expertise
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-[24px] font-extrabold mb-6 text-[#021b52] dark:text-white leading-tight font-title"
          >
            My Specialized <span className="text-orange-500">Services</span>
          </motion.h2>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="relative p-10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl border border-gray-100 dark:border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden group transition-all duration-500"
            >
              {/* Floating Background Icon for styling */}
              <div className="absolute text-gray-100 transition-colors duration-500 -right-6 -bottom-6 text-9xl dark:text-zinc-800/20 group-hover:text-orange-500/5 -z-10">
                {service.icon}
              </div>

              {/* Icon Animation */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl text-white mb-8 shadow-xl shadow-blue-500/10`}
              >
                {service.icon}
              </motion.div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-4 text-[#021b52] dark:text-white">
                {service.title}
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                {service.desc}
              </p>

              {/* Tech Stack Paragraph (Visible & Stylish) */}
              <div className="pt-6 border-t border-gray-100 dark:border-zinc-800">
                <p className="text-sm italic font-medium leading-snug text-orange-600 dark:text-orange-400/80">
                  {service.tech}
                </p>
              </div>

              {/* Hover Effect Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-orange-500 to-blue-500 w-0 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;