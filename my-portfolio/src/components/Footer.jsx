import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Maithili Ghodmare</h3>
        <p>Creating with passion and pastel pixels</p>
        <div className="footer-details">
          <p>Email: ghodmaremaithili1@gmail.com</p>
          <p>Phone: 87436733098</p>
          <p>Address: Nagpur, Maharashtra</p>
        </div>
      </div>

      <div className="footer-center">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
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
      </div>

      <div className="footer-right">
        <div className="footer-map">
          <iframe
            title="Nagpur Map"
            src="https://www.google.com/maps?q=Nagpur,Maharashtra&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
