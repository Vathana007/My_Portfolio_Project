import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Vathana. All Rights Reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/Vathana007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-500 transition duration-200"
          >
            GitHub
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.linkedin.com/in/chort-sereivathana-276167309/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-500 transition duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
