import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import BeyondCode from "./components/BeyondCode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("reveal--visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <section id="home" className="reveal">
        <Home />
      </section>
      <section id="about" className="reveal">
        <About />
      </section>
      <section id="skills" className="reveal">
        <Skills />
      </section>
      <section id="projects" className="reveal">
        <Projects />
      </section>
      <section id="education" className="reveal">
        <Education />
      </section>
      <section id="certificates" className="reveal">
        <Certificates />
      </section>
      <section id="hobbies" className="reveal">
        <BeyondCode />
      </section>
      <section id="contact" className="reveal">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;

