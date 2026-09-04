import React, { useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaPython,
  FaLaravel,
  FaChevronLeft,
  FaChevronRight,
  FaNodeJs,
  FaVuejs,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiRubyonrails,
  SiFlutter,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const skillsData = [
  {
    key: "php",
    icon: <FaPhp className="text-indigo-300 text-3xl" />,
    level: 85,
    years: "2 years",
    category: "backend",
  },
  {
    key: "laravel",
    icon: <FaLaravel className="text-red-500 text-3xl" />,
    level: 80,
    years: "1.5 years",
    category: "backend",
  },
  {
    key: "rails",
    icon: <SiRubyonrails className="text-red-600 text-3xl" />,
    level: 70,
    years: "8 months",
    category: "backend",
  },
  {
    key: "nodejs",
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
    level: 75,
    years: "1 year",
    category: "backend",
  },
  {
    key: "java",
    icon: <FaJava className="text-red-600 text-3xl" />,
    level: 65,
    years: "6 months",
    category: "backend",
  },
  {
    key: "mysql",
    icon: <SiMysql className="text-blue-500 text-3xl" />,
    level: 85,
    years: "2.5 years",
    category: "database",
  },
  {
    key: "postgresql",
    icon: <SiPostgresql className="text-blue-400 text-3xl" />,
    level: 75,
    years: "1.5 years",
    category: "database",
  },
  {
    key: "mongodb",
    icon: <SiMongodb className="text-green-500 text-3xl" />,
    level: 70,
    years: "1.5 years",
    category: "database",
  },
  {
    key: "python",
    icon: <FaPython className="text-yellow-300 text-3xl" />,
    level: 60,
    years: "1 year",
    category: "backend",
  },
  {
    key: "flutter",
    icon: <SiFlutter className="text-cyan-400 text-3xl" />,
    level: 65,
    years: "1 year",
    category: "mobile",
  },
  {
    key: "html",
    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
    level: 90,
    years: "3 years",
    category: "frontend",
  },
  {
    key: "javascript",
    icon: <FaJsSquare className="text-yellow-400 text-3xl" />,
    level: 85,
    years: "2 years",
    category: "frontend",
  },
  {
    key: "react",
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    level: 80,
    years: "2 years",
    category: "frontend",
  },
  {
    key: "nextjs",
    icon: (
      <SiNextdotjs className="text-slate-900 dark:text-slate-100 text-3xl" />
    ),
    level: 70,
    years: "1.5 years",
    category: "frontend",
  },
  {
    key: "vue",
    icon: <FaVuejs className="text-green-500 text-3xl" />,
    level: 60,
    years: "1 year",
    category: "frontend",
  },
  {
    key: "typescript",
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
    level: 75,
    years: "1 year",
    category: "frontend",
  },
  {
    key: "css",
    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
    level: 85,
    years: "3 years",
    category: "frontend",
  },
  {
    key: "tailwind",
    icon: <SiTailwindcss className="text-blue-400 text-3xl" />,
    level: 90,
    years: "2.5 years",
    category: "frontend",
  },
];

const SkillCard = ({
  skillKey,
  icon,
  isDark,
  index,
  skillName,
  level,
  years,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", 0.1 + index * 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] snap-center flex-shrink-0 relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className={`absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg text-xs whitespace-nowrap z-50 shadow-xl ${
              isDark
                ? "bg-slate-800 text-slate-200 border border-white/10"
                : "bg-white text-slate-700 border border-slate-200 shadow-lg"
            }`}
          >
            <div className="flex items-center gap-3">
              <span>{skillName}</span>
              <span className="text-teal-400 font-bold">{level}%</span>
              <span className="opacity-60">•</span>
              <span className="opacity-80">{years}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`group cursor-pointer h-full transition-all duration-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 ${
          isDark
            ? "bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-teal-500/20 hover:border-teal-500/60 hover:shadow-[0_0_24px_rgba(20,184,166,0.25)] hover:from-slate-900/80 hover:to-slate-800/60"
            : "bg-gradient-to-br from-white/80 to-slate-100/60 border border-teal-600/15 hover:border-teal-600/50 hover:shadow-[0_0_24px_rgba(13,148,136,0.2)] hover:from-white hover:to-slate-100/80"
        }`}
      >
        <div
          className={`p-4 rounded-xl transition-all duration-300 group-hover:scale-110 ${
            isDark
              ? "bg-teal-500/10 group-hover:bg-teal-500/20"
              : "bg-teal-100 group-hover:bg-teal-200"
          }`}
        >
          {icon}
        </div>
        <span
          className={`text-sm font-semibold text-center tracking-wide transition-colors ${
            isDark
              ? "text-slate-200 group-hover:text-teal-300"
              : "text-slate-900 group-hover:text-teal-600"
          }`}
        >
          {skillName}
        </span>

        <div className="w-full mt-1">
          <div
            className={`h-1.5 w-full rounded-full overflow-hidden ${
              isDark ? "bg-slate-700" : "bg-slate-200"
            }`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-500"
            />
          </div>
        </div>

        {/* Years badge */}
        <div
          className={`mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${
            isDark
              ? "bg-slate-700/50 text-slate-400"
              : "bg-slate-200/50 text-slate-500"
          }`}
        >
          {years}
        </div>
      </div>
    </motion.div>
  );
};

const Skill = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const scrollRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

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

  // Category filters with translations
  const categories = [
    { key: "all", label: t("skills.categories.all") },
    { key: "frontend", label: t("skills.categories.frontend") },
    { key: "backend", label: t("skills.categories.backend") },
    { key: "database", label: t("skills.categories.databases") },
    { key: "mobile", label: t("skills.categories.mobile") },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className={`min-h-screen px-4 md:px-8 relative z-10 w-full overflow-hidden transition-colors duration-300 flex items-center ${
        isDark
          ? "bg-slate-950"
          : "bg-gradient-to-br from-slate-50 via-slate-50 to-cyan-50"
      }`}
    >
      {/* Decorative background */}
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${
          isDark ? "opacity-20" : "opacity-5"
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
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span
              className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full ${
                isDark
                  ? "text-teal-300 bg-teal-500/15 border border-teal-500/30"
                  : "text-teal-700 bg-teal-100 border border-teal-200"
              }`}
            >
              {t("skills.badge")}
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-slate-50" : "text-slate-900"
            }`}
          >
            {t("skills.title")}
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={fadeIn("up", 0.35)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === category.key
                  ? isDark
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30"
                    : "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30"
                  : isDark
                    ? "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-white/10"
                    : "bg-slate-100/50 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Carousel */}
        <div className="relative group/carousel">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-3 cursor-pointer rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hidden sm:flex items-center justify-center ${
              isDark
                ? "bg-slate-900/80 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500 text-teal-500 hover:text-slate-950"
                : "bg-white/80 border border-slate-200 hover:border-teal-600/50 hover:bg-teal-600 text-teal-600 hover:text-white"
            }`}
          >
            <FaChevronLeft className="text-lg" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-3 cursor-pointer rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hidden sm:flex items-center justify-center ${
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
            } to-transparent z-20 pointer-events-none`}
          ></div>
          <div
            className={`absolute top-0 right-0 w-12 sm:w-24 h-full bg-gradient-to-l ${
              isDark ? "from-slate-950" : "from-slate-50"
            } to-transparent z-20 pointer-events-none`}
          ></div>

          {/* Scrollable Container */}
          <motion.div
            ref={scrollRef}
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 pt-4 px-6 md:px-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-center"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={skill.key}
                skillKey={skill.key}
                icon={skill.icon}
                isDark={isDark}
                index={index}
                skillName={t(`skills.skillNames.${skill.key}`)}
                level={skill.level}
                years={skill.years}
              />
            ))}
          </motion.div>
        </div>

        {/* Info text for mobile */}
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className={`text-center text-xs sm:hidden mt-6 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {t("skills.swipeHint")} →
        </motion.p>
      </div>
    </section>
  );
};

export default Skill;
