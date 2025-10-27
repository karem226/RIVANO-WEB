import React, { useState } from "react";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "Modern Office Design",
      image: "/assets/portfolio1.JPG",
      gallery: [
        "/assets/office1.PNG",
        "/assets/photo-3.JPG",
        "/assets/office3.JPG",
      ],
      description:
        "A modern and functional office space with sleek furniture and ambient lighting designed for productivity.",
    },
    {
      title: "Luxury Villa Interior",
      image: "/assets/portfolio2.JPG",
      gallery: [
        "/assets/villa1.JPG",
        "/assets/villa2.JPG",
        "/assets/villa3.jpg",
      ],
      description:
        "Luxury villa featuring elegant interiors, warm tones, and high-end materials for a timeless atmosphere.",
    },
    {
      title: "Minimal Apartment",
      image: "/assets/portfolio3.JPG",
      gallery: [
        "/assets/apartment1.jpg",
        "/assets/apartment2.jpg",
        "/assets/apartment3.jpg",
      ],
      description:
        "A minimal apartment design focused on light, space, and simplicity, with neutral tones and natural finishes.",
    },
    {
      title: "Retail Store Concept",
      image: "/images/portfolio4.jpg",
      gallery: [
        "/images/store1.jpg",
        "/images/store2.jpg",
        "/images/store3.jpg",
      ],
      description:
        "Concept retail store designed to enhance product visibility and create a seamless shopping experience.",
    },
    {
      title: "Cozy Café Design",
      image: "/images/portfolio5.jpg",
      gallery: [
        "/images/cafe1.jpg",
        "/images/cafe2.jpg",
        "/images/cafe3.jpg",
      ],
      description:
        "A cozy café with warm lighting, textured materials, and a modern rustic feel that invites relaxation.",
    },
    {
      title: "Art Gallery Space",
      image: "/images/portfolio6.jpg",
      gallery: [
        "/images/gallery1.jpg",
        "/images/gallery2.jpg",
        "/images/gallery3.jpg",
      ],
      description:
        "A contemporary art gallery emphasizing minimal architecture and versatile lighting for showcasing artworks.",
    },
  ];

  const openProject = (index) => setActiveIndex(index);
  const closeProject = () => setActiveIndex(null);
  const nextProject = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };
  const prevProject = (e) => {
    e.stopPropagation();
    setActiveIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section className="portfolio-section">
      <h2 className="section-title">OUR PORTFOLIO</h2>

      <div className="portfolio-grid">
        {projects.map((p, index) => (
          <div key={index} className="portfolio-item">
            <img src={p.image} alt={p.title} onClick={() => openProject(index)} />
            <h3>{p.title}</h3>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="portfolio-modal" onClick={closeProject}>
          <div
            className="portfolio-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="nav-btn left" onClick={prevProject}>
              &#8592;
            </button>
            <button className="nav-btn right" onClick={nextProject}>
              &#8594;
            </button>

            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <div className="portfolio-gallery">
              {activeProject.gallery.map((img, i) => (
                <img key={i} src={img} alt="" />
              ))}
            </div>
            <button className="close-btn" onClick={closeProject}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
