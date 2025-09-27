import React, { useState } from "react";
import "../styles/Skills.css";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Cloud Computing",
];

const skillsData = [
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "UI/UX", category: "Frontend" },
  { name: "HTML", category: "Frontend" },

  { name: "Java", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Hibernate", category: "Backend" },
  { name: "JPA", category: "Backend" },

  { name: "MySQL", category: "Database" },
  { name: "Oracle DB", category: "Database" },

  { name: "AWS", category: "Cloud Computing" },
  { name: "Azure", category: "Cloud Computing" },
  { name: "Google Cloud Platform", category: "Cloud Computing" },
  { name: "Docker", category: "Cloud Computing" },
  { name: "Kubernetes", category: "Cloud Computing" },
  { name: "Terraform", category: "Cloud Computing" },
  { name: "Jenkins", category: "Cloud Computing" },
  { name: "CI/CD pipelines", category: "Cloud Computing" },
  { name: "Firebase", category: "Cloud Computing" },
  { name: "Operating Systems", category: "Cloud Computing" },
  { name: "MATLAB", category: "Cloud Computing" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills Section</h2>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className="skills-list">
          {filteredSkills.map((skill, index) => (
            <span
              key={index}
              className="skill-item"
              style={{
                animationDelay: `${index * 0.08}s`, // stagger animation
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
