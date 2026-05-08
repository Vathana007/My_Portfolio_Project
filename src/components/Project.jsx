import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project4 from "../assets/project4.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    id: 1,
    title: "Phone Shop POS system",
    description: "Developed a POS system for a phone shop. Implemented full-stack functionality to manage inventory, process order, and generate invoices..",
    image: project7,
    link: "",
  },
  {
    id: 2,
    title: "Kore - គភ៌",
    description: "A full-stack application built with ReactJS, Tailwind CSS, NodeJS and MongoDB",
    image: project1,
    link: "https://github.com/Vathana007/Kore_Capstone_Project",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "A portfolio website to showcase my work and skills.",
    image: project4,
    link: "https://my-portfolio-project-delta-seven.vercel.app/",
  },
  {
    id: 4,
    title: "Movie",
    description: "A front-end movie listing website built using HTML, CSS, and JavaScript to display movie information and allow user interaction.",
    image: project2,
    link: "https://github.com/Vathana007/Movie_Website",
  },
  {
    id: 5,
    title: "Coffee App",
    description: "A mobile application developed with Flutter to manage a drink inventory, including create, update, delete, and search functionality.",
    image: project6,
    link: "https://github.com/Vathana007/Coffee_Shop_App",
  },
  {
    id: 6,
    title: "Check Result System",
    description: "A student result management system featuring a secure student portal for final result lookup via ID, and a central administration dashboard. Built with React, Laravel, Inertia.js, MySQL, and Tailwind CSS.",
    image: project7,
    link: "",
  },
];

const Project = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
      if (scrollRef.current) {
          const { scrollLeft, clientWidth } = scrollRef.current;
          const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
          scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      }
  };

  return (
    <>
      <Helmet>
        <title>Project | Vathana</title>
        <meta name="description" content="Project of Vathana, a passionate web developer and software engineer from Cambodia." />
      </Helmet>
      <section id="projects" className="py-24 px-6 relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="mb-16 lg:mb-20">
            <h2 className="text-slate-200 font-extrabold lg:text-5xl sm:text-4xl text-3xl mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Carousel Wrapper */}
          <div className="relative group/carousel">
            {/* Scroll Navigation */}
            <button 
                onClick={() => scroll("left")}
                className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-30 bg-slate-900/80 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500 hover:text-slate-950 text-teal-500 p-3 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hidden sm:block"
            >
                <FaChevronLeft className="text-xl" />
            </button>
            <button 
                onClick={() => scroll("right")}
                className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-30 bg-slate-900/80 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500 hover:text-slate-950 text-teal-500 p-3 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hidden sm:block"
            >
                <FaChevronRight className="text-xl" />
            </button>

            {/* Fade Masks */}
            <div className="absolute top-0 left-0 w-8 sm:w-16 h-full bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none rounded-l-2xl"></div>
            <div className="absolute top-0 right-0 w-8 sm:w-16 h-full bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none rounded-r-2xl"></div>

            {/* Scrollable Container */}
            <motion.div
              ref={scrollRef}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 pt-4 px-4 md:px-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch"
            >
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-[280px] sm:min-w-[360px] max-w-[360px] snap-center flex-shrink-0 bg-slate-900/60 backdrop-blur-xl border border-white/5 hover:border-teal-500/30 transition-all duration-500 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] overflow-hidden group hover:-translate-y-3 flex flex-col h-auto text-left relative"
              >
                {/* Decorative Glow */}
                <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/5 transition-colors duration-500 z-0 pointer-events-none"></div>

                {/* Modern Image Section */}
                {project.image && (
                  <div className="w-full h-[220px] overflow-hidden relative z-10 border-b border-white/5 bg-slate-950">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10 opacity-90 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition duration-700 transform group-hover:scale-110"
                    />
                  </div>
                )}
                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-20">
                  <h3 className="text-2xl font-bold text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-[15px] mb-6 flex-grow leading-relaxed">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 font-semibold py-2.5 px-6 rounded-lg transition duration-300 hover:bg-teal-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] mt-auto"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
