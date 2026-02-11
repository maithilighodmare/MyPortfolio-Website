import React from "react";
import "../styles/Projects.css";
import { FaEye, FaGithub } from "react-icons/fa";
import planItImg from "../assets/PlanIt.png";
import shivasImg from "../assets/shivas.png";
import me3Img from "../assets/me3.jpeg";

const projectsData = [
  {
    title: "PlanIt - Task Manager",
    image: planItImg,
    live: "https://planit-taskmanager.netlify.app/",
    github: "https://github.com/dsmundhe/TaskManager",
    description:
      "Mobile-first task manager with clean UI, reminders, and cloud sync for daily planning.",
    tech: ["React Native", "Firebase", "Expo"],
  },
  {
    title: "Travel Blog Website",
    image: me3Img,
    live: "",
    github: "",
    description:
      "A responsive travel blog layout with journal-style sections and clean visual hierarchy.",
    tech: ["HTML", "CSS", "JavaScript"],
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
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
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
