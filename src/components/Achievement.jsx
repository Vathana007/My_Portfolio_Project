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

const Achievement = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
      if (scrollRef.current) {
          const { scrollLeft, clientWidth } = scrollRef.current;
          const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
          scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      }
  };

  return (
    <>
      <section
        id="achievements"
        className={`py-24 px-6 relative z-10 w-full overflow-hidden transition-colors duration-300 ${
          isDark ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 via-slate-50 to-cyan-50"
        }`}
      >
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${isDark ? "opacity-20" : "opacity-5"}`}>
          <div className={`absolute top-0 right-0 w-96 h-96 rounded-full ${isDark ? "bg-teal-500" : "bg-teal-400"} blur-3xl`}></div>
          <div className={`absolute bottom-0 left-1/2 w-80 h-80 rounded-full ${isDark ? "bg-cyan-500" : "bg-cyan-300"} blur-3xl`}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="mb-16 lg:mb-20"
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
            <h2 className={`font-extrabold lg:text-5xl sm:text-4xl text-3xl mb-4 ${isDark ? "text-slate-50" : "text-slate-900"}`}>
              {t("achievements.subtitle")}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative group/carousel">
            <button
              onClick={() => scroll("left")}
              className={`absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hidden sm:flex items-center justify-center cursor-pointer ${
                isDark
                  ? "bg-slate-900/80 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500 text-teal-500 hover:text-slate-950"
                  : "bg-white/80 border border-slate-200 hover:border-teal-600/50 hover:bg-teal-600 text-teal-600 hover:text-white"
              }`}
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hidden sm:flex items-center justify-center cursor-pointer ${
                isDark
                  ? "bg-slate-900/80 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500 text-teal-500 hover:text-slate-950"
                  : "bg-white/80 border border-slate-200 hover:border-teal-600/50 hover:bg-teal-600 text-teal-600 hover:text-white"
              }`}
            >
              <FaChevronRight className="text-xl" />
            </button>

            <div className={`absolute top-0 left-0 w-8 sm:w-16 h-full bg-gradient-to-r ${isDark ? "from-slate-950" : "from-slate-50"} to-transparent z-20 pointer-events-none rounded-l-2xl`}></div>
            <div className={`absolute top-0 right-0 w-8 sm:w-16 h-full bg-gradient-to-l ${isDark ? "from-slate-950" : "from-slate-50"} to-transparent z-20 pointer-events-none rounded-r-2xl`}></div>

            <motion.div
              ref={scrollRef}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex overflow-x-auto gap-5 sm:gap-6 pb-12 pt-4 px-3 md:px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch text-left"
            >
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`min-w-[225px] sm:min-w-[260px] max-w-[300px] snap-center flex-shrink-0 group hover:-translate-y-1 flex flex-col h-auto relative cursor-pointer transition-all duration-500 overflow-hidden rounded-[22px] ${
                    isDark
                      ? "bg-slate-900/60 border border-white/5 hover:border-teal-500/30 shadow-[0_10px_30px_rgba(2,6,23,0.45)]"
                      : "bg-white/80 border border-teal-600/10 hover:border-teal-600/40 shadow-[0_8px_22px_rgba(15,23,42,0.08)]"
                  }`}
                >
                  <div className={`absolute inset-0 transition-colors duration-500 z-0 pointer-events-none ${isDark ? "bg-teal-500/0 group-hover:bg-teal-500/5" : "bg-teal-500/0 group-hover:bg-teal-500/5"}`}></div>

                  <div className={`w-full h-52 overflow-hidden relative flex items-center justify-center p-4 border-b z-10 ${isDark ? "bg-slate-950 border-white/5" : "bg-slate-100 border-slate-200/80"}`}>
                    <div className={`absolute inset-0 z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-10 ${isDark ? "bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" : "bg-gradient-to-t from-white via-white/20 to-transparent"}`}></div>
                    <img
                      src={achievement.icon}
                      alt={t(achievement.titleKey)}
                      className="w-full h-full object-contain transition duration-700 transform group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(20,184,166,0.25)] z-20 relative"
                    />
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col flex-grow relative z-20">
                    <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-300 mb-2 ${isDark ? "text-slate-200 group-hover:text-teal-400" : "text-slate-900 group-hover:text-teal-600"}`}>
                      {t(achievement.titleKey)}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 flex-grow ${isDark ? "text-slate-400" : "text-slate-700"}`}>
                      {t(achievement.descriptionKey)}
                    </p>
                    <a
                      href={achievement.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex cursor-pointer items-center justify-center gap-2 font-semibold py-2.5 px-4 rounded-lg transition duration-300 mt-auto ${
                        isDark
                          ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-300 hover:from-teal-500 hover:to-cyan-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(20,184,166,0.35)]"
                          : "bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-300/60 text-teal-700 hover:from-teal-500 hover:to-cyan-500 hover:text-white hover:shadow-[0_0_14px_rgba(13,148,136,0.22)]"
                      }`}
                    >
                      {t("achievements.viewCertificate")}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievement;