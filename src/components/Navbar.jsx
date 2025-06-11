import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const navbarMenu = [
    { id: 1, title: "About", path: "#about" },
    { id: 2, title: "Experiences", path: "#experiences" },
    { id: 3, title: "Skills", path: "#skills" },
    { id: 4, title: "Projects", path: "#projects" },
    { id: 5, title: "Achievements", path: "#achievements" },
    { id: 5, title: "Achievements", path: "#achievements" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/10 transition-all duration-300">
      <div className="container py-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="cursor-pointer ml-8 lg:ml-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-slate-950 font-black text-xl lg:text-2xl shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] group-hover:-translate-y-1 transition-all duration-300">
              V
            </div>
            <span className="text-xl lg:text-2xl font-bold text-slate-200 tracking-wide group-hover:text-teal-400 transition-colors duration-300">
              Vathana
            </span>
          </a>
        </div>

        {/* Menu Section (Desktop) */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 mr-20">
            {navbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block text-slate-300 py-2 px-3 transition duration-200 hover:text-teal-400 relative group text-sm font-medium tracking-wide"
                >
                  <span className="relative inline-block
                    after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-teal-400
                    after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                    {menu.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger menu section */}
        <div
          className="lg:hidden cursor-pointer text-white mr-5"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
            <IoCloseOutline className="text-4xl" />
          ) : (
            <IoMenuOutline className="text-4xl" />
          )}
        </div>
      </div>

      {/* Mobile Menu (toggle visibility based on isMenuOpen state) */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-3/4 sm:w-2/4 h-screen backdrop-blur-xl bg-slate-950/90 border-l border-white/10 -z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col items-center justify-center space-y-8 pt-32 h-full pb-32">
          {navbarMenu.map((menu) => (
            <a
              key={menu.id}
              href={menu.path}
              className="text-slate-300 text-xl font-medium tracking-wide transition duration-200 hover:text-teal-400 relative group"
              onClick={handleMenuToggle}
            >
              <span className="relative duration-200 transition group-hover:border-b-2 group-hover:border-teal-400 pb-1 inline-block">
                {menu.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;