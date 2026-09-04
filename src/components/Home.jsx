import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import image from "../assets/home-me.jpg";
import CV from "../assets/Chort_Sereivathana-CV.pdf";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const roles = [t("home.role1"), t("home.role2"), t("home.role3")];
  const stats = [
    { num: "5+", label: t("home.stats.projects") },
    { num: "2", label: t("home.stats.internships") },
    { num: "1", label: t("home.stats.jobs") },
    { num: "13+", label: t("home.stats.skills") },
  ];

  useEffect(() => {
    let timeout;

    if (letterIndex < roles[roleIndex].length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setLetterIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, roleIndex, roles]);

  return (
    <>
      <section
        id="home"
        className={`overflow-hidden relative pt-28 pb-16 min-h-screen flex items-center transition-colors duration-300 ${
          isDark
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-br from-white via-slate-50 to-cyan-50"
        }`}
      >
        <div
          className={`absolute inset-0 overflow-hidden pointer-events-none ${
            isDark ? "opacity-20" : "opacity-8"
          }`}
        >
          <div
            className={`absolute top-10 right-10 w-80 h-80 rounded-full blur-3xl ${
              isDark ? "bg-teal-500" : "bg-teal-300"
            }`}
          ></div>
          <div
            className={`absolute bottom-0 left-1/2 w-80 h-80 rounded-full blur-3xl ${
              isDark ? "bg-cyan-500" : "bg-cyan-300"
            }`}
          ></div>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center px-6 lg:px-12 relative z-10">
          {/* Left Section */}
          <div className="flex flex-col justify-center relative z-20 order-2 lg:order-1">
            <div className="text-center lg:text-left">
              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className={`mb-5 inline-block px-4 py-2 rounded-full border transition-colors duration-300 ${
                  isDark
                    ? "border-teal-500/30 bg-teal-500/10 text-teal-300"
                    : "border-teal-400/50 bg-teal-100 text-teal-700"
                } text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase mx-auto lg:mx-0`}
              >
                {t("home.welcome")}
              </motion.div>

              <motion.h1
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold !leading-tight tracking-tight mb-6 ${
                  isDark ? "text-slate-100" : "text-slate-900"
                }`}
              >
                {t("home.greeting")} {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500">
                  {t("home.name")}
                </span>
                <br />
                <span
                  className={`text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 block ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                    {text}
                  </span>
                  <span className="animate-pulse text-teal-400">|</span>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className={`text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {t("home.description")}
              </motion.p>

              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="flex justify-center lg:justify-start mt-6 gap-4 flex-wrap"
              >
                <a href={CV} download>
                  <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] flex items-center gap-2 group cursor-pointer hover:-translate-y-1">
                    {t("home.downloadCV")}
                    <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-1 duration-300" />
                  </button>
                </a>
                <a href="#projects">
                  <button
                    className={`font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                      isDark
                        ? "border-teal-500/30 text-teal-300 hover:bg-teal-500/10"
                        : "border-teal-400/60 text-teal-700 hover:bg-teal-50"
                    }`}
                  >
                    {t("projects.title")}
                  </button>
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                      {stat.num}
                    </div>
                    <p
                      className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center relative order-1 lg:order-2 mb-10 lg:mb-0">
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] xl:w-[380px] xl:h-[380px] blur-[80px] rounded-full transition-colors duration-300 ${
                isDark ? "bg-teal-500/20" : "bg-teal-400/30"
              }`}
            ></div>

            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="relative z-10"
            >
              <div
                className={`p-3 rounded-[32px] backdrop-blur-sm transition-all duration-300 border shadow-[0_20px_50px_rgba(15,23,42,0.18)] ${
                  isDark
                    ? "border-white/10 bg-slate-900/50"
                    : "border-slate-200/80 bg-white/80"
                }`}
              >
                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src={image}
                    alt="Vathana"
                    className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] xl:w-[400px] xl:h-[400px] object-cover transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] filter grayscale-[20%] hover:grayscale-0 cursor-pointer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
