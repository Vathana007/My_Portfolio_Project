import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeIn } from "../utils/variants";
import { useTheme } from "../context/ThemeContext";

const TimelineItem = ({ year, title, description, isDark }) => (
  <motion.div
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
    className="group cursor-default"
  >
    <div className="flex gap-4 pb-8 last:pb-0">
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center pt-1 flex-shrink-0">
        <div
          className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
            isDark
              ? "bg-slate-900 border-teal-500 shadow-[0_0_12px_rgba(20,184,166,0.5)] group-hover:shadow-[0_0_16px_rgba(20,184,166,0.8)] group-hover:bg-teal-500"
              : "bg-white border-teal-600 shadow-[0_0_12px_rgba(13,148,136,0.4)] group-hover:shadow-[0_0_16px_rgba(13,148,136,0.7)] group-hover:bg-teal-600"
          }`}
        ></div>
        <div
          className={`w-0.5 h-16 last:hidden ${
            isDark
              ? "bg-gradient-to-b from-teal-500/40 to-transparent"
              : "bg-gradient-to-b from-teal-600/40 to-transparent"
          }`}
        ></div>
      </div>

      {/* Content Card */}
      <div className="flex-1 pt-0.5 group">
        <div
          className={`rounded-lg p-5 transition-all duration-300 ${
            isDark
              ? "bg-slate-900/40 hover:bg-slate-900/70 border border-slate-700/50 hover:border-teal-500/50"
              : "bg-slate-100/50 hover:bg-slate-100/80 border border-slate-200 hover:border-teal-600/50"
          }`}
        >
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-widest mb-2 px-2.5 py-1 rounded ${
              isDark
                ? "text-teal-300 bg-teal-500/15"
                : "text-teal-700 bg-teal-100"
            }`}
          >
            {year}
          </span>
          <h4
            className={`text-base font-semibold mt-2 transition-colors leading-snug ${
              isDark
                ? "text-slate-50 group-hover:text-teal-300"
                : "text-slate-900 group-hover:text-teal-600"
            }`}
          >
            {title}
          </h4>
          <p
            className={`text-sm mt-3 leading-relaxed opacity-90 ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const SectionHeader = ({ icon: Icon, title, isDark }) => (
  <motion.div
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
    className="flex items-center gap-3 mb-8"
  >
    <div
      className={`p-2.5 rounded-lg transition-colors ${
        isDark ? "bg-teal-500/15 text-teal-400" : "bg-teal-100 text-teal-600"
      }`}
    >
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h3
        className={`text-lg font-semibold ${
          isDark ? "text-slate-100" : "text-slate-900"
        }`}
      >
        {title}
      </h3>
      <div
        className={`h-0.5 w-8 mt-1 rounded-full ${
          isDark
            ? "bg-gradient-to-r from-teal-500 to-transparent"
            : "bg-gradient-to-r from-teal-600 to-transparent"
        }`}
      ></div>
    </div>
  </motion.div>
);

const Experience = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const educations = t("experience.educationItems", { returnObjects: true });
  const experiences = t("experience.experienceItems", { returnObjects: true });

  return (
    <>
      <section
        id="experiences"
        className={`py-24 px-4 md:px-8 relative z-10 transition-colors duration-300 ${
          isDark
            ? "bg-slate-950"
            : "bg-gradient-to-br from-slate-50 via-slate-50 to-cyan-50"
        }`}
      >
        {/* Decorative background */}
        <div
          className={`absolute inset-0 overflow-hidden pointer-events-none ${
            isDark ? "opacity-30" : "opacity-10"
          }`}
        >
          <div
            className={`absolute top-0 right-0 w-96 h-96 rounded-full ${
              isDark ? "bg-teal-500" : "bg-teal-400"
            } blur-3xl`}
          ></div>
          <div
            className={`absolute bottom-0 left-0 w-80 h-80 rounded-full ${
              isDark ? "bg-cyan-500" : "bg-cyan-300"
            } blur-3xl`}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span
                className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full ${
                  isDark
                    ? "text-teal-300 bg-teal-500/15 border border-teal-500/30"
                    : "text-teal-700 bg-teal-100 border border-teal-200"
                }`}
              >
                {t("experience.badge")}
              </span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDark ? "text-slate-50" : "text-slate-900"
              }`}
            >
              {t("experience.title")}
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {t("experience.subtitle")}
            </p>
          </motion.div>

          {/* Timeline Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 lg:gap-8">
            {/* Education Column */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              <SectionHeader
                icon={() => (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                )}
                title={t("experience.education")}
                isDark={isDark}
              />
              <div
                className={`pl-6 border-l-2 ${
                  isDark ? "border-teal-500/30" : "border-teal-600/30"
                }`}
              >
                {Array.isArray(educations) &&
                  educations.map((item, index) => (
                    <TimelineItem
                      key={index}
                      year={item.year}
                      title={item.title}
                      description={item.description}
                      isDark={isDark}
                    />
                  ))}
              </div>
            </motion.div>

            {/* Experience Column */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              <SectionHeader
                icon={() => (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                )}
                title={t("experience.experience")}
                isDark={isDark}
              />
              <div
                className={`pl-6 border-l-2 ${
                  isDark ? "border-teal-500/30" : "border-teal-600/30"
                }`}
              >
                {Array.isArray(experiences) &&
                  experiences.map((item, index) => (
                    <TimelineItem
                      key={index}
                      year={item.year}
                      title={item.title}
                      description={item.description}
                      isDark={isDark}
                    />
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
