import React, { useState, useEffect } from "react";
import me from "../assets/image.png";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi2";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const aboutSections = [
    {
      icon: "🎓",
      key: "education",
    },
    {
      icon: "💻",
      key: "frontend",
    },
    {
      icon: "🎨",
      key: "fullstack",
    },
    {
      icon: "📱",
      key: "mobile",
    },
  ];

  return (
    <>
      <section
        id="about"
        className={`min-h-screen relative z-10 w-full overflow-hidden transition-colors duration-300 flex items-center ${
          isDark ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 to-white"
        }`}
      >
        {/* Decorative Elements */}
        <div
          className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full z-0 pointer-events-none blur-[120px] opacity-20 ${
            isDark ? "bg-teal-500" : "bg-teal-400"
          }`}
        ></div>
        <div
          className={`absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full z-0 pointer-events-none blur-[120px] opacity-15 ${
            isDark ? "bg-cyan-500" : "bg-cyan-300"
          }`}
        ></div>

        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
          {/* Mobile Section */}
          <div className="lg:hidden md:w-1/2 text-center md:text-left w-full">
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500">
                  <HiOutlineSparkles className="text-2xl text-white" />
                </div>
                <h1
                  className={`font-extrabold text-3xl sm:text-4xl ${
                    isDark ? "text-slate-200" : "text-slate-900"
                  }`}
                >
                  {t("about.title")}
                </h1>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto md:mx-0 rounded-full"></div>
            </motion.div>

            <motion.p
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className={`text-base sm:text-lg leading-relaxed mb-6 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {t("about.summary")}
            </motion.p>

            <motion.button
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              onClick={openModal}
              className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 cursor-pointer border inline-block ${
                isDark
                  ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-teal-400/50 text-teal-300 hover:from-teal-500/40 hover:to-cyan-500/40 hover:border-teal-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                  : "bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-300/50 text-teal-700 hover:from-teal-100 hover:to-cyan-100 hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]"
              }`}
            >
              {t("about.readMore")} ✨
            </motion.button>
          </div>

          {/* Left Section (Image) */}
          <div className="flex justify-center md:w-1/2 mb-8 md:mb-0 relative group w-full">
            {/* Animated glow effect */}
            <div
              className={`absolute -inset-6 rounded-3xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl ${
                isDark
                  ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20"
                  : "bg-gradient-to-r from-teal-300/20 to-cyan-300/20"
              }`}
            ></div>

            <div
              className={`absolute inset-0 rounded-3xl group-hover:opacity-30 transition-all duration-500 z-0 blur-[50px] ${
                isDark ? "bg-teal-500/20" : "bg-teal-400/30"
              }`}
            ></div>

            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              whileHover={{ y: -8 }}
              className="relative z-10 cursor-pointer"
            >
              <div
                className={`p-1 rounded-3xl backdrop-blur-sm transition-all duration-300 border ${
                  isDark
                    ? "border-white/20 bg-gradient-to-br from-white/10 to-white/5"
                    : "border-slate-200/60 bg-gradient-to-br from-white/60 to-white/30"
                }`}
              >
                <img
                  src={me}
                  alt="Vathana - Full Stack Developer"
                  className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] object-cover relative z-10 duration-500 transition-all rounded-3xl filter grayscale-[15%] hover:grayscale-0 group-hover:shadow-[0_20px_60px_rgba(20,184,166,0.25)]"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute -top-6 -right-6 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md border ${
                  isDark
                    ? "bg-teal-500/20 border-teal-400/50 text-teal-300"
                    : "bg-teal-100/80 border-teal-300 text-teal-700"
                }`}
              >
                💼 {t("about.badges.developer")}
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className={`absolute -bottom-6 -left-6 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md border ${
                  isDark
                    ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-300"
                    : "bg-cyan-100/80 border-cyan-300 text-cyan-700"
                }`}
              >
                🚀 {t("about.badges.engineer")}
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Section */}
          <div className="hidden lg:block md:w-1/2 lg:text-left">
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500">
                  <HiOutlineSparkles className="text-3xl text-white" />
                </div>
                <h1
                  className={`font-extrabold text-5xl ${
                    isDark ? "text-slate-200" : "text-slate-900"
                  }`}
                >
                  {t("about.title")}
                </h1>
              </div>
              <div className="w-20 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
            </motion.div>

            <motion.p
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className={`text-lg leading-relaxed mb-6 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {t("about.summary")}
            </motion.p>

            <motion.button
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              onClick={openModal}
              className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 cursor-pointer border inline-block ${
                isDark
                  ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-teal-400/50 text-teal-300 hover:from-teal-500/40 hover:to-cyan-500/40 hover:border-teal-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                  : "bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-300/50 text-teal-700 hover:from-teal-100 hover:to-cyan-100 hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]"
              }`}
            >
              {t("about.readMore")} ✨
            </motion.button>
          </div>
        </div>

        {/* Premium Modal - Fixed Position */}
        <AnimatePresence>
          {isModalOpen && (
            <>
              {/* Backdrop with fixed positioning */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto ${
                  isDark ? "bg-slate-950/70" : "bg-slate-900/40"
                }`}
                onClick={closeModal}
              >
                {/* Modal content wrapper */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className={`w-full max-w-3xl rounded-2xl border shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh] ${
                    isDark
                      ? "bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-white/10"
                      : "bg-gradient-to-br from-white via-slate-50 to-white border-slate-200/50"
                  }`}
                >
                  {/* Header with gradient - sticky at top */}
                  <div
                    className={`sticky top-6 z-50 px-6 sm:px-8 py-6 sm:py-8 border-b backdrop-blur-md mx-4 rounded-t-lg ${
                      isDark
                        ? "border-white/10 bg-gradient-to-r from-slate-900/95 to-slate-900/85"
                        : "border-slate-200/30 bg-gradient-to-r from-white/95 to-slate-50/95"
                    }`}
                  >
                    {/* Decorative accent */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-400/10 to-cyan-500/10 rounded-bl-full blur-2xl"></div>

                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500">
                          <HiOutlineSparkles className="text-2xl text-white" />
                        </div>
                        <div>
                          <h2
                            className={`text-2xl sm:text-3xl font-black tracking-tight ${
                              isDark ? "text-slate-200" : "text-slate-900"
                            }`}
                          >
                            {t("about.moreDetails")}
                          </h2>
                          <p
                            className={`text-sm ${isDark ? "text-slate-500" : "text-slate-500"}`}
                          >
                            {t("about.subtitle")}
                          </p>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={closeModal}
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 flex-shrink-0 ${
                          isDark
                            ? "border-white/20 bg-white/5 text-slate-300 hover:border-teal-400/50 hover:bg-teal-500/10 hover:text-teal-400"
                            : "border-slate-300 bg-slate-100 text-slate-600 hover:border-teal-400 hover:bg-teal-50 hover:text-teal-600"
                        }`}
                        aria-label="Close modal"
                      >
                        <IoCloseOutline className="text-2xl cursor-pointer" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <div className="overflow-y-auto flex-1">
                    <div className="p-6 sm:p-8">
                      {/* Sections Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {aboutSections.map((section, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group p-6 rounded-xl border transition-all duration-300 hover:translate-y-[-4px] cursor-pointer ${
                              isDark
                                ? "border-white/10 bg-white/5 hover:bg-white/10 hover:border-teal-400/30"
                                : "border-slate-200/50 bg-slate-100/40 hover:bg-slate-200/40 hover:border-teal-300"
                            }`}
                          >
                            <div className="flex gap-4">
                              <div className="text-3xl flex-shrink-0">
                                {section.icon}
                              </div>
                              <div className="flex-1">
                                <h3
                                  className={`font-bold text-lg mb-2 group-hover:text-teal-400 transition-colors ${
                                    isDark ? "text-slate-200" : "text-slate-900"
                                  }`}
                                >
                                  {t(`about.sections.${section.key}.title`)}
                                </h3>
                                <p
                                  className={`leading-relaxed text-sm ${
                                    isDark ? "text-slate-400" : "text-slate-600"
                                  }`}
                                >
                                  {t(`about.sections.${section.key}.content`)}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Skills Preview */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`p-6 rounded-xl border ${
                          isDark
                            ? "border-white/10 bg-gradient-to-r from-teal-500/10 to-cyan-500/10"
                            : "border-teal-200/50 bg-gradient-to-r from-teal-50 to-cyan-50"
                        }`}
                      >
                        <h3
                          className={`font-bold text-lg mb-4 flex items-center gap-2 ${
                            isDark ? "text-slate-200" : "text-slate-900"
                          }`}
                        >
                          🛠️ {t("about.techStack")}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[
                            "React",
                            "Node.js",
                            "Laravel",
                            "Flutter",
                            "MongoDB",
                            "PostgreSQL",
                            "Tailwind",
                            "TypeScript",
                          ].map((tech, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              className={`px-3 py-2 rounded-lg text-sm font-semibold text-center transition-colors ${
                                isDark
                                  ? "bg-teal-500/20 text-teal-300 hover:bg-teal-500/40"
                                  : "bg-teal-200/60 text-teal-700 hover:bg-teal-300"
                              }`}
                            >
                              {tech}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Footer - sticky at bottom */}
                  <motion.div
                    className={`sticky bottom-0 z-50 border-t px-6 sm:px-8 py-6 backdrop-blur-md ${
                      isDark
                        ? "border-white/10 bg-gradient-to-r from-slate-900/95 to-slate-900/85"
                        : "border-slate-200/30 bg-gradient-to-r from-white/95 to-slate-50/95"
                    }`}
                  ></motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default About;
