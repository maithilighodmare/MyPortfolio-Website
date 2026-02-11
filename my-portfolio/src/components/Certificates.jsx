import React, { useState } from "react";
import "../styles/Certificates.css";
import { FaCalendarAlt } from "react-icons/fa";
import certImgA from "../assets/me3.jpeg";
import certImgB from "../assets/me1.jpg";

const certificatesData = [
  {
    title: "React Developer Certificate",
    issuer: "Coursera",
    date: "June 2024",
    image: certImgA,
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    date: "March 2024",
    image: certImgB,
  },
  {
    title: "JavaScript Mastery",
    issuer: "freeCodeCamp",
    date: "January 2024",
    image: certImgA,
  },
];

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  const openModal = (cert) => {
    setActiveCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveCert(null);
  };

  return (
    <section className="certificates-section">
      <h2 className="certificates-title">My Certificates</h2>
      <div className="certificates-container">
        {certificatesData.map((cert, index) => (
          <div
            className="certificate-card"
            key={index}
            onClick={() => openModal(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(cert);
              }
            }}
          >
            <img
              src={cert.image}
              alt={`${cert.title} certificate`}
              className="certificate-image"
              loading="lazy"
              decoding="async"
            />
            <div className="certificate-content">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">
                <FaCalendarAlt style={{ marginRight: "5px" }} />
                {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && activeCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-back" onClick={closeModal}>
              Back
            </button>
            <div className="modal-body">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="modal-image"
                decoding="async"
              />
              <div className="modal-details">
                <h3>{activeCert.title}</h3>
                <p className="modal-issuer">{activeCert.issuer}</p>
                <p className="modal-date">
                  <FaCalendarAlt style={{ marginRight: "6px" }} />
                  {activeCert.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
