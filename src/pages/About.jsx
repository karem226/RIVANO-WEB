import React, { useState } from "react";

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      title: "Philosophy",
      summary: "Design that endures, rooted in context.",
      details:
        "Our philosophy revolves around timeless, human-centered spaces that balance functionality with emotional resonance.",
    },
    {
      title: "Approach",
      summary: "Collaborative and detail-driven.",
      details:
        "We blend creativity and technical precision to deliver designs that elevate everyday living.",
    },
    {
      title: "Team",
      summary: "Craftspeople, designers, and visionaries.",
      details:
        "A multidisciplinary team passionate about design excellence and sustainable practices.",
    },
  ];

  return (
    <section className="container">
      <h2 className="section-title">ABOUT RIVANO</h2>
      <p className="about-intro">
        Rivano is a boutique studio crafting thoughtful interiors — material-led,
        light-aware, human-centered.
      </p>

      <div className="two-col">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() =>
              setActiveCard(activeCard === index ? null : index)
            }
          >
            <h3>{card.title}</h3>
            <p>{card.summary}</p>
            {activeCard === index && (
              <div className="card-details">
                <p>{card.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
