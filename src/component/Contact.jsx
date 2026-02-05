import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_yh2yzbx",
        "template_ktrp86w",
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: "Shiful Islam",
          message: formData.message,
        },
        "nyUmH1-O6sffLgM9L",
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            title: t("alert_success"),
            text: t("alert_success_msg"),
            icon: "success",
            confirmButtonColor: "#f97316",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          Swal.fire({
            title: t("alert_error"),
            text: t("alert_error_msg"),
            icon: "error",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-40 px-6 relative overflow-hidden dark:bg-[#160014] z-0"
    >
      {/* Background Global Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="text-orange-500/10"
        >
          <FaGlobe size={700} className="opacity-10 dark:opacity-20" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-orange-500"></div>
              <span className="font-bold tracking-widest text-orange-500 uppercase text-shadow-sm">
                {t("contact_header")}
              </span>
            </div>
            <h2 className="text-[22px] md:text-3xl font-black text-[#000b69] dark:text-white mb-8 text-shadow-sm">
              {t("contact_title_1")}{" "}
              <span className="text-orange-500">{t("contact_title_2")}</span>
              {t("contact_title_3")}
            </h2>

            <div className="mb-10 space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5 group">
                <div className="flex items-center justify-center w-12 h-12 text-yellow-500 bg-white shadow-lg dark:bg-zinc-800 rounded-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase text-shadow-sm">
                    {t("contact_email")}
                  </p>
                  <p className="text-lg font-bold text-[#021b52] dark:text-white text-shadow-sm">
                    shwapon.joti@gmail.com
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-5 group">
                <div className="flex items-center justify-center w-12 h-12 text-green-600 bg-white shadow-lg dark:bg-zinc-800 rounded-xl">
                  <BsWhatsapp />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase text-shadow-sm">
                    {t("contact_whatsapp")}
                  </p>
                  <p className="text-lg font-bold text-[#021b52] dark:text-white text-shadow-sm">
                    +8801711-037548
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 group">
                <div className="flex items-center justify-center w-12 h-12 bg-white shadow-lg text-zinc-900 dark:bg-zinc-800 rounded-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase text-shadow-sm">
                    {t("contact_location")}
                  </p>
                  <p className="text-lg font-bold text-[#021b52] dark:text-white text-shadow-sm">
                    Faridpur, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                {
                  icon: <FaFacebook />,
                  link: "https://facebook.com/your-username",
                },
                { icon: <FaGithub />, link: "https://github.com/shiful33" },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/shiful-islam-webdeveloper",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-xl text-[#021b52] dark:text-white hover:text-[#ff6900] transition-all shadow-md text-shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white dark:border-zinc-800 text-shadow-sm"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#021b52] dark:text-white mb-2 text-shadow-sm">
                  {t("form_name")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-6 py-4 border border-gray-200 outline-none bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 rounded-2xl focus:border-orange-500 dark:text-white text-shadow-sm"
                  placeholder={t("form_placeholder_name")}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#021b52] dark:text-white mb-2 text-shadow-sm">
                  {t("form_email")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-6 py-4 border border-gray-200 outline-none bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 rounded-2xl focus:border-orange-500 dark:text-white text-shadow-sm"
                  placeholder={t("form_placeholder_email")}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#021b52] dark:text-white mb-2 text-shadow-sm">
                  {t("form_message")}
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-6 py-4 border border-gray-200 outline-none bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 rounded-2xl focus:border-orange-500 dark:text-white text-shadow-sm"
                  placeholder={t("form_placeholder_msg")}
                ></textarea>
              </div>

              <motion.button
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 font-bold tracking-widest text-white uppercase bg-[#ff6900] shadow-lg cursor-pointer hover:bg-orange-600 rounded-2xl text-shadow-sm"
              >
                {loading ? t("form_sending") : t("form_button")}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
