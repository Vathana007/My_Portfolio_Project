import "./App.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import About from "./components/About";
import Achievement from "./components/Achievement";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import { useTheme } from "./context/ThemeContext";
import { useTranslation } from "react-i18next";

function App() {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(
    () => window.location.hash.replace("#", "") || "home",
  );

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveSection(window.location.hash.replace("#", "") || "home");
    };

    window.addEventListener("hashchange", updateActiveSection);
    return () => window.removeEventListener("hashchange", updateActiveSection);
  }, []);

  const sectionTitles = {
    home: "Vathana | Web Developer & Software Engineer",
    about: `${t("nav.about")} - Vathana`,
    experiences: `${t("nav.experiences")} - Vathana`,
    skills: `${t("nav.skills")} - Vathana`,
    projects: `${t("nav.projects")} - Vathana`,
    achievements: `${t("nav.achievements")} - Vathana`,
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <Helmet>
        <title>{sectionTitles[activeSection] || sectionTitles.home}</title>
      </Helmet>
      <Navbar />

      <main>
        <Home />
        <About />
        <Experience />
        <Skill />
        <Project />
        <Achievement />
      </main>
      <Footer />
    </div>
  );
}

export default App;
