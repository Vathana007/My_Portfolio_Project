import React, { useState } from "react";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoSunnyOutline,
  IoMoonOutline,
  IoChevronDownOutline,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import cambodiaFlag from "../assets/cambodia-flag.webp";
import englishFlag from "../assets/english-flag.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const navbarMenu = [
    { id: 1, title: t("nav.about"), path: "#about" },
    { id: 2, title: t("nav.experiences"), path: "#experiences" },
    { id: 3, title: t("nav.skills"), path: "#skills" },
    { id: 4, title: t("nav.projects"), path: "#projects" },
    { id: 5, title: t("nav.achievements"), path: "#achievements" },
  ];

  // Current language
  const currentLanguage =
    i18n.language === "kh"
      ? {
          code: "kh",
          flag: cambodiaFlag,
          name: "ខ្មែរ",
        }
      : {
          code: "en",
          flag: englishFlag,
          name: "English",
        };

  const languages = [
    {
      code: "en",
      flag: englishFlag,
      name: "English",
    },
    {
      code: "kh",
      flag: cambodiaFlag,
      name: "ខ្មែរ",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isDark
          ? "bg-slate-950/70 border-b border-white/10"
          : "bg-white/70 border-b border-slate-200/20"
      }`}
    >
      <div className="max-w-[1600px] mx-auto py-5 px-4 lg:px-10 xl:px-16 flex items-center gap-4">
        {/* =====================================================
            LOGO
        ====================================================== */}
        <div className="flex-shrink-0 cursor-pointer">
          <a href="/" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 lg:w-11 lg:h-11 rounded-xl
              bg-gradient-to-br from-teal-400 to-cyan-500
              flex items-center justify-center
              font-black text-xl lg:text-2xl
              shadow-[0_0_15px_rgba(20,184,166,0.3)]
              group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]
              group-hover:-translate-y-1 transition-all duration-300
              ${isDark ? "text-slate-950" : "text-white"}`}
            >
              V
            </div>

            <span
              className={`text-xl lg:text-2xl font-bold tracking-wide
              group-hover:text-teal-400 transition-colors duration-300
              ${isDark ? "text-slate-200" : "text-slate-900"}`}
            >
              Vathana
            </span>
          </a>
        </div>

        {/* =====================================================
            DESKTOP MENU
        ====================================================== */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <ul className="flex items-center justify-center gap-6 lg:gap-10">
            {navbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className={`inline-block py-2 px-3 transition duration-200 relative group text-sm font-medium tracking-wide ${
                    isDark
                      ? "text-slate-300 hover:text-teal-400"
                      : "text-slate-700 hover:text-teal-500"
                  }`}
                >
                  <span
                    className={`relative inline-block after:content-['']
                    after:block after:absolute after:-bottom-1 after:left-0
                    after:w-full after:h-[2px] after:origin-left
                    after:scale-x-0 group-hover:after:scale-x-100
                    after:transition-transform after:duration-300 ${
                      isDark ? "after:bg-teal-400" : "after:bg-teal-500"
                    }`}
                  >
                    {menu.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* =====================================================
            DESKTOP CONTROLS
        ====================================================== */}
        <div className="hidden lg:flex items-center gap-3 ml-auto flex-shrink-0">
          {/* LANGUAGE SWITCHER */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg
              transition-all duration-300 cursor-pointer ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 text-slate-300"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              <img
                src={currentLanguage.flag}
                alt={currentLanguage.name}
                className="w-6 h-4 object-cover rounded-sm"
              />

              <span className="text-sm font-medium">
                {currentLanguage.name}
              </span>

              <IoChevronDownOutline
                className={`text-sm transition-transform duration-300 ${
                  isLangMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* LANGUAGE DROPDOWN */}
            {isLangMenuOpen && (
              <div
                className={`absolute top-full right-0 mt-2 w-44
                rounded-xl overflow-hidden shadow-2xl
                backdrop-blur-xl border
                animate-in fade-in slide-in-from-top-2 duration-200 ${
                  isDark
                    ? "bg-slate-900/95 border-white/10"
                    : "bg-white/95 border-slate-200"
                }`}
              >
                {languages.map((language) => {
                  const isActive = i18n.language === language.code;

                  return (
                    <button
                      key={language.code}
                      onClick={() => handleLangChange(language.code)}
                      className={`w-full flex items-center gap-3
                      px-4 py-3 text-left transition-all duration-200
                      cursor-pointer ${
                        isActive
                          ? isDark
                            ? "bg-teal-500/10 text-teal-400"
                            : "bg-teal-50 text-teal-600"
                          : isDark
                            ? "text-slate-300 hover:bg-white/5 hover:text-teal-400"
                            : "text-slate-700 hover:bg-slate-50 hover:text-teal-500"
                      }`}
                    >
                      {/* FLAG */}
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="w-7 h-5 object-cover rounded-sm"
                      />

                      {/* LANGUAGE NAME */}
                      <span className="text-sm font-medium flex-1">
                        {language.name}
                      </span>

                      {/* ACTIVE INDICATOR */}
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-teal-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
              isDark
                ? "bg-white/5 hover:bg-white/10 text-yellow-400"
                : "bg-slate-100 hover:bg-slate-200 text-slate-600"
            }`}
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? (
              <IoSunnyOutline className="text-xl" />
            ) : (
              <IoMoonOutline className="text-xl" />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE CONTROLS
        ====================================================== */}
        <div className="lg:hidden flex items-center gap-3 ml-auto">
          {/* THEME */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDark
                ? "bg-white/5 hover:bg-white/10 text-yellow-400"
                : "bg-slate-100 hover:bg-slate-200 text-slate-600"
            }`}
          >
            {isDark ? (
              <IoSunnyOutline className="text-xl" />
            ) : (
              <IoMoonOutline className="text-xl" />
            )}
          </button>

          {/* LANGUAGE */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center gap-1 p-2 rounded-lg
              transition-all duration-300 ${
                isDark
                  ? "bg-white/5 hover:bg-white/10"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              <img
                src={currentLanguage.flag}
                alt={currentLanguage.name}
                className="w-6 h-4 object-cover rounded-sm"
              />

              <IoChevronDownOutline
                className={`text-xs transition-transform duration-300 ${
                  isLangMenuOpen ? "rotate-180" : ""
                } ${isDark ? "text-slate-300" : "text-slate-700"}`}
              />
            </button>

            {/* MOBILE LANGUAGE DROPDOWN */}
            {isLangMenuOpen && (
              <div
                className={`absolute top-full right-0 mt-2
                w-44 rounded-xl overflow-hidden shadow-2xl
                border backdrop-blur-xl ${
                  isDark
                    ? "bg-slate-900/95 border-white/10"
                    : "bg-white/95 border-slate-200"
                }`}
              >
                {languages.map((language) => {
                  const isActive = i18n.language === language.code;

                  return (
                    <button
                      key={language.code}
                      onClick={() => handleLangChange(language.code)}
                      className={`w-full flex items-center gap-3
                      px-4 py-3 text-left transition-all cursor-pointer ${
                        isActive
                          ? isDark
                            ? "bg-teal-500/10 text-teal-400"
                            : "bg-teal-50 text-teal-600"
                          : isDark
                            ? "text-slate-300 hover:bg-white/5"
                            : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="w-7 h-5 object-cover rounded-sm"
                      />

                      <span className="text-sm font-medium flex-1">
                        {language.name}
                      </span>

                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-teal-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* HAMBURGER */}
          <button
            onClick={handleMenuToggle}
            className={`text-2xl transition-colors ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden fixed top-20 right-0 w-3/4 sm:w-2/4
        h-screen backdrop-blur-xl transform transition-transform
        duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${
          isDark
            ? "bg-slate-950/90 border-l border-white/10"
            : "bg-white/90 border-l border-slate-200"
        } -z-50`}
      >
        <div
          className={`flex flex-col items-center justify-center
          space-y-8 pt-32 h-full pb-32 ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          {navbarMenu.map((menu) => (
            <a
              key={menu.id}
              href={menu.path}
              className={`text-lg font-medium tracking-wide
              transition duration-200 ${
                isDark ? "hover:text-teal-400" : "hover:text-teal-500"
              }`}
              onClick={handleMenuToggle}
            >
              {menu.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
