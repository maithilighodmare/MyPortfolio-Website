import React from "react";
import "../styles/Education.css";

function Education() {
  return (
    <div className="education">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>B.Tech in Computer Science (IoT)</h3>
          <p>YCCE, Nagpur • 2022–2026</p>
        </div>
        <div className="education-item">
          <h3>Senior Secondary (Science)</h3>
          <p>School of Scholars • 2020–2022</p>
        </div>
        <div className="education-item">
          <h3>Secondary</h3>
          <p>School of Scholars • 2018–2020</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
