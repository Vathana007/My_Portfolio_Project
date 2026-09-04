import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import khResources from "./kh";

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        experiences: "Experiences",
        skills: "Skills",
        projects: "Projects",
        achievements: "Achievements",
      },
      home: {
        welcome: "Welcome to my portfolio",
        greeting: "Hi, I'm",
        name: "Vathana",
        role1: "Web Developer",
        role2: "Full Stack Developer",
        role3: "Software Engineer",
        description:
          "Passionate about learning and building minimal, aesthetic, and functional web applications. Currently a Junior Application Developer.",
        downloadCV: "Download CV",
        stats: {
          projects: "Projects",
          internships: "Internships",
          jobs: "Jobs",
          skills: "Skills",
        },
      },
      about: {
        title: "About Me",
        summary:
          "I have recently completed my Bachelor's degree in Computer Science, specializing in Software Engineering at the Cambodia Academy of Digital Technology. As a highly motivated and detail-oriented developer, I have a passion for building user-centric applications and solving complex problems.",
        readMore: "Read More",
        details: {
          p1: "I have recently completed my Bachelor's degree in Computer Science, specializing in Software Engineering at the Cambodia Academy of Digital Technology. I am passionate about continuous learning and taking on innovative challenges in the tech industry.",
          p2: "I am also eager to develop my skills through hands-on projects and collaborative work with others. I am particularly interested in Full Stack development, and I have worked on several projects using various technologies such as HTML, CSS, TailwindCSS, JavaScript, ReactJS, NextJS, and TypeScript.",
          p3: "I enjoy creating dynamic, user-friendly architectures and continuously expanding my expertise in front-end development. Parallel to this, I am actively broadening my back-end capabilities, working with frameworks like Node.js, Laravel, and Ruby on Rails, alongside databases such as MongoDB, MySQL, and PostgreSQL.",
          p4: "Additionally, I am continuously improving my cross-platform mobile application development skills using Flutter, aiming to build seamless and performant experiences across ecosystems.",
        },
        closeBtn: "Close",
        moreDetails: "More Details",
        subtitle: "Discover my journey and expertise",
        badges: {
          developer: "Developer",
          engineer: "Engineer",
        },
        sections: {
          education: {
            title: "Education & Background",
            content:
              "I have recently completed my Bachelor's degree in Computer Science, specializing in Software Engineering at the Cambodia Academy of Digital Technology. I am passionate about continuous learning and taking on innovative challenges in the tech industry.",
          },
          frontend: {
            title: "Frontend Expertise",
            content:
              "I am also eager to develop my skills through hands-on projects and collaborative work with others. I am particularly interested in Full Stack development, and I have worked on several projects using various technologies such as HTML, CSS, TailwindCSS, JavaScript, ReactJS, NextJS, and TypeScript.",
          },
          fullstack: {
            title: "Full Stack Development",
            content:
              "I enjoy creating dynamic, user-friendly architectures and continuously expanding my expertise in front-end development. Parallel to this, I am actively broadening my back-end capabilities, working with frameworks like Node.js, Laravel, and Ruby on Rails, alongside databases such as MongoDB, MySQL, and PostgreSQL.",
          },
          mobile: {
            title: "Mobile Development",
            content:
              "Additionally, I am continuously improving my cross-platform mobile application development skills using Flutter, aiming to build seamless and performant experiences across ecosystems.",
          },
        },
        techStack: "Tech Stack",
      },
      experience: {
        title: "Experience",
        badge: "My Journey",
        subtitle:
          "Building skills and experience through education and real-world projects",
        pageTitle: "Experience | Vathana",
        metaDescription:
          "Experience from Vathana, a passionate web developer and software engineer from Cambodia.",
        education: "Education",
        experience: "Experience",
        educationItems: [
          {
            year: "2023 - Present",
            title: "Bachelor's in Computer Science",
            description:
              "Completed Bachelor's degree in Computer Science with a specialization in Software Engineering at Cambodia Academy of Digital Technology (CADT).",
          },
          {
            year: "2021 - 2024",
            title: "Australian Education Centre",
            description:
              "Completed Academic and professional English proficiency.",
          },
          {
            year: "2020 - 2022",
            title: "High School Diploma",
            description:
              "Science stream with focus on Math, Physics, and Chemistry.",
          },
        ],
        experienceItems: [
          {
            year: "2026-Present",
            title: "Junior Application Developer at Smart Axiata",
            description:
              "Wroking on the development and maintenance of web applications, contributing to both front-end and back-end solutions.",
          },
          {
            year: "2026",
            title: "Internship at BookMeBus",
            description:
              "Built organizer and transit systems. Developed BookMe+ review module.",
          },
          {
            year: "2025",
            title: "Internship at E-Khmer",
            description:
              "Full-stack POS system for phone shop with inventory and invoice management.",
          },
          {
            year: "2024",
            title: "CTF & Hackathon Participant",
            description: "Competed in web security and AI-focused events.",
          },
        ],
      },
      skills: {
        title: "My Skills",
        subtitle:
          "Swipe or scroll to explore my tech stack and tools that bring ideas to life.",
        badge: "Tech Stack",
        swipeHint: "Swipe to see more skills",
        skillNames: {
          php: "PHP",
          laravel: "Laravel",
          rails: "Ruby on Rails",
          java: "Java",
          mysql: "MySQL",
          postgresql: "PostgreSQL",
          mongodb: "MongoDB",
          nodejs: "Node.js",
          flutter: "Flutter",
          python: "Python",
          html: "HTML",
          javascript: "JavaScript",
          react: "ReactJS",
          nextjs: "Next.js",
          vue: "Vue.js",
          typescript: "TypeScript",
          css: "CSS",
          tailwind: "TailwindCSS",
        },
        skillCategories: {
          frontend: "Frontend",
          backend: "Backend",
          databases: "Databases",
          mobile: "Mobile",
          languages: "Languages",
        },
        technologies: "Technologies",
        yearsCoding: "Years Coding",
        projectsBuilt: "Projects Built",
        certificates: "Certificates",
        categories: {
          all: "All",
          frontend: "Frontend",
          backend: "Backend",
          databases: "Databases",
          mobile: "Mobile",
        },
      },
      projects: {
        title: "My Projects",
        subtitle:
          "Explore the applications and systems I've built using modern technologies.",
        badge: "Recent Work",
        pageTitle: "Projects | Vathana",
        metaDescription:
          "Projects from Vathana, a passionate web developer and software engineer from Cambodia.",
        viewProject: "View Project",
        swipeHint: "Swipe to see more",
        items: {
          pos: {
            title: "Phone Shop POS System",
            description:
              "Developed a comprehensive POS system for a phone shop. Implemented full-stack functionality to manage inventory, process orders, and generate invoices with real-time updates.",
          },
          kore: {
            title: "Kore - គភ៌",
            description:
              "A full-stack application built with ReactJS, Tailwind CSS, Node.js and MongoDB. Features dynamic user interactions and seamless data management.",
          },
          portfolio: {
            title: "Portfolio Website",
            description:
              "A professional portfolio website showcasing my work, skills, and experience. Built with React, featuring smooth animations and responsive design.",
          },
          movie: {
            title: "Movie Listing Platform",
            description:
              "A front-end movie listing website built using HTML, CSS, and JavaScript to display movie information and allow interactive user engagement.",
          },
          coffee: {
            title: "Coffee Shop Mobile App",
            description:
              "A mobile application developed with Flutter to manage drink inventory, including create, update, delete, and advanced search functionality.",
          },
          employeetask: {
            title: "Employee Task Management System",
            description:
              "A full stack application built with Vue.js, Laravel, PostgreSQL, and Tailwind CSS. Features user authentication, task management, project management, user role permissions, and real-time notifications for efficient team collaboration.",
          },
        },
      },
      achievements: {
        title: "Achievements",
        badge: "Achievements",
        subtitle: "Recognition & Milestones",
        pageTitle: "Achievements | Vathana",
        metaDescription:
          "Achievements of Vathana, showcasing certifications and completed milestones.",
        viewCertificate: "View Certificate",
        items: {
          ielts: {
            title: "IELTS Certification",
            description:
              "An official report of my IELTS Academic result with band score 5.5.",
          },
          ctf: {
            title: "[Cambodia] CTF for Cam and Laos",
            description:
              "A certificate for Online Capture-the-Flag (CTF) for Cambodia and Lao PDR hosted by the AJCCBC and the Government of Switzerland.",
          },
          python: {
            title: "Basic Python Programming",
            description:
              "A certification of completion for the 3-Week Fast-Track Online Course in Basic Python by ABOVE+BEYOND.",
          },
          uxui: {
            title: "UX/UI Online Course",
            description:
              "A certification in UX/UI Design Online Course by Great Learning Academy.",
          },
          camstem: {
            title: "Volunteer at CamSTEM Festival",
            description:
              "A certification as a Protocol Team member at CamSTEM Festival 2025 by STEM Cambodia.",
          },
        },
      },
      footer: {
        rights: "All Rights Reserved",
        role: "Full Stack Developer & Software Engineer",
        quickLinks: "Quick Links",
        projects: "Projects",
        basedIn: "Based In",
        location: "Phnom Penh, Cambodia",
        availability: "Available for freelance",
        designedBuilt: "Designed & Built with",
        by: "by",
        backToTop: "Back to Top",
      },
      theme: {
        light: "Light",
        dark: "Dark",
      },
    },
  },
  ...khResources,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "kh"],
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
