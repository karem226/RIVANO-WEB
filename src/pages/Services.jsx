import React, { useState } from "react";

export default function Services() {
  const [activeCircle, setActiveCircle] = useState(null);

  const services = [
    {
      title: "Design",
      description:
        "Our design process is thoughtful and user-focused, blending creativity and practicality to deliver exceptional results.",
    },
    {
      title: "Materials",
      description:
        "We carefully select sustainable, high-quality materials that align with our clients' visions and environmental values.",
    },
    {
      title: "Delivery",
      description:
        "From concept to completion, we ensure timely, transparent, and seamless project delivery for every client.",
    },
  ];

  const handleClick = (index) => {
    setActiveCircle(activeCircle === index ? null : index);
  };

  return (
    <section className="services-section">
      <h2 className="section-title">OUR SERVICES</h2>

      <div className="services-circles">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-circle ${
              activeCircle === index ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <h3>{service.title}</h3>
            {activeCircle === index && (
              <p className="service-desc">{service.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
