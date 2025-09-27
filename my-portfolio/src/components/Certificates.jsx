import React, { useState } from "react";
import "../styles/Certificates.css";
import { FaCalendarAlt } from "react-icons/fa";

const certificatesData = [
  {
    title: "React Developer Certificate",
    issuer: "Coursera",
    date: "June 2024",
    image: "cert1.jpg",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    date: "March 2024",
    image: "cert2.jpg",
  },
  {
    title: "JavaScript Mastery",
    issuer: "freeCodeCamp",
    date: "January 2024",
    image: "cert3.jpg",
  },
  {
    title: "JavaScript Mastery",
    issuer: "freeCodeCamp",
    date: "January 2024",
    image: "cert3.jpg",
  },
  {
    title: "JavaScript Mastery",
    issuer: "freeCodeCamp",
    date: "January 2024",
    image: "cert3.jpg",
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
    <section id="certificates" className="certificates-section">
      <h2 className="section-title">My Certificates</h2>
      <div className="certificates-container">
        {certificatesData.map((cert, index) => (
          <div
            className="certificate-card"
            key={index}
            onClick={() => openModal(cert)}
          >
            <img
              src="src\assets\me3.jpg"
              alt={cert.title}
              className="certificate-image"
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
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
