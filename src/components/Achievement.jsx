import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.png";
import certificate3 from "../assets/certificate3.jpg";
import certificate4 from "../assets/certificate4.png";
import CertificatePDF1 from "../assets/[Cambodia] CTF for Cam and Laos - Certificate_Mr. Chort Sereivathana.pdf";
import CertificatePDF2 from "../assets/117-Chort Sereivathana-Python.pdf";
import CertificatePDF4 from "../assets/14_Chort Sereivathana-STEM.pdf";
import IELTS from "../assets/IELTS.png";

const achievements = [
  {
    id: 5,
    title: "IELTS Certification",
    description: "An official report of my IELTS Academic result with band score 5.5.",
    icon: IELTS,
    certificateLink: "#",
  },
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
        <title>Achievements | Vathana</title>
        <meta name="description" content="Achievements of Vathana, showcasing certifications and completed milestones." />
      </Helmet>

      <section id="achievements" className="py-24 px-6 relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="mb-16 lg:mb-20">
            <h2 className="text-slate-200 font-extrabold lg:text-5xl sm:text-4xl text-3xl mb-4">Achievements</h2>
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
              className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 pt-4 px-4 md:px-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch text-left"
            >
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="min-w-[280px] sm:min-w-[360px] max-w-[360px] snap-center flex-shrink-0 bg-slate-900/60 backdrop-blur-xl border border-white/5 hover:border-teal-500/30 transition-all duration-500 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] overflow-hidden group hover:-translate-y-3 flex flex-col h-auto relative"
              >
                {/* Decorative Glow */}
                <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/5 transition-colors duration-500 z-0 pointer-events-none"></div>

                {/* Icon Section */}
                <div className="w-full h-56 overflow-hidden relative bg-slate-950 flex items-center justify-center p-4 border-b border-white/5 z-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10 opacity-90 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <img
                    src={achievement.icon}
                    alt={achievement.title}
                    className="w-full h-full object-contain transition duration-700 transform group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(20,184,166,0.3)] z-20 relative"
                  />
                </div>
                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-20">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-3">{achievement.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-[15px] mb-6 flex-grow leading-relaxed">{achievement.description}</p>
                  <a
                    href={achievement.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 font-semibold py-2.5 px-6 rounded-lg transition duration-300 hover:bg-teal-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] mt-auto"
                  >
                    View Certificate
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
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

export default Achievement;