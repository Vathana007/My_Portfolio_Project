import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../varaints";
import { Helmet } from 'react-helmet-async';

const TimelineCard = ({ year, title, description }) => (
    <div className="relative mb-8 group hover:scale-[1.02] transition-transform">
        {/* Dot aligned over the vertical line */}
        <div className="absolute -left-8  w-3 h-3 bg-teal-500 rounded-full shadow-md z-10"></div>

        {/* Card Content */}
        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-transparent group-hover:border-teal-400 transition-all">
            <span className="text-sm text-teal-500 font-semibold">{year}</span>
            <h4 className="text-lg font-bold mt-1">{title}</h4>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
    </div>
);

const Experience = () => {

    const educations = [
        {
            id: 1,
            year: "2023 - PRESENT",
            title: "Bachelor's Degree",
            description: "Pursuing a Bachelor's degree in Computer Science at the Cambodia Academy of Digital Technology, specializing in Software Engineering.",
        },
        {
            id: 2,
            year: "2021 - 2024",
            title: "Australian Education Centre",
            description: "Focused on developing English proficiency in academic, professional, and communication contexts.",
        },
        {
            id: 3,
            year: "2020 - 2022",
            title: "High School Diploma",
            description: "Graduated with a major in Science Stream, emphasizing Math, Physics, and Chemistry.",
        },
    ];

    const experiences = [
        {
            id: 1,
            year: "2025",
            title: "Phone Shop POS System",
            description: "Developed a POS system for a phone shop during my internship. Implemented full-stack functionality to manage inventory, process order, and generate invoices. ",
        },
        {
            id: 2,
            year: "2025",
            title: "Full-Stack Developer",
            description: "Developing full-featured web applications name 'Kore' using React and Tailwind CSS for the frontend, and Node.js with MongoDB for the backend.",
        },
        {
            id: 3,
            year: "2024",
            title: "Capture the Flag Participant",
            description: "Participated in multiple Capture the Flag (CTF) and hackathon events focused on web security and artificial intelligence.",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Experience | Vathana</title>
                <meta name="description" content="Experience from Vathana, a passionate web developer and software engineer from Cambodia." />
            </Helmet>
            <div id="experiences" className="bg-dark py-16 px-4 md:px-12">
                {/* Heading Section */}
                <motion.div
                    variants={fadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className="text-center mb-12 lg:mb-16">
                    <h1 className="text-white font-bold lg:text-4xl sm:text-3xl text-2xl">My Experiences</h1>
                </motion.div>

                {/* Left Section */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <h2 className="text-teal-400 text-lg sm:text-xl lg:text-2xl font-bold mb-6">EDUCATION</h2>
                        <div className="border-l-2 border-teal-400 pl-6 cursor-pointer">
                            {educations.map((item) => (
                                <TimelineCard
                                    key={item.id}
                                    year={item.year}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <div>
                            <h2 className="text-teal-400 text-lg sm:text-xl lg:text-2xl font-bold mb-6" >EXPERIENCE</h2>
                            <div className="border-l-2 border-teal-400 pl-6 cursor-pointer">
                                {experiences.map((item) => (
                                    <TimelineCard
                                        key={item.id}
                                        year={item.year}
                                        title={item.title}
                                        description={item.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Experience;