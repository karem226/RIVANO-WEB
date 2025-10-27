import React from 'react';
export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">SPACES THAT FEEL LIKE HOME OR BETTER</h1>
          <p className="hero-sub">We design interiors that balance craft, comfort and clarity.</p>
          <div className="hero-ctas">
            <a href="/portfolio" className="btn btn-primary">View Portfolio</a>
            <a href="/contact" className="btn btn-ghost">Get in touch</a>
          </div>
          <div className="stats" aria-hidden="true">
            <div><strong>120+</strong><span>Projects</span></div>
            <div><strong>15</strong><span>Awards</span></div>
            <div><strong>9</strong><span>Years</span></div>
          </div>
        </div>
        <div className="hero-media">
          <img src="/assets/main.png" alt="Living room" loading="eager" />
        </div>
      </div>
    </section>
  );
}