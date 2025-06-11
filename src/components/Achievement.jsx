import React from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { fadeIn } from "../varaints";
import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.png";
import certificate3 from "../assets/certificate3.jpg";
import certificate4 from "../assets/certificate4.png";
import CertificatePDF1 from "../assets/[Cambodia] CTF for Cam and Laos - Certificate_Mr. Chort Sereivathana.pdf";
import CertificatePDF2 from "../assets/117-Chort Sereivathana-Python.pdf";
import CertificatePDF4 from "../assets/14_Chort Sereivathana-STEM.pdf";

const achievements = [
  {
    id: 1,
    title: "[Cambodia] CTF for Cam and Laos",
    description: "A certificate for Online Capture-the-Flag (CTF) for Cambodia and Lao PDR hosted by the AJCCBC and the Government of Switzerland.",
    icon: certificate1,
    certificateLink: CertificatePDF1,
  },
  {
    id: 2,
    title: "Basic Python Programming",
    description: "A certification completion of the 3-Week Fast-Track Online Course in Basic Python by ABOVE+BEYOND.",
    icon: certificate2,
    certificateLink: CertificatePDF2,
  },
  {
    id: 3,
    title: "UX/UI Online Course",
    description: "A certification in UX/UI Design Online Course by Great Learning Academy.",
    icon: certificate3,
    certificateLink: certificate3,
  },
  {
    id: 4,
    title: "Volunteer at CamSTEM Festival",
    description: "A certification as a Protocol Team at CamSTEM Festival 2025 by STEM Cambodia.",
    icon: certificate4,
    certificateLink: CertificatePDF4,
  },
];

const Achievement = () => {
  return (
    <>
      <Helmet>
        <title>Achievements | Vathana</title>
        <meta name="description" content="Achievements of Vathana, showcasing certifications and completed milestones." />
      </Helmet>

      <section id="achievements" className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400 mb-10">
            Achievements
          </motion.h2>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                key={achievement.id}
                className="bg-gray-800 hover:text-black hover:shadow-teal-200 hover:border-teal-200 transition-all duration-300 rounded-lg shadow-lg cursor-pointer transform hover:scale-105"
              >
                {/* Icon Section */}
                <div className="w-full h-56 overflow-hidden rounded-t-lg flex items-center justify-center bg-gray-900">
                  <img
                    src={achievement.icon}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition duration-300 transform"
                  />
                </div>
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-400 mb-3">{achievement.title}</h3>
                  <p className="text-white text-sm mb-4">{achievement.description}</p>
                  <a
                    href={achievement.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent border-2 border-teal-400 text-white py-2 px-4 rounded-lg shadow-lg transition duration-200 hover:bg-teal-500 hover:shadow-teal-600"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Achievement;