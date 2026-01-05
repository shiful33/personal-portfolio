import React from 'react';
import Navbar from './component/NavBar';
import Hero from './component/Hero';
import Skills from './component/Skills';
import Services from './component/Services';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Projects from './component/Projects';
import About from './component/About';
import TopToDown from './component/TopToDown';
import ChatBot from './component/ChatBot';



function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-orange-500/30">
      
      <Navbar />

      <main>
        <Hero />
        <section id="projects" className="">
          <About />
        </section>

        <section id="skills" className="">
         <Skills />
        </section>

        <section id="services" className="">
         <Services />
        </section>

        <section id="projects" className="">
         <Projects />
        </section>

        <section id="contact" className="">
         <Contact />
        </section>
      </main>

      <Footer />
      <ChatBot />
      <TopToDown />
      
    </div>
  );
}

export default App;