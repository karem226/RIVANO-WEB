import React from 'react';
import { GalleryThumb } from './GalleryFull';
export default function GalleryPreview(){
  return (
    <section style={{ marginTop: 40 }}>
      <h2 className="section-title">Featured Work</h2>
      <div className="gallery-preview">
        <GalleryThumb id={1} title="Modern Apartment" src={new URL('../../assets/photo-1.JPG', import.meta.url).href} />
        <GalleryThumb id={2} title="Cozy Living Room" src={new URL('../../assets/photo-2.JPG', import.meta.url).href} />
        <GalleryThumb id={3} title="Office Renovation" src={new URL('../../assets/photo-3.JPG', import.meta.url).href} />
        <GalleryThumb id={4} title="Luxury Villa" src={new URL('../../assets/photo-4.JPG', import.meta.url).href} />
      </div>
    </section>
  );
}