import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.png";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { fadeIn } from "../varaints";

const projects = [
  {
    id: 1,
    title: "Kore - គភ៌",
    description: "A full-stack application built with ReactJS, Tailwind CSS, NodeJS and MongoDB",
    image: project1,
    link: "https://github.com/Vathana007/Kore_Capstone_Project",
  },
  {
    id: 2,
    title: "Movie",
    description: "A front-end movie listing website built using HTML, CSS, and JavaScript to display movie information and allow user interaction.",
    image: project2,
    link: "https://github.com/Vathana007/Movie_Website",
  },
  {
    id: 3,
    title: "E-Learning",
    description: "A modern front-end web application built with ReactJS and Tailwind CSS to provide users with an interactive learning experience.",
    image: project3,
    link: "https://github.com/Vathana007/Project-ReactJS",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "A portfolio website to showcase my work and skills.",
    image: project4,
    link: "https://github.com/Vathana007/Portfolio",
  },
  {
    id: 5,
    title: "Shoes Shop",
    description: "A front-end application designed to showcase various shoe styles and allow users to explore different options.",
    image: project5,
    link: "https://vathana007.github.io/Shoes-Shop/",
  },
  {
    id: 6,
    title: "Coffee App",
    description: "A mobile application developed with Flutter to manage a drink inventory, including create, update, delete, and search functionality.",
    image: project6,
    link: "https://github.com/Vathana007/Coffee_Shop_App",
  },
  {
    id: 7,
    title: "Phone Shop POS system",
    description: "Developed a POS system for a phone shop. Implemented full-stack functionality to manage inventory, process order, and generate invoices..",
    image: project7,
    link: "https://github.com/Vathana007/Coffee_Shop_App",
  },

];

const Project = () => {
  return (
    <>
      <Helmet>
        <title>Project | Vathana</title>
        <meta name="description" content="Project of Vathana, a passionate web developer and software engineer from Cambodia." />
      </Helmet>
      <section id="projects" className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400 mb-10">
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 hover:border-2 hover:border-teal-200 hover:text-black hover:shadow-teal-200 transition-all duration-300 rounded-lg shadow-lg cursor-pointer transform hover:scale-105"
              >
                {/* Image Section */}
                {project.image && (
                  <div className="w-full h-56 overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition duration-300 transform hover:scale-105"
                    />
                  </div>
                )}
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-400 hover:text-white mb-3">{project.title}</h3>
                  <p className="text-white text-sm mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-400 text-white py-2 px-4 rounded-lg shadow-lg transition duration-200 hover:bg-teal-500 hover:shadow-teal-600"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
