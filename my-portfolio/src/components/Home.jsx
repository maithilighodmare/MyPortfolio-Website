import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "../styles/Home.css";
import me2 from "../assets/me2.png";

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        {/* Left Content */}
        <div className="home-text">
          <h1>
            Building Modern Web <br /> Experiences That Inspire
          </h1>
          <p>
            Creating web applications that are functional, professional, and
            enjoyable to use is my focus. I aim to make projects that leave a
            positive impression.
          </p>
          <div className="icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <a className="btn" href="#about">
            Learn More
          </a>
        </div>

        {/* Right Image */}
        <div className="home-image">
          <img src={me2} alt="Profile" decoding="async" />
        </div>
      </div>
    </section>
  );
};

export default Home;
