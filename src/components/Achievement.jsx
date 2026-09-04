import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.png";
import certificate3 from "../assets/certificate3.jpg";
import certificate4 from "../assets/certificate4.png";
import CertificatePDF1 from "../assets/[Cambodia] CTF for Cam and Laos - Certificate_Mr. Chort Sereivathana.pdf";
import CertificatePDF2 from "../assets/117-Chort Sereivathana-Python.pdf";
import CertificatePDF4 from "../assets/14_Chort Sereivathana-STEM.pdf";
import IELTS from "../assets/IELTS.png";

const achievements = [
  {
    id: 5,
    titleKey: "achievements.items.ielts.title",
    descriptionKey: "achievements.items.ielts.description",
    icon: IELTS,
    certificateLink: "#",
  },
  {
    id: 1,
    titleKey: "achievements.items.ctf.title",
    descriptionKey: "achievements.items.ctf.description",
    icon: certificate1,
    certificateLink: CertificatePDF1,
  },
  {
    id: 2,
    titleKey: "achievements.items.python.title",
    descriptionKey: "achievements.items.python.description",
    icon: certificate2,
    certificateLink: CertificatePDF2,
  },
  {
    id: 3,
    titleKey: "achievements.items.uxui.title",
    descriptionKey: "achievements.items.uxui.description",
    icon: certificate3,
    certificateLink: certificate3,
  },
  {
    id: 4,
    titleKey: "achievements.items.camstem.title",
    descriptionKey: "achievements.items.camstem.description",
    icon: certificate4,
    certificateLink: CertificatePDF4,
  },
];

const AchievementCard = ({ achievement, isDark, t, index }) => (
  <motion.div
    variants={fadeIn("up", 0.1 + index * 0.05)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
    className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] max-w-[340px] snap-center flex-shrink-0 group h-full cursor-pointer"
  >
    <div
      className={`rounded-[20px] h-full overflow-hidden transition-all duration-300 flex flex-col border ${
        isDark
          ? "bg-slate-900/55 border-teal-500/20 hover:border-teal-500/60 hover:shadow-[0_0_22px_rgba(20,184,166,0.18)]"
          : "bg-white/80 border-teal-600/10 hover:border-teal-600/40 hover:shadow-[0_0_22px_rgba(13,148,136,0.15)]"
      }`}
    >
      {/* Image Section - Fixed height */}
      <div className="w-full h-[180px] overflow-hidden relative border-b border-white/10 flex-shrink-0">
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-300 group-hover:opacity-10 ${
            isDark
              ? "bg-gradient-to-t from-slate-950 to-transparent"
              : "bg-gradient-to-t from-white to-transparent"
          }`}
        ></div>
        <img
          src={achievement.icon}
          alt={t(achievement.titleKey)}
          className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content Section - Flexible height with flex-grow */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Title - Fixed height with line clamping */}
        <h3
          className={`text-base sm:text-lg font-bold mb-2 transition-colors duration-300 line-clamp-2 min-h-[3.5rem] ${
            isDark
              ? "text-slate-100 group-hover:text-teal-300"
              : "text-slate-900 group-hover:text-teal-600"
          }`}
        >
          {t(achievement.titleKey)}
        </h3>

        {/* Description - Fixed height with line clamping */}
        <p
          className={`text-sm leading-relaxed mb-4 flex-grow line-clamp-3 min-h-[4.5rem] ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          {t(achievement.descriptionKey)}
        </p>

        {/* Button - Always at bottom */}
        <a
          href={achievement.certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex cursor-pointer items-center justify-center gap-2 font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 mt-auto w-full ${
            achievement.certificateLink && achievement.certificateLink !== "#"
              ? isDark
                ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-300 hover:from-teal-500 hover:to-cyan-500 hover:text-slate-950 hover:shadow-[0_0_14px_rgba(20,184,166,0.28)]"
                : "bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-300/60 text-teal-700 hover:from-teal-500 hover:to-cyan-500 hover:text-white hover:shadow-[0_0_14px_rgba(13,148,136,0.22)]"
              : isDark
                ? "bg-slate-800/30 border border-slate-700/60 text-slate-500 cursor-not-allowed"
                : "bg-slate-200/60 border border-slate-300/60 text-slate-500 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (
              !achievement.certificateLink ||
              achievement.certificateLink === "#"
            ) {
              e.preventDefault();
            }
          }}
        >
          {t("achievements.viewCertificate")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
);

const Achievement = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section
      id="achievements"
      className={`min-h-screen px-4 md:px-8 relative z-10 w-full transition-colors duration-300 flex items-center ${
        isDark
          ? "bg-slate-950"
          : "bg-gradient-to-br from-slate-50 via-slate-50 to-cyan-50"
      }`}
    >
      {/* Decorative background */}
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${
          isDark ? "opacity-15" : "opacity-3"
        }`}
      >
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full ${
            isDark ? "bg-teal-500" : "bg-teal-400"
          } blur-3xl`}
        ></div>
        <div
          className={`absolute bottom-0 left-1/2 w-80 h-80 rounded-full ${
            isDark ? "bg-cyan-500" : "bg-cyan-300"
          } blur-3xl`}
        ></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? "#fff" : "#000"} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span
              className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full ${
                isDark
                  ? "text-teal-300 bg-teal-500/15 border border-teal-500/30"
                  : "text-teal-700 bg-teal-100 border border-teal-200"
              }`}
            >
              {t("achievements.badge")}
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? "text-slate-50" : "text-slate-900"
            }`}
          >
            {t("achievements.subtitle")}
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {t("achievements.description") ||
              "Recognition & Milestones achieved throughout my journey"}
          </p>
        </motion.div>

        {/* Carousel Wrapper */}
        <div className="relative group/carousel">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hidden sm:flex items-center justify-center cursor-pointer ${
              isDark
                ? "bg-slate-900/80 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500 text-teal-500 hover:text-slate-950"
                : "bg-white/80 border border-slate-200 hover:border-teal-600/50 hover:bg-teal-600 text-teal-600 hover:text-white"
            }`}
          >
            <FaChevronLeft className="text-lg" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hidden sm:flex items-center justify-center cursor-pointer ${
              isDark
                ? "bg-slate-900/80 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500 text-teal-500 hover:text-slate-950"
                : "bg-white/80 border border-slate-200 hover:border-teal-600/50 hover:bg-teal-600 text-teal-600 hover:text-white"
            }`}
          >
            <FaChevronRight className="text-lg" />
          </button>

          {/* Gradient Fade Masks */}
          <div
            className={`absolute top-0 left-0 w-12 sm:w-24 h-full bg-gradient-to-r ${
              isDark ? "from-slate-950" : "from-slate-50"
            } to-transparent z-20 pointer-events-none rounded-l-2xl`}
          ></div>
          <div
            className={`absolute top-0 right-0 w-12 sm:w-24 h-full bg-gradient-to-l ${
              isDark ? "from-slate-950" : "from-slate-50"
            } to-transparent z-20 pointer-events-none rounded-r-2xl`}
          ></div>

          {/* Scrollable Container */}
          <motion.div
            ref={scrollRef}
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex overflow-x-auto gap-5 sm:gap-6 pb-8 pt-4 px-3 md:px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch"
          >
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                isDark={isDark}
                t={t}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Mobile info */}
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className={`text-center text-xs sm:hidden mt-4 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {t("achievements.swipeHint") || "Swipe to see more →"}
        </motion.p>
      </div>
    </section>
  );
};

export default Achievement;
