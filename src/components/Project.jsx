import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";

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
];

const Project = () => {
  return (
    <section id="projects" className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400 mb-10">
          Projects
        </h2>

        <div className="flex overflow-x-auto space-x-6 py-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-80 bg-gray-800 hover:bg-teal-500 hover:text-black transition-all duration-300 rounded-lg shadow-lg cursor-pointer"
            >
              {/* Ensure the image fits within the container */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-400 hover:text-white">{project.title}</h3>
                <p className="text-white mt-2 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline mt-4 inline-block"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
