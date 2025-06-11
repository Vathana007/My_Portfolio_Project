import React, { useState, useEffect } from "react";
import me from "../assets/image.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { Helmet } from 'react-helmet-async';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // Cleanup function in case component unmounts while modal is open
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    return (
        <>
            <Helmet>
                <title>About | Vathana</title>
                <meta name="description" content="Learn more about Vathana, a passionate web developer and software engineer from Cambodia." />
            </Helmet>
            <section id="about" className="py-24 relative z-10 w-full overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
                    {/* Small size */}
                    <div className="lg:hidden md:w-1/2 text-center md:text-left">
                        <motion.div
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="mb-8"
                        >
                            <h1 className="text-slate-200 font-extrabold text-3xl sm:text-4xl mb-4">About Me</h1>
                            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto md:mx-0 rounded-full"></div>
                        </motion.div>
                        <motion.p
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="text-base sm:text-lg text-slate-400 leading-relaxed">
                            I have recently completed my Bachelor's degree in Computer Science, specializing in Software Engineering at the Cambodia Academy of Digital Technology. As a highly motivated and detail-oriented developer, I have a passion for building user-centric applications and solving complex problems. I am a hard-working individual continually seeking new challenges to expand my technical expertise and stay updated with modern web technologies.
                        </motion.p>
                        <motion.button
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="mt-8 bg-teal-500/10 border border-teal-500/30 text-teal-400 font-semibold py-2.5 px-8 rounded-lg hover:bg-teal-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300 cursor-pointer"
                            onClick={openModal}  
                        >
                            Read More
                        </motion.button>
                    </div>

                    {/* Left Section (Image) */}
                    <div className="flex justify-center md:w-1/2 mb-8 md:mb-0 relative group">
                        <div className="absolute inset-0 bg-teal-500/20 blur-[50px] rounded-full group-hover:bg-teal-500/30 transition-all duration-500 z-0"></div>
                        <motion.img
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            src={me}
                            alt="Vathana"
                            className="w-[280px] sm:w-[320px] lg:w-[400px] object-cover relative z-10 duration-500 transition-all rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-sm group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] group-hover:-translate-y-2 cursor-pointer filter grayscale-[10%] group-hover:grayscale-0"
                        />
                    </div>

                    {/* Right Section (Desktop) */}
                    <div className="hidden lg:block md:w-1/2 lg:text-left">
                        <motion.div
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="mb-8"
                        >
                            <h1 className="text-slate-200 font-extrabold text-5xl mb-4">About Me</h1>
                            <div className="w-16 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
                        </motion.div>
                        <motion.p
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="text-lg text-slate-400 leading-relaxed">
                            I have recently completed my Bachelor's degree in Computer Science, specializing in Software Engineering at the Cambodia Academy of Digital Technology. As a highly motivated and detail-oriented developer, I have a passion for building user-centric applications and solving complex problems. I am a hard-working individual continually seeking new challenges to expand my technical expertise and stay updated with modern web technologies.
                        </motion.p>
                        <motion.button
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="mt-8 bg-teal-500/10 border border-teal-500/30 text-teal-400 font-semibold py-2.5 px-8 rounded-lg hover:bg-teal-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300 cursor-pointer"
                            onClick={openModal}  // Add this onClick to open the modal
                        >
                            Read More
                        </motion.button>
                    </div>
                </div>

                {/* Modal for Read More */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex justify-center items-center z-50 p-4">
                        <div className="bg-slate-900 border border-white/10 p-8 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] w-full sm:w-[80%] lg:w-[50%] max-h-[90vh] overflow-y-auto">
                            <h2 className="text-3xl font-extrabold text-slate-200 mb-6 border-b border-white/10 pb-4">More Details</h2>
                            <p className="text-lg text-slate-400 leading-relaxed space-y-4">
                                <span>I have recently completed my Bachelor's degree in Computer Science, specializing in Software Engineering at the Cambodia Academy of Digital Technology. I am passionate about continuous learning and taking on innovative challenges in the tech industry.</span><br /><br />
                                <span>I am also eager to develop my skills through hands-on projects and collaborative work with others. I am particularly interested in Full Stack development, and I have worked on several projects using various technologies such as HTML, CSS, TailwindCSS, JavaScript, ReactJS, and NextJS.</span><br /><br />
                                <span>I enjoy creating dynamic, user-friendly architectures and continuously expanding my expertise in front-end development. Parallel to this, I am actively broadening my back-end capabilities, working with frameworks like Node.js, Laravel, and Ruby on Rails, alongside databases such as MongoDB, MySQL, and PostgreSQL.</span><br /><br />
                                <span>Additionally, I am continuously improving my cross-platform mobile application development skills using Flutter, aiming to build seamless and performant experiences across ecosystems.</span>
                            </p>
                            <div className="mt-8 text-right flex justify-end">
                                <button
                                    className="bg-teal-500 text-slate-950 font-bold py-2.5 px-8 rounded-lg hover:bg-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all duration-300 cursor-pointer"
                                    onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default About;
