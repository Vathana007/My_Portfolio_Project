import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaPhp,
    FaPython,
    FaLaravel,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../varaints";
import { Helmet } from 'react-helmet-async';

const skills = [
    {
        name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" />
    },
    {
        name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" />
    },
    {
        name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-3xl" />
    },
    {
        name: "ReactJS", icon: <FaReact className="text-cyan-400 text-3xl" />
    },
    {
        name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400 text-3xl" />
    },
    {
        name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" />
    },
    {
        name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" />
    },
    {
        name: "Python", icon: <FaPython className="text-yellow-300 text-3xl" />
    },
    {
        name: "PHP", icon: <FaPhp className="text-indigo-300 text-3xl" />
    },
    {
        name: "Laravel", icon: <FaLaravel className="text-red-500 text-3xl" />
    },
];

const Skill = () => {
    return (
        <>
            <Helmet>
                <title>Skill | Vathana</title>
                <meta name="description" content="Skill about Vathana, a passionate web developer and software engineer from Cambodia." />
            </Helmet>
            <section id="skills" className="bg-black text-white py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2
                        variants={fadeIn("down", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400 mb-10">
                        My Skills
                    </motion.h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                variants={fadeIn("up", 0.4)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                key={index}
                                className="bg-gray-800 hover:bg-teal-500 hover:text-black hover:shadow-teal-400 hover:scale-105 transition-all duration-300 text-white px-6 py-6 rounded-lg shadow-md text-lg font-medium flex flex-col items-center justify-center gap-2 cursor-pointer"
                            >
                                {skill.icon}
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skill;