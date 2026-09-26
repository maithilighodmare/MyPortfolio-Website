import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import "../styles/Skills.css";

const categories = [
  "All",
  "Web Development",
  "Database",
  "Java",
  "Salesforce",
  "AI & Automation",
  "Cloud",
  "Tools",
];

const iconBase = "https://cdn.simpleicons.org";
const skillsData = [
  { name: "Tailwind CSS", category: "Web Development", icon: `${iconBase}/tailwindcss` },
  { name: "JavaScript", category: "Web Development", icon: `${iconBase}/javascript` },
  { name: "React", category: "Web Development", icon: `${iconBase}/react` },
  { name: "UI/UX", category: "Web Development", icon: `${iconBase}/figma` },
  { name: "HTML", category: "Web Development", icon: `${iconBase}/html5` },
  { name: "Bootstrap", category: "Web Development", icon: `${iconBase}/bootstrap` },
  { name: "React Native", category: "Web Development", icon: `${iconBase}/react` },

  {
    name: "Java",
    category: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  { name: "Node.js", category: "Web Development", icon: `${iconBase}/nodedotjs` },
  { name: "Express.js", category: "Web Development", icon: `${iconBase}/express` },
  { name: "REST APIs", category: "Web Development", icon: `${iconBase}/postman` },

  { name: "MySQL", category: "Database", icon: `${iconBase}/mysql` },
  { name: "MongoDB", category: "Database", icon: `${iconBase}/mongodb` },
  { name: "Firebase", category: "Cloud", icon: `${iconBase}/firebase` },

  { name: "Spring Boot", category: "Java", icon: `${iconBase}/springboot` },
  { name: "Hibernate", category: "Java", icon: `${iconBase}/hibernate` },
  { name: "Maven", category: "Java", icon: `${iconBase}/apachemaven` },

  { name: "MuleSoft", category: "Salesforce", icon: `${iconBase}/salesforce` },
  { name: "Marketing Cloud", category: "Salesforce", icon: `${iconBase}/salesforce` },

  { name: "Generative AI", category: "AI & Automation", icon: `${iconBase}/openai` },
  { name: "Prompt Engineering", category: "AI & Automation", icon: `${iconBase}/googlegemini` },

  { name: "Git", category: "Tools", icon: `${iconBase}/git` },
  { name: "GitHub", category: "Tools", icon: `${iconBase}/github` },
  {
    name: "MATLAB",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  },
  {
    name: "Canva",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!("IntersectionObserver" in window)) {
      section.classList.add("skills--visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("skills--visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills" ref={sectionRef}>
      <div className="skills-container">
        <header className="skills-heading">
          <span className="skills-kicker">
            <FaStar aria-hidden="true" /> A little bit of everything
          </span>
          <h2 className="skills-title">Skills &amp; Tools</h2>
          <p>My favorite tools for turning ideas into useful experiences.</p>
        </header>

        {/* Category Tabs */}
        <div className="skills-tabs" role="group" aria-label="Filter skills by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={activeCategory === cat}
              className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className="skills-list" aria-live="polite">
          {filteredSkills.map((skill, index) => (
            <span
              key={skill.name}
              className={`skill-item skill-item--${skill.category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              style={{
                "--skill-delay": `${index * 45}ms`,
              }}
            >
              <span className="skill-icon-frame">
                <img
                  className="skill-icon"
                  src={skill.icon}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span>{skill.name}</span>
              <FaStar className="skill-sparkle" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
