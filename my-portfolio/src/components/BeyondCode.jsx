import React from "react";
import "../styles/BeyondCode.css";
import potteryIcon from "../assets/pottery.svg";

const hobbies = [
  {
    title: "Painting",
    text: "I enjoy expressing ideas with colors, patterns, and digital sketches.",
    image: "https://img.icons8.com/color/96/paint-palette.png",
    alt: "Painting palette icon",
  },
  
  {
    title: "Reading",
    text: "I read books and articles to broaden perspective and keep learning.",
    image: "https://img.icons8.com/color/96/open-book--v1.png",
    alt: "Reading book icon",
  },
  {
    title: "Gardening",
    text: "Gardening gives me calm focus and keeps me connected with nature.",
    image: "https://img.icons8.com/color/96/potted-plant.png",
    alt: "Gardening plant icon",
  },
  {
    title: "Badminton",
    text: "Playing badminton keeps me active and improves my focus, discipline, and reflexes.",
    image: "https://img.icons8.com/color/96/badminton.png",
    alt: "Badminton icon",
  },
  {
    title: "Pottery",
    text: "I enjoy shaping clay into handmade pieces that improve my focus and creativity.",
    image: potteryIcon,
    alt: "Pottery icon",
  },
];

const BeyondCode = () => {
  return (
    <section className="beyond-code">
      <div className="beyond-code-container">
        <h2 className="beyond-code-title">Hobbies</h2>
        <p className="beyond-code-subtitle">
          Things I enjoy beyond academics and coding.
        </p>

        <div className="beyond-code-grid">
          {hobbies.map((item) => (
            <article key={item.title} className="beyond-code-card">
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;

