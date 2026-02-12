import React, { useEffect, useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "../styles/Home.css";
import me2 from "../assets/me2.png";
import resumePdf from "../assets/Maithili_Ghodmare 2025.pdf";
import Toast from "./Toast";

const Home = () => {
  const [toast, setToast] = useState({ message: "", type: "success" });

  useEffect(() => {
    if (!toast.message) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setToast({ message: "", type: "success" });
    }, 2600);

    return () => clearTimeout(timer);
  }, [toast.message]);

  const handleResumeDownload = (event) => {
    const confirmed = window.confirm(
      "Do you want to download Maithili_Ghodmare2025.pdf?"
    );

    if (!confirmed) {
      event.preventDefault();
      return;
    }

    setToast({ message: "Resume download started.", type: "success" });
  };

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
          <div className="home-actions">
            <a className="btn" href="#about">
              Learn More
            </a>
            <a
              className="btn btn-secondary"
              href={resumePdf}
              download="Maithili_Ghodmare2025.pdf"
              onClick={handleResumeDownload}
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="home-image">
          <img src={me2} alt="Profile" decoding="async" />
        </div>
      </div>
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "success" })}
      />
    </section>
  );
};

export default Home;
