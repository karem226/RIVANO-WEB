// src/sections/GalleryFull.jsx
import React, { useState, useEffect } from 'react';

export function GalleryThumb({ id, title, src }) {
  const openLightbox = () => {
    const event = new CustomEvent("openLightbox", {
      detail: { id, src, title }
    });
    window.dispatchEvent(event);
  };

  return (
    <figure className="gallery-thumb" onClick={openLightbox}>
      <div className="thumb-image-wrapper">
        <img className="thumb-image" src={src} alt={title} loading="lazy" />
      </div>
      <figcaption className="thumb-caption">{title}</figcaption>
    </figure>
  );
}

export default function GalleryFull() {
  const [lightboxData, setLightboxData] = useState(null);

  useEffect(() => {
    const openLightbox = (e) => setLightboxData(e.detail);
    window.addEventListener("openLightbox", openLightbox);

    return () => window.removeEventListener("openLightbox", openLightbox);
  }, []);

  const closeLightbox = () => setLightboxData(null);

  return (
    <>
      {lightboxData && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxData.src} alt={lightboxData.title} />
            <p>{lightboxData.title}</p>
            <button className="close-btn" onClick={closeLightbox}>X</button>
          </div>
        </div>
      )}
    </>
  );
}
