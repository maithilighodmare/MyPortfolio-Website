import { useEffect, useRef } from "react";
import "../styles/Experience.css";

const experiences = [
  {
    period: "July 14, 2026 – Present",
    role: "Programmer Analyst Trainee",
    company: "Cognizant",
    status: "Current role",
    details: [
      "Training in Salesforce Marketing Cloud and MuleSoft domains.",
    ],
  },
  {
    period: "January – March 2026",
    role: "React Native Intern",
    company: "Ennalogic",
    details: [
      "Built a cross-platform mobile app using React Native.",
      "Developed responsive UI and integrated APIs.",
      "Gained hands-on experience in mobile app development.",
    ],
  },
  {
    period: "2025",
    role: "MuleSoft Developer Intern (Gen C Intern)",
    company: "Cognizant",
    details: [
      "Worked as a Gen C Intern in the MuleSoft domain at Cognizant.",
      "Developed and integrated APIs using MuleSoft Anypoint Platform.",
      "Worked with RAML, DataWeave, and API-Led Connectivity to build scalable integrations.",
      "Collaborated with cross-functional teams on enterprise integration projects.",
    ],
  },
];

function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!("IntersectionObserver" in window)) {
      section.classList.add("experience--visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("experience--visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="experience"
      aria-labelledby="experience-title"
      ref={sectionRef}
    >
      <div className="experience__inner">
        <header className="experience__heading">
          <span className="experience__eyebrow">My journey</span>
          <h2 id="experience-title">Experience</h2>
          <p>Roles where I’ve learned, built, and grown.</p>
        </header>

        <div className="experience__timeline">
          {experiences.map(({ period, role, company, status, details }) => (
            <article className="experience-card" key={`${company}-${role}`}>
              <div className="experience-card__topline">
                <span className="experience-card__period">{period}</span>
                {status ? (
                  <span className="experience-card__status">
                    <span className="experience-card__status-dot" aria-hidden="true" />
                    {status}
                  </span>
                ) : null}
              </div>
              <h3>{role}</h3>
              <p className="experience-card__company">{company}</p>
              <ul>
                {details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
