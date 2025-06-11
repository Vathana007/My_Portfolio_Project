import React, { useState } from "react";
import me from "../assets/image.png";
import { motion } from "framer-motion";
import { fadeIn } from "../varaints";
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

    return (
        <>
            <Helmet>
                <title>About | Vathana</title>
                <meta name="description" content="Learn more about Vathana, a passionate web developer and software engineer from Cambodia." />
            </Helmet>
            <section id="about" className="py-12 bg-gray-900">
                <div className="container mx-auto min-h-[570px] flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Small size */}
                    <div className="lg:hidden md:w-1/2 text-center md:text-left">
                        <motion.h1
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="text-2xl sm:text-4xl lg:text-5xl mb-6 font-bold text-teal-400">About Me</motion.h1>
                        <motion.p
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="text-[16px] sm:text-lg lg:text-xl text-white">
                            I am currently pursuing a Bachelor's degree in Computer Science,
                            and specialization in Software Engineering at the Cambodia Academy
                            of Digital Technology. I am eager to learn and grow my skills in the field
                            of Computer Science. I am a hard-working individual and I am always
                            looking for opportunities to improve my knowledge and skills.
                        </motion.p>
                        <motion.button
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="mt-6 bg-teal-400 shadow-lg shadow-teal-300 text-white py-2 px-6 rounded-lg hover:bg-teal-500 hover:shadow-teal-500 transition duration-300 cursor-pointer"
                            onClick={openModal}  
                        >
                            Read More
                        </motion.button>
                    </div>

                    {/* Left Section */}
                    <div className="flex justify-start lg:justify-center md:w-1/2 mb-8 md:mb-0">
                        <motion.img
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            src={me}
                            alt="Vathana"
                            className="w-[300px] lg:w-[400px] lg:h-[500px] relative z-10 duration-200 transition rounded-lg hover:shadow-lg hover:shadow-teal-400 hover:scale-105 cursor-pointer"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="hidden lg:block md:w-1/2 lg:text-left">
                        <motion.h1
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="text-2xl sm:text-4xl lg:text-5xl mb-6 font-bold text-teal-400">About Me</motion.h1>
                        <motion.p
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="text-[16px] sm:text-lg lg:text-xl text-white">
                            I am currently pursuing a Bachelor's degree in Computer Science,
                            and specialization in Software Engineering at the Cambodia Academy
                            of Digital Technology. I am eager to learn and grow my skills in the field
                            of Computer Science. I am a hard-working individual and I am always
                            looking for opportunities to improve my knowledge and skills.
                        </motion.p>
                        <motion.button
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="mt-6 bg-teal-400 shadow-lg shadow-teal-300 text-white py-2 px-6 rounded-lg hover:bg-teal-500 hover:shadow-teal-500 transition duration-300"
                            onClick={openModal}  // Add this onClick to open the modal
                        >
                            Read More
                        </motion.button>
                    </div>
                </div>

                {/* Modal for Read More */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-30">
                        <div className="bg-white p-6 rounded-lg w-[80%] sm:w-[60%] lg:w-[40%]">
                            <h2 className="text-2xl font-bold text-teal-400 mb-4">More Details</h2>
                            <p className="text-lg text-gray-700">
                                I am currently pursuing a Bachelor's degree in Computer Science,
                                specializing in Software Engineering at the Cambodia Academy of Digital Technology.
                                I am passionate about continuous learning and growth in the field of computer science.
                                I am also eager to develop my skills through hands-on projects and collaborative work with others.
                                I am particularly interested in web development, and I have worked on several projects using various
                                technologies such as HTML, CSS, JavaScript, and React. I enjoy creating dynamic and user-friendly websites,
                                and I am continuously expanding my expertise in front-end development. I have also started diving into
                                back-end development and have gained experience with frameworks like Node.js, as well as databases such as MongoDB.
                            </p>
                            <div className="mt-4 text-right">
                                <button
                                    className="bg-teal-400 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition duration-300 cursor-pointer"
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
