import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi there! I'm Shiful's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // Auto scroll to bottom when new message arrives
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const botResponses = {
    skills: "Shiful is a MERN Stack expert. He masters React, Next.js, Node.js, and MongoDB.",
    projects: "He has built several premium apps like E-commerce platforms, SaaS dashboards, and Real-time chat apps.",
    contact: "You can reach Shiful at shwapon.joti@gmail.com or via the contact form below.",
    availability: "Shiful is currently open for freelance projects and full-time roles!",
    default: "That's interesting! Would you like to know about Shiful's skills, projects, or how to contact him?"
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    // User Message
    const userMsg = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Bot Thinking & Reply
    setTimeout(() => {
      let reply = botResponses.default;
      const lowerText = text.toLowerCase();

      if (lowerText.includes("skill") || lowerText.includes("tech")) reply = botResponses.skills;
      else if (lowerText.includes("project") || lowerText.includes("work")) reply = botResponses.projects;
      else if (lowerText.includes("contact") || lowerText.includes("email")) reply = botResponses.contact;
      else if (lowerText.includes("hiring") || lowerText.includes("available")) reply = botResponses.availability;

      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-8 left-6 z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="bg-white dark:bg-zinc-900 w-[350px] h-[500px] rounded-[2rem] shadow-2xl border border-gray-100 dark:border-zinc-800 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 text-white bg-orange-500">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                  <FaRobot />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Shiful AI</h3>
                  <p className="text-[10px] opacity-80">Online | Ask me anything</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="transition-transform hover:rotate-90">
                <FaTimes />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-5 space-y-4 overflow-y-auto">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === "bot" ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={idx}
                  className={`flex ${msg.role === "bot" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                      msg.role === "bot"
                        ? "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={scrollRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar">
              {["Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleSend(item)}
                  className="whitespace-nowrap px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-[10px] font-bold dark:text-gray-400 hover:bg-orange-100 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              className="flex gap-2 p-4 border-t border-gray-100 dark:border-zinc-800"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-3 text-sm border-none outline-none bg-gray-50 dark:bg-zinc-800 rounded-xl dark:text-white"
              />
              <button type="submit" className="p-3 text-white transition-transform bg-orange-500 rounded-xl hover:scale-105">
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-16 h-16 text-3xl text-white bg-orange-500 rounded-full shadow-xl cursor-pointer shadow-orange-500/30"
      >
        {isOpen ? <FaTimes /> : <HiChatAlt2 />}
      </motion.button>
    </div>
  );
};

export default ChatBot;