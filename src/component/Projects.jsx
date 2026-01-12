import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaGlobe,
  FaReact,
  FaLayerGroup,
  FaServer
} from "react-icons/fa";
import { projectsData } from "./projectsData";

const categories = [
  { name: "All", icon: <FaGlobe /> },
  { name: "Frontend", icon: <FaReact /> },
  { name: "MERN Stack", icon: <FaLayerGroup /> },
  { name: "Full Stack", icon: <FaServer /> },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleTabChange = (cat) => {
    setActiveTab(cat);
    setCurrentPage(1);
  };

  return (
    <section
      id="projects"
      className="dark:bg-[#160014] py-40 px-6 md:px-20 transition-colors duration-500 overflow-hidden relative"
    >
      {/* REAL LEAF SHAPES BACKGROUND */}
      
      {/* Left Leaf */}
      <div className="absolute -left-25 top-20 w-[700px] h-[800px] pointer-events-none opacity-10 dark:opacity-5 -z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-orange-500">
          <path d="M100,0 C150,50 200,100 100,200 C0,100 50,50 100,0 Z" transform="rotate(-30 100 100)" />
        </svg>
      </div>

      {/* Right Leaf */}
      <div className="absolute -right-30 bottom-0 w-[800px] h-[900px] pointer-events-none opacity-10 dark:opacity-5 -z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-blue-500">
          <path d="M100,0 C150,50 200,100 100,200 C0,100 50,50 100,0 Z" transform="rotate(150 100 100)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-bold uppercase tracking-[0.3em] mb-4 text-sm"
          >
            Recent Projects
          </motion.h4>
          <h2 className="text-xl md:text-[24px] font-extrabold mb-6 text-[#000b69] dark:text-white leading-tight font-title title-shadow-sm">
            Latest <span className="text-[#ff6900]">Masterpieces</span>
          </h2>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleTabChange(cat.name)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${
                activeTab === cat.name
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-gray-100 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-800"
              }`}
            >
              <span className={`text-lg ${activeTab === cat.name ? "text-white" : "text-orange-500"}`}>
                {cat.icon}
              </span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group bg-white/90 dark:bg-[#161b22]/90 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 dark:border-zinc-800 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-7">
                  <h3 className="text-[20px] font-bold text-[#021b52] dark:text-gray-100 mb-3 leading-tight group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-relaxed mb-6 line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-[11px] font-semibold bg-gray-50 dark:bg-zinc-800/50 text-gray-600 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 mt-auto">
                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white text-[12px] font-bold rounded-xl hover:bg-zinc-200 transition-all"
                    >
                      <FaGithub size={16} /> GitHub
                    </motion.a>
                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-orange-500 text-white text-[12px] font-bold rounded-xl hover:bg-orange-600 shadow-lg transition-all"
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-16">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="p-3 transition-all bg-gray-100 cursor-pointer dark:bg-zinc-800 rounded-xl disabled:opacity-30 hover:bg-orange-500 hover:text-white"
            >
              <FaChevronLeft />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-11 h-11 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                    currentPage === i + 1 ? "bg-orange-500 text-white scale-110" : "bg-gray-100 dark:bg-zinc-800 text-gray-400"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="p-3 transition-all bg-gray-100 cursor-pointer dark:bg-zinc-800 rounded-xl disabled:opacity-30 hover:bg-orange-500 hover:text-white"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;