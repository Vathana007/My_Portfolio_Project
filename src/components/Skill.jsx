import React, { useRef } from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaPhp,
    FaPython,
    FaLaravel,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiMysql,
    SiMongodb,
    SiPostgresql,
    SiRubyonrails,
    SiFlutter
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { Helmet } from 'react-helmet-async';

const skills = [
    {
        name: "ReactJS", icon: <FaReact className="text-cyan-400 text-3xl" />
    },
    {
        name: "Flutter", icon: <SiFlutter className="text-cyan-400 text-3xl" />
    },
    {
        name: "Laravel", icon: <FaLaravel className="text-red-500 text-3xl" />
    },
    {
        name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-600 text-3xl" />
    },
    {
        name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400 text-3xl" />
    },
    {
        name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-3xl" />
    },
    {
        name: "Python", icon: <FaPython className="text-yellow-300 text-3xl" />
    },
    {
        name: "PHP", icon: <FaPhp className="text-indigo-300 text-3xl" />
    },
    {
        name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-3xl" />
    },
    {
        name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" />
    },
    {
        name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" />
    },
    {
        name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" />
    },
    {
        name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" />
    },
];

const Skill = () => {
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
                <title>Skill | Vathana</title>
                <meta name="description" content="Skill about Vathana, a passionate web developer and software engineer from Cambodia." />
            </Helmet>
            <section id="skills" className="py-24 px-6 relative z-10 w-full overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        variants={fadeIn("down", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className="mb-12 lg:mb-16">
                        <h2 className="text-slate-200 font-extrabold lg:text-5xl sm:text-4xl text-3xl mb-4">My Skills</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">Swipe or scroll to explore my tech stack and tools.</p>
                    </motion.div>

                    {/* Gradient Fade Masks for smooth carousel look */}
                    <div className="relative group/carousel">
                        {/* Scroll Buttons */}
                        <button 
                            onClick={() => scroll("left")}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-slate-900/80 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500 hover:text-slate-950 text-teal-500 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hidden sm:block"
                        >
                            <FaChevronLeft className="text-xl" />
                        </button>
                        <button 
                            onClick={() => scroll("right")}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-slate-900/80 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500 hover:text-slate-950 text-teal-500 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hidden sm:block"
                        >
                            <FaChevronRight className="text-xl" />
                        </button>

                        <div className="absolute top-0 left-0 w-12 sm:w-24 h-full bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-12 sm:w-24 h-full bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>

                        {/* Scrollable Container */}
                        <motion.div 
                            ref={scrollRef}
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="flex overflow-x-auto gap-6 sm:gap-8 pb-10 pt-4 px-6 md:px-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-center"
                        >
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="min-w-[140px] sm:min-w-[160px] snap-center bg-slate-900/50 backdrop-blur-md border border-white/5 hover:border-teal-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:-translate-y-2 transition-all duration-300 text-slate-300 hover:text-white px-4 py-8 rounded-2xl shadow-lg text-sm sm:text-[16px] font-medium flex flex-col items-center justify-center gap-4 group cursor-pointer flex-shrink-0"
                                >
                                    <div className="p-4 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                                    <span className="tracking-wide text-center">{skill.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skill;