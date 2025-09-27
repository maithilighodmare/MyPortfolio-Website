import React from "react";
import "../styles/Projects.css";
import { FaEye, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Portfolio Website",
    image: "project1.jpg",
    live: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Gym Tracker App",
    image: "project2.jpg",
    live: "#",
    github: "#",
    tech: ["React Native", "Firebase", "Expo"],
  },
  {
    title: "Travel Blog Website",
    image: "project3.jpg",
    live: "#",
    github: "#",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Travel Blog Website",
    image: "project3.jpg",
    live: "#",
    github: "#",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Travel Blog Website",
    image: "project3.jpg",
    live: "#",
    github: "#",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Travel Blog Website",
    image: "project3.jpg",
    live: "#",
    github: "#",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Travel Blog Website",
    image: "project3.jpg",
    live: "#",
    github: "#",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="monitor-screen">
              <img
                src="src\assets\me3.jpg"
                alt={project.title}
                className="project-image"
              />

              <div className="screen-content">
                <div className="project-overlay">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon"
                  >
                    <FaEye />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon"
                  >
                    <FaGithub />
                  </a>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-tech">{project.tech.join(", ")}</p>
              </div>
            </div>

            <div className="monitor-stand"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
