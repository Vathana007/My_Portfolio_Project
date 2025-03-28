import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../varaints";
import image from "../assets/home-me.jpg"; // Your image path
import CV from "../assets/Chort_Sereivathana-CV.pdf"; // Your CV link

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  const roles = ["Web Developer", "Software Engineer"];

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
      }, 1500); // Wait 1.5s before typing next role
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, roleIndex]);

  return (
    <section className="bg-dark overflow-hidden relative pt-20 pb-12 lg:pb-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[570px] justify-center items-center">
        {/* Left Section */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20 ml-5 lg:ml-32">
          <div className="text-center md:text-left">
            <motion.h1
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Hi, I am Vathana <br />
              <span className="text-teal-400 text-xl sm:text-2xl lg:text-4xl">
                And I am a {text} <span className="animate-pulse">|</span>
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-lg text-white"
            >
              Study More Get knowledge More. Practice Make Perfect. <br />
              Cambodia Academy of Digital Technology
            </motion.p>

            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex justify-center md:justify-start mt-6"
            >
              {/* Button to download CV */}
              <a href={CV} download>
                <button className="bg-transparent border-2 border-teal-400 py-2 px-3 rounded-lg duration-200 transition text-teal-400 shadow-lg shadow-teal-400 flex items-center gap-2 hover:bg-teal-400 hover:text-white group cursor-pointer">
                  Get More Info..
                  <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
                </button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center relative ">
          <motion.img
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src={image}
            alt="Vathana"
            className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] object-cover rounded-full relative z-10 duration-200 transition hover:shadow-xl hover:shadow-teal-400 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;