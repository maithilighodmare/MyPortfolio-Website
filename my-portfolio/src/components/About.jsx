import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import me3 from "../assets/meworking.png";

const About = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    if (reducedMotion.matches || coarsePointer.matches) return undefined;

    const current = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let frame = null;

    const animate = () => {
      current.x += (target.x - current.x) * 0.09;
      current.y += (target.y - current.y) * 0.09;
      image.style.setProperty("--about-tilt-x", `${current.x * 3.5}deg`);
      image.style.setProperty("--about-tilt-y", `${current.y * -2.8}deg`);
      image.style.setProperty("--about-shift-x", `${current.x * 3}px`);
      image.style.setProperty("--about-shift-y", `${current.y * 3}px`);

      if (Math.abs(target.x - current.x) > 0.005 || Math.abs(target.y - current.y) > 0.005) {
        frame = requestAnimationFrame(animate);
      } else {
        frame = null;
      }
    };

    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;
      const bounds = image.getBoundingClientRect();
      target.x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
      target.y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
      if (frame === null) frame = requestAnimationFrame(animate);
    };

    const handlePointerLeave = () => {
      target.x = 0;
      target.y = 0;
      if (frame === null) frame = requestAnimationFrame(animate);
    };

    image.addEventListener("pointermove", handlePointerMove);
    image.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      image.removeEventListener("pointermove", handlePointerMove);
      image.removeEventListener("pointerleave", handlePointerLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-container">
        <div className="about-content">
          <div className="about-image" ref={imageRef}>
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
