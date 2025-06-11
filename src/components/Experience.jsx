import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { Helmet } from 'react-helmet-async';

const TimelineCard = ({ year, title, description }) => (
    <div className="relative mb-8 group">
        {/* Dot aligned over the vertical line */}
        <div className="absolute -left-8 w-4 h-4 bg-slate-950 border-2 border-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.6)] z-10 group-hover:bg-teal-500 transition-colors duration-300 transform -translate-x-[1.5px]"></div>

        {/* Card Content */}
        <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/5 group-hover:border-teal-500/50 group-hover:bg-slate-800/80 transition-all duration-300 group-hover:-translate-y-1">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-teal-400 bg-teal-500/10 rounded-full border border-teal-500/20">{year}</span>
            <h4 className="text-xl font-bold text-slate-200 mt-1">{title}</h4>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">{description}</p>
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
            year: "2026",
            title: "Internship at BookMeBus",
            description: "Contributed to the development of the organizer and transit systems. Additionally, worked on the BookMe+ application by implementing a comprehensive review module to enhance user feedback and system functionality.",
        },
        {
            id: 2,
            year: "2025",
            title: "Internship at E-Khmer",
            description: "Developed a POS system for a phone shop during my internship. Implemented full-stack functionality to manage inventory, process order, and generate invoices. ",
        },
        {
            id: 3,
            year: "2025",
            title: "Full-Stack Developer",
            description: "Developing full-featured web applications name 'Kore' using React and Tailwind CSS for the frontend, and Node.js with MongoDB for the backend.",
        },
        {
            id: 4,
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
            <div id="experiences" className="py-24 px-4 md:px-12 relative z-10">
                {/* Heading Section */}
                <motion.div
                    variants={fadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className="text-center mb-16 lg:mb-20">
                    <h1 className="text-slate-200 font-extrabold lg:text-5xl sm:text-4xl text-3xl mb-4">My Experiences</h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Left Section */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    <motion.div
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/></svg>
                            </div>
                            <h2 className="text-slate-200 text-2xl font-bold">EDUCATION</h2>
                        </div>
                        <div className="border-l-2 border-white/10 pl-8 ml-[15px]">
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
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></svg>
                                </div>
                                <h2 className="text-slate-200 text-2xl font-bold" >EXPERIENCE</h2>
                            </div>
                            <div className="border-l-2 border-white/10 pl-8 ml-[15px]">
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