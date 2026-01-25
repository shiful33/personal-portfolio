import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi there! I'm Shiful's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const botResponses = {
    skills: "Shiful is a MERN Stack expert. He masters React, Next.js, Node.js, and MongoDB.",
    projects: "He has built several premium apps like E-commerce platforms, SaaS dashboards, and Real-time chat apps.",
    contact: "You can reach Shiful at shwapon.joti@gmail.com or via the contact with WhatsApp No. +8801711-037548 in below.",
    availability: "Shiful is currently open for freelance projects and full-time roles!",
    default: "That's interesting! Would you like to know about Shiful's skills, projects, or how to contact him?"
  };

  const handleSend = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = botResponses.default;
      const lowerText = text.toLowerCase();
      if (lowerText.includes("skill") || lowerText.includes("tech")) reply = botResponses.skills;
      else if (lowerText.includes("project") || lowerText.includes("work")) reply = botResponses.projects;
      else if (lowerText.includes("contact") || lowerText.includes("email")) reply = botResponses.contact;
      else if (lowerText.includes("hiring") || lowerText.includes("available")) reply = botResponses.availability;

      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 left-6 z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="bg-white dark:bg-zinc-900 w-[350px] h-[580px] rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-zinc-800 flex flex-col overflow-hidden mb-4"
          >
            {/* Header with WhatsApp Icon */}
            <div className="flex items-center justify-between p-5 text-white bg-orange-500">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                  <FaRobot size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Shiful AI</h3>
                  <p className="text-[10px] opacity-90 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Online | WhatsApp Ready
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Header WhatsApp Icon */}
                <a href="https://wa.me/8801711037548" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                  <FaWhatsapp size={20} />
                </a>
                <button onClick={() => setIsOpen(false)} className="transition-transform cursor-pointer hover:rotate-90">
                  <FaTimes size={18} />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-5 space-y-4 overflow-y-auto custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "bot" ? "justify-start" : "justify-end"}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${msg.role === "bot" ? "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200" : "bg-orange-500 text-white shadow-lg shadow-orange-500/20"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-1 p-4 bg-gray-100 dark:bg-zinc-800 rounded-2xl">
                    {[0, 1, 2].map((d) => (
                      <motion.div key={d} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: d * 0.1 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    ))}
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>

            {/* Suggestions & WhatsApp Button */}
            <div className="px-5 py-3 border-t border-gray-50 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
              <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar">
                {["Skills", "Projects", "Contact"].map((item) => (
                  <button key={item} onClick={() => handleSend(item)} className="whitespace-nowrap px-4 py-1.5 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full text-[10px] font-bold dark:text-gray-300 hover:border-orange-500 transition-all cursor-pointer">
                    {item}
                  </button>
                ))}
              </div>
              <a 
                href="https://wa.me/8801711037548?text=Hi%20Shiful,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl text-xs font-bold transition-all shadow-lg shadow-green-500/20"
              >
                <FaWhatsapp size={18} /> Chat on WhatsApp
              </a>
            </div>

            {/* Input */}
            <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="flex gap-2 p-4 bg-white dark:bg-zinc-900">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." className="flex-1 p-3 text-sm bg-gray-100 outline-none dark:bg-zinc-800 rounded-xl dark:text-white" />
              <button type="submit" className="p-3 text-white transition-transform bg-orange-500 cursor-pointer rounded-xl hover:scale-105">
                <FaPaperPlane size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Badge */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center text-3xl text-white bg-orange-500 rounded-full shadow-2xl cursor-pointer h-14 w-14 shadow-orange-500/40"
      >
        {isOpen ? <FaTimes /> : <HiChatAlt2 />}
        {!isOpen && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 bg-[#25D366] w-7 h-7 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900 shadow-lg">
            <FaWhatsapp size={18} className="text-white" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;