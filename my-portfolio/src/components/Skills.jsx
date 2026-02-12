import React, { useState } from "react";
import "../styles/Skills.css";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Java",
  "Other",
];

const iconBase = "https://cdn.simpleicons.org";
const skillsData = [
  { name: "Tailwind CSS", category: "Frontend", icon: `${iconBase}/tailwindcss` },
  { name: "JavaScript", category: "Frontend", icon: `${iconBase}/javascript` },
  { name: "React", category: "Frontend", icon: `${iconBase}/react` },
  { name: "UI/UX", category: "Frontend", icon: `${iconBase}/figma` },
  { name: "HTML", category: "Frontend", icon: `${iconBase}/html5` },
  { name: "Bootstrap", category: "Frontend", icon: `${iconBase}/bootstrap` },
  { name: "React Native", category: "Frontend", icon: `${iconBase}/react` },

  {
    name: "Java",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  { name: "Node.js", category: "Backend", icon: `${iconBase}/nodedotjs` },
  { name: "Express.js", category: "Backend", icon: `${iconBase}/express` },
  { name: "REST APIs", category: "Backend", icon: `${iconBase}/postman` },

  { name: "MySQL", category: "Database", icon: `${iconBase}/mysql` },
  { name: "MongoDB", category: "Database", icon: `${iconBase}/mongodb` },
  { name: "Firebase", category: "Database", icon: `${iconBase}/firebase` },

  { name: "Spring Boot", category: "Java", icon: `${iconBase}/springboot` },
  { name: "Hibernate", category: "Java", icon: `${iconBase}/hibernate` },
  { name: "Maven", category: "Java", icon: `${iconBase}/apachemaven` },

  { name: "Git", category: "Other", icon: `${iconBase}/git` },
  { name: "GitHub", category: "Other", icon: `${iconBase}/github` },
  {
    name: "MATLAB",
    category: "Other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  },
  {
    name: "Canva",
    category: "Other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills">
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
              <img
                className="skill-icon"
                src={skill.icon}
                alt={`${skill.name} logo`}
                loading="lazy"
                decoding="async"
              />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
