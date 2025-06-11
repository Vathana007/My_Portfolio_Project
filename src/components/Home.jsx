import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import image from "../assets/home-me.jpg"; 
import CV from "../assets/Chort_Sereivathana-CV.pdf"; 
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  const roles = ["Web Developer", "Full Stack Developer", "Software Engineer"];

  useEffect(() => {
    let timeout;

    if (letterIndex < roles[roleIndex].length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setLetterIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500); 
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, roleIndex]);

  return (
    <>
      <Helmet>
        <title>Vathana | Web Developer & Software Engineer</title>
        <meta name="description" content="Welcome to Vathana's portfolio. Web Developer and Software Engineer based in Cambodia." />
      </Helmet>
      <section id="home" className="overflow-hidden relative pt-32 pb-12 lg:pb-12 min-h-screen flex items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center px-6 lg:px-12">
          {/* Left Section */}
          <div className="flex flex-col justify-center relative z-20 order-2 lg:order-1">
            <div className="text-center lg:text-left">
              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="mb-4 inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-medium tracking-wide"
              >
                Welcome to my portfolio
              </motion.div>
              <motion.h1
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-slate-200 text-4xl sm:text-5xl lg:text-6xl font-extrabold !leading-tight tracking-tight mb-6"
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Vathana</span> <br />
                <span className="text-slate-400 text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 block">
                  And I'm a <span className="text-teal-400">{text}</span><span className="animate-pulse text-teal-400">|</span>
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Passionate about learning and building minimal, aesthetic, and functional web applications. Currently studying at Cambodia Academy of Digital Technology.
              </motion.p>

              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="flex justify-center lg:justify-start mt-6"
              >
                {/* Button to download CV */}
                <a href={CV} download>
                  <button className="bg-teal-500 text-slate-950 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] flex items-center gap-2 group cursor-pointer hover:-translate-y-1">
                   Download CV
                    <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-1 duration-300" />
                  </button>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center relative order-1 lg:order-2 mb-10 lg:mb-0">
            {/* Decorative background glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] xl:w-[380px] xl:h-[380px] bg-teal-500/20 blur-[80px] rounded-full z-0"></div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="relative z-10"
            >
              <div className="p-2 border border-white/10 bg-white/5 rounded-full backdrop-blur-sm">
                <img
                  src={image}
                  alt="Vathana"
                  className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] xl:w-[400px] xl:h-[400px] object-cover rounded-full transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] filter grayscale-[20%] hover:grayscale-0 cursor-pointer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;