import React from 'react';
export default function ServicesPreview(){
  return (
    <section style={{marginTop:40}}>
      <h2 className="section-title">WHAT WE DO</h2>
      <div className="card-grid">
        <article className="card">
          <h3>Design</h3><p>Concepts, moodboards and detailed design.</p>
        </article>
        <article className="card">
          <h3>Materials</h3><p>Curated finishes and bespoke furniture.</p>
        </article>
        <article className="card">
          <h3>Delivery</h3><p>Turnkey implementation and quality control.</p>
        </article>
      </div>
    </section>
  );
}