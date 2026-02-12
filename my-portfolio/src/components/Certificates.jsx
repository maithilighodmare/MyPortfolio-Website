import React, { useState } from "react";
import "../styles/Certificates.css";
import { FaCalendarAlt } from "react-icons/fa";

/* PDFs */
import azurePdf from "../assets/certificates/Fundamentals of Azure AI services.pdf";
import sqlPdf from "../assets/certificates/sql_basic certificate.pdf";
import deltaPdf from "../assets/certificates/certificate-delta-batch-.pdf";
import javaPdf from "../assets/certificates/Java-Certificate.pdf";

const certificatesData = [
  {
    title: "Fundamentals of Azure AI Services",
    issuer: "Microsoft Learn",
    date: "February 2024",
    description: "Covers Azure AI fundamentals, core services, and responsible AI concepts.",
    file: azurePdf,
  },
  {
    title: "SQL Basic Certificate",
    issuer: "HackerRank",
    date: "2024",
    description: "Validated core SQL querying skills, joins, and data retrieval basics.",
    file: sqlPdf,
  },
  {
    title: "Delta - Full Stack Web Development",
    issuer: "Apna College",
    date: "2024",
    description: "Full stack training covering frontend, backend, and project workflows.",
    file: deltaPdf,
  },
  {
    title: "Java Certification",
    issuer: "One Roadmap",
    date: "May 2025",
    description: "Demonstrated Java fundamentals, OOP, and core API usage.",
    file: javaPdf,
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
      <div className="certificates-header">
        <p className="certificates-kicker">Proof of Work</p>
        <h2 className="certificates-title">Certificates</h2>
      </div>

      <div className="certificates-container">
        {certificatesData.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-content">
              <p className="certificate-chip">{cert.issuer}</p>
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-date">
                <FaCalendarAlt style={{ marginRight: "5px" }} />
                {cert.date}
              </p>
              <p className="certificate-desc">{cert.description}</p>
              <button
                className="certificate-open-btn"
                type="button"
                onClick={() => openModal(cert)}
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && activeCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div>
                <p className="certificate-chip">{activeCert.issuer}</p>
                <h3 className="modal-title">{activeCert.title}</h3>
              </div>
              <button className="modal-back" onClick={closeModal}>
                Close
              </button>
            </div>

            <iframe
              src={`${activeCert.file}#toolbar=0&navpanes=0&scrollbar=0`}
              title={activeCert.title}
              className="certificate-pdf-full"
              scrolling="no"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
