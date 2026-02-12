import React, { useState } from "react";
import "../styles/Projects.css";
import { FaEye, FaGithub } from "react-icons/fa";
import planItImg from "../assets/project/planIt.png";
import shivasImg from "../assets/project/shivas.png";
import watchImg from "../assets/project/watch.png";
import cricketImg from "../assets/project/cricket.png";
import airbnbImg from "../assets/project/airbnb.png";
import zerodhaImg from "../assets/project/zerodha.png";
import drivingSchoolImg from "../assets/project/drivingschool.png";
import neuroflexImg from "../assets/project/neuroflex.png";

const projectCategories = ["All", "Websites", "Mobile App", "IOT", "Others"];

const projectsData = [
  {
    title: "PlanIt - Task Manager",
    image: planItImg,
    live: "https://planit-taskmanager.netlify.app/",
    github: "https://github.com/dsmundhe/TaskManager",
    description:
      "Mobile-first task manager with clean UI, reminders, and cloud sync for daily planning.",
    tech: ["React Native", "Firebase", "Expo"],
    category: "Mobile App",
  },
  {
    title: "Real-Time Mess Management System",
    image: shivasImg,
    live: "https://shivasmessmanagementdashboard.vercel.app/",
    github:
      "https://github.com/dsmundhe/Mess-Management-System-for-Shivas-s-Kitchen",
    description:
      "Operations dashboard for daily meals, inventory, and analytics with role-based access.",
    tech: ["MERN", "Material-UI", "Flask API", "JWT"],
    category: "Websites",
  },
  {
    title: "Luxetime Watch Store",
    image: watchImg,
    live: "https://lnkd.in/gDnv5Mvd",
    github: "https://lnkd.in/g5V-MuSP",
    description:
      "Modern e-commerce platform for watches offering seamless shopping experience with clean UI and fast deployment.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    category: "Websites",
  },
  {
    title: "Wick.Play - Cricket Tournaments Platform",
    image: cricketImg,
    live: "https://crickapp-wickplay.netlify.app/",
    github: "",
    description:
      "Platform to create, manage, and join cricket tournaments with smooth navigation and efficient state management.",
    tech: ["React.js", "Redux.js", "React Router", "JavaScript", "CSS", "HTML"],
    category: "Websites",
  },
  {
    title: "Airbnb Clone",
    image: airbnbImg, // replace with actual image later
    live: "", // add deployed link if available
    github: "https://github.com/maithilighodmare/My-AirBNB-Clone", // add GitHub link
    description:
      "Full-stack Airbnb clone with property listings, authentication, booking system, and responsive UI.",
    tech: ["MERN Stack", "JWT", "MongoDB", "Express", "React", "Node.js"],
    category: "Websites",
  },
  {
    title: "Zerodha Clone",
    image: zerodhaImg,
    live: "",
    github: "https://github.com/maithilighodmare/My-Zerodha",
    description:
      "Stock trading platform UI inspired by Zerodha with dashboard, charts, portfolio tracking, and modern financial UI design.",
    tech: ["React.js", "Chart.js", "Material UI", "Node.js"],
    category: "Websites",
  },
  {
    title: "Driving School Website",
    image: drivingSchoolImg, // replace with actual image later
    live: "",
    github: "https://github.com/maithilighodmare/Driving-School-Website1",
    description:
      "Responsive driving school website with course details, booking form, instructor profiles, and contact integration.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Websites",
  },

  {
    title: "NeuroFlex Mat - Smart Reflex Monitoring System",
    image: neuroflexImg,
    live: "",
    github: "",
    description:
      "Patent-approved IoT-based healthcare system integrating sensor-enabled mats and mobile app for real-time rehabilitation monitoring.",
    tech: [
      "IoT",
      "Embedded Systems",
      "Android Development",
      "Cloud Integration",
    ],
    category: "IOT",
  },
  {
    title: "NeuroFlex Mat - Smart Reflex Monitoring System",
    image: neuroflexImg,
    live: "",
    github: "",
    description:
      "Patent-approved IoT-based healthcare system integrating sensor-enabled mats and mobile app for real-time rehabilitation monitoring.",
    tech: [
      "IoT",
      "Embedded Systems",
      "Android Development",
      "Cloud Integration",
    ],
    category: "Mobile App",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-filters">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-media">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tech.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn primary"
                    aria-label={`View ${project.title} live`}
                  >
                    <FaEye />
                    Live
                  </a>
                ) : (
                  <span className="project-btn disabled">Live</span>
                )}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn ghost"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub />
                    Code
                  </a>
                ) : (
                  <span className="project-btn disabled">Code</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
