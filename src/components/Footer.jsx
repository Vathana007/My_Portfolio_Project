import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 text-slate-400 py-10 mt-8 relative z-10 w-full">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm font-medium mb-6">
          &copy; {new Date().getFullYear()} <span className="text-teal-400">Vathana</span>. All Rights Reserved.
        </p>
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://github.com/Vathana007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors duration-300 transform hover:-translate-y-1 inline-block"
          >
            GitHub
          </a>
          <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
          <a
            href="https://www.linkedin.com/in/chort-sereivathana-276167309/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors duration-300 transform hover:-translate-y-1 inline-block"
          >
            LinkedIn
          </a>
          <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
          <a
            href="https://t.me/Chort_Sereivathana/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors duration-300 transform hover:-translate-y-1 inline-block"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
