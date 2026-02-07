import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./component/NavBar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import About from "./component/About";
import TopToDown from "./component/TopToDown";
import ChatBot from "./component/ChatBot";
import SkillMarquee from "./component/SkillMarquee";
import Loader from "./component/Loader";
import { useTranslation } from 'react-i18next';
import Certification from "./component/Certification";


function App() {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
    <div className="overflow-x-hidden w-full min-h-screen relative bg-white dark:bg-[#160014]">

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <section>
              <i18n />
            </section>
            <section id="hero">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>

            <section id="certification">
              <Certification />
            </section>

            <section id="skillMarquee">
              <SkillMarquee />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="services">
              <Services />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </main>

          <Footer />
          <ChatBot />
          <TopToDown />
        </motion.div>
      )}
    </div>
  </div>
  );
}

export default App;
