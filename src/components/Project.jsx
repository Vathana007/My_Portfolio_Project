import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project4 from "../assets/project4.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const projectsData = [
  {
    id: 1,
    titleKey: "projects.items.employeetask.title",
    descriptionKey: "projects.items.employeetask.description",
    image: project1,
    link: "https://github.com/Vathana007/employee-task",
  },
  {
    id: 2,
    titleKey: "projects.items.pos.title",
    descriptionKey: "projects.items.pos.description",
    image: project7,
    link: "https://gitlab.com/sonlychao169/phone_shop",
  },
  {
    id: 3,
    titleKey: "projects.items.portfolio.title",
    descriptionKey: "projects.items.portfolio.description",
    image: project4,
    link: "https://my-portfolio-project-delta-seven.vercel.app/",
  },
  {
    id: 4,
    titleKey: "projects.items.kore.title",
    descriptionKey: "projects.items.kore.description",
    image: project1,
    link: "https://github.com/Vathana007/Kore_Capstone_Project",
  },
  {
    id: 5,
    titleKey: "projects.items.movie.title",
    descriptionKey: "projects.items.movie.description",
    image: project2,
    link: "https://github.com/Vathana007/Movie_Website",
  },
  {
    id: 6,
    titleKey: "projects.items.coffee.title",
    descriptionKey: "projects.items.coffee.description",
    image: project6,
    link: "https://github.com/Vathana007/Coffee_Shop_App",
  },
];

const ProjectCard = ({ project, isDark, t, index }) => (
  <motion.div
    variants={fadeIn("up", 0.1 + index * 0.05)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
    className="min-w-[220px] sm:min-w-[250px] max-w-[300px] snap-center flex-shrink-0 group h-full cursor-pointer"
  >
    <div
      className={`rounded-[20px] h-full overflow-hidden transition-all duration-300 flex flex-col border ${
        isDark
          ? "bg-slate-900/55 border-teal-500/20 hover:border-teal-500/60 hover:shadow-[0_0_22px_rgba(20,184,166,0.18)]"
          : "bg-white/80 border-teal-600/10 hover:border-teal-600/40 hover:shadow-[0_0_22px_rgba(13,148,136,0.15)]"
      }`}
    >
      {project.image && (
        <div className="w-full h-[160px] overflow-hidden relative border-b border-white/10">
          <div
            className={`absolute inset-0 z-10 transition-opacity duration-300 group-hover:opacity-10 ${
              isDark
                ? "bg-gradient-to-t from-slate-950 to-transparent"
                : "bg-gradient-to-t from-white to-transparent"
            }`}
          ></div>
          <img
            src={project.image}
            alt={t(project.titleKey)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3
          className={`text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 ${
            isDark
              ? "text-slate-100 group-hover:text-teal-300"
              : "text-slate-900 group-hover:text-teal-600"
          }`}
        >
          {t(project.titleKey)}
        </h3>

        <p
          className={`text-sm leading-relaxed mb-4 flex-grow ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          {t(project.descriptionKey)}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex cursor-pointer items-center justify-center gap-2 font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 mt-auto ${
            project.link
              ? isDark
                ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-300 hover:from-teal-500 hover:to-cyan-500 hover:text-slate-950 hover:shadow-[0_0_14px_rgba(20,184,166,0.28)]"
                : "bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-300/60 text-teal-700 hover:from-teal-500 hover:to-cyan-500 hover:text-white hover:shadow-[0_0_14px_rgba(13,148,136,0.22)]"
              : isDark
                ? "bg-slate-800/30 border border-slate-700/60 text-slate-500 cursor-not-allowed"
                : "bg-slate-200/60 border border-slate-300/60 text-slate-500 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!project.link) {
              e.preventDefault();
            }
          }}
        >
          {t("projects.viewProject")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
);

const Project = () => {
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
    <>
      <section
        id="projects"
        className={`py-20 px-4 md:px-8 relative z-10 w-full transition-colors duration-300 ${
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

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
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
                {t("projects.badge")}
              </span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDark ? "text-slate-50" : "text-slate-900"
              }`}
            >
              {t("projects.title")}
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {t("projects.subtitle")}
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

            <div
              className={`absolute top-0 left-0 w-8 sm:w-16 h-full bg-gradient-to-r ${
                isDark ? "from-slate-950" : "from-slate-50"
              } to-transparent z-20 pointer-events-none rounded-l-2xl`}
            ></div>
            <div
              className={`absolute top-0 right-0 w-8 sm:w-16 h-full bg-gradient-to-l ${
                isDark ? "from-slate-950" : "from-slate-50"
              } to-transparent z-20 pointer-events-none rounded-r-2xl`}
            ></div>

            <motion.div
              ref={scrollRef}
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex overflow-x-auto gap-4 sm:gap-5 pb-8 pt-4 px-3 md:px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch"
            >
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
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
            {t("projects.swipeHint")} →
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Project;
