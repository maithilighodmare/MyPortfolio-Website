import React from "react";
import "../styles/About.css";
import me3 from "../assets/me3.jpeg";

const About = () => {
  return (
    <section className="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src={me3} alt="Profile" loading="lazy" decoding="async" />
          </div>
          <div className="about-text">
            <p>
              Hi, I'm <strong>Maithili Ghodmare</strong>, a B.Tech CSE (IoT)
              student at YCCE, Nagpur (2026). I'm passionate about building
              impactful solutions using the{" "}
              <strong>MERN stack, Java, and IoT</strong>. My work spans from
              patent-approved IoT projects to full-stack apps like task
              managers, mess management systems, and tournament platforms.
            </p>
            <p>
              Skilled in{" "}
              <strong>
                Java, JavaScript, React, Node.js, Express.js, MongoDB, MySQL
              </strong>
              , and front-end design, I enjoy turning ideas into functional,
              user-friendly applications.
            </p>
            <p>
              Always ready to learn and explore more, I aim to grow as a
              developer while contributing to innovative projects.
            </p>
            <a className="btn" href="#projects">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
