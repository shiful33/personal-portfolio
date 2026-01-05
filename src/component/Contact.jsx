import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনার API logic থাকবে
    console.log(formData);
    
    // Successful Alert
    Swal.fire({
      title: 'Success!',
      text: 'Thank you, Shiful will contact you soon.',
      icon: 'success',
      confirmButtonColor: '#f97316',
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden dark:bg-[#160014]">
      {/* Background Animated Shapes */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-64 h-64 rounded-full -top-20 -left-20 bg-orange-500/10 blur-3xl -z-10"
      />

      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left Side: Contact Info & Shapes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-[2px] bg-orange-500"></div>
               <span className="font-bold tracking-widest text-orange-500 uppercase">Get In Touch</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-black text-[#021b52] dark:text-white mb-8">
              Book <span className="text-orange-500">Now</span> & Let's <br /> Build Something!
            </h2>

            {/* Contact Details */}
            <div className="mb-10 space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="flex items-center justify-center w-12 h-12 text-orange-500 transition-all bg-white shadow-lg dark:bg-zinc-800 rounded-xl group-hover:bg-orange-500 group-hover:text-white">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase">Email Me</p>
                  <p className="text-lg font-bold text-[#021b52] dark:text-white">shwapon.joti@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="flex items-center justify-center w-12 h-12 text-orange-500 transition-all bg-white shadow-lg dark:bg-zinc-800 rounded-xl group-hover:bg-orange-500 group-hover:text-white">
                  <BsWhatsapp />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase">WhatsApp Me</p>
                  <p className="text-lg font-bold text-[#021b52] dark:text-white">+8801711-037548</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="flex items-center justify-center w-12 h-12 text-orange-500 transition-all bg-white shadow-lg dark:bg-zinc-800 rounded-xl group-hover:bg-orange-500 group-hover:text-white">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase">Location</p>
                  <p className="text-lg font-bold text-[#021b52] dark:text-white">Faridpur, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[<FaFacebook />, <FaGithub />, <FaLinkedin />].map((icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-xl text-[#021b52] dark:text-white hover:text-orange-500 transition-all cursor-pointer shadow-md"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Dynamic Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white dark:border-zinc-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#021b52] dark:text-white mb-2">Your Name</label>
                <input 
                  type="text" required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 transition-all border border-gray-200 outline-none bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 rounded-2xl focus:border-orange-500 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#021b52] dark:text-white mb-2">Email Address</label>
                <input 
                  type="email" required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 transition-all border border-gray-200 outline-none bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 rounded-2xl focus:border-orange-500 dark:text-white"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#021b52] dark:text-white mb-2">Message</label>
                <textarea 
                  rows="4" required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-6 py-4 transition-all border border-gray-200 outline-none bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 rounded-2xl focus:border-orange-500 dark:text-white"
                  placeholder="Tell me about your project"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 font-bold tracking-widest text-white uppercase transition-all bg-orange-500 shadow-lg cursor-pointer hover:bg-orange-600 rounded-2xl shadow-orange-500/30"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;