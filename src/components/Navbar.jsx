import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const navbarMenu = [
    { id: 1, title: "About", path: "#about" },
    { id: 2, title: "Experiences", path: "#experiences" },
    { id: 3, title: "Skills", path: "#skills" },
    { id: 4, title: "Projects", path: "#projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="container py-10 flex justify-between items-center">
        {/* Logo Section */}
        <div className="cursor-pointer ml-8 lg:ml-20">
          <a href="/">
            <h1 className="font-bold text-white text-2xl lg:text-4xl">
              Port<span className="text-teal-400">folio</span>
            </h1>
          </a>
        </div>

        {/* Menu Section (Desktop) */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-4 mr-20">
            {navbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block text-white py-2 px-3 transition duration-200 hover:text-teal-400 relative group"
                >
                  <span className="relative text-lg duration-200 transition group-hover:border-b-2 group-hover:border-teal-400 inline-block">
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
        className={`lg:hidden fixed top-0 right-0 w-2/4 h-full bg-black bg-opacity-90 -z-50 transform transition-transform duration-200 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-6 pt-24">
          {navbarMenu.map((menu) => (
            <a
              key={menu.id}
              href={menu.path}
              className="text-white text-2xl transition duration-200 hover:text-teal-400 relative group"
              onClick={handleMenuToggle}
            >
              <span className="relative text-lg duration-200 transition group-hover:border-b-2 group-hover:border-teal-400 inline-block">
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