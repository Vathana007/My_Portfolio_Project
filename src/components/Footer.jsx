import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const ModernFooter = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/Vathana007",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/chort-sereivathana-276167309/",
      label: "LinkedIn",
    },
    {
      icon: FaTelegram,
      url: "https://t.me/Chort_Sereivathana/",
      label: "Telegram",
    },
  ];

  return (
    <footer
      className={`border-t transition-colors duration-300 py-12 relative z-10 w-full ${
        isDark
          ? "bg-slate-950 border-white/5 text-slate-400"
          : "bg-white border-slate-200/50 text-slate-600"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                  V
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  Vathana
                </span>
              </div>
              <p
                className={`text-sm ${isDark ? "text-slate-500" : "text-slate-500"}`}
              >
                {t("footer.role")}
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3
                className={`font-bold mb-4 ${isDark ? "text-slate-200" : "text-slate-900"}`}
              >
                {t("footer.quickLinks")}
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                {[
                  { label: "GitHub", url: "https://github.com/Vathana007" },
                  {
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/chort-sereivathana-276167309/",
                  },
                  { label: t("footer.projects"), url: "#projects" },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-teal-400 transition-colors duration-300 ${
                      isDark ? "text-slate-500" : "text-slate-600"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3
                className={`font-bold mb-4 ${isDark ? "text-slate-200" : "text-slate-900"}`}
              >
                Based In
              </h3>
              <p
                className={`text-sm mb-4 ${isDark ? "text-slate-500" : "text-slate-600"}`}
              >
                {t("footer.location")} 🇰🇭
              </p>
              <p
                className={`text-xs ${isDark ? "text-slate-600" : "text-slate-500"}`}
              >
                {t("footer.availability")}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className={`h-px bg-gradient-to-r ${
              isDark
                ? "from-transparent via-white/10 to-transparent"
                : "from-transparent via-slate-300 to-transparent"
            } mb-8`}
          ></div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "bg-white/5 hover:bg-teal-500/20 text-slate-400 hover:text-teal-400"
                      : "bg-slate-100 hover:bg-teal-100 text-slate-600 hover:text-teal-600"
                  }`}
                  title={link.label}
                >
                  <Icon className="text-lg" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div
            className={`text-center text-xs ${isDark ? "text-slate-600" : "text-slate-500"}`}
          >
            <p>
              &copy; {currentYear}{" "}
              <span className="text-teal-400 font-semibold">Vathana</span>.{" "}
              {t("footer.rights")}.
            </p>
            <p className="mt-2">
              {t("footer.designedBuilt")} {" "}
              <span className="text-red-500">❤️</span> {t("footer.by")} Vathana
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center">
          <a
            href="#home"
            className={`inline-block px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
              isDark
                ? "bg-white/5 hover:bg-teal-500/20 text-slate-400 hover:text-teal-400"
                : "bg-slate-100 hover:bg-teal-100 text-slate-600 hover:text-teal-600"
            }`}
          >
            ↑ {t("footer.backToTop")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
