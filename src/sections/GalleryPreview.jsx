import React from 'react';
import { GalleryThumb } from './GalleryFull';
export default function GalleryPreview(){
  return (
    <section style={{marginTop:40}}>
      <h2 className="section-title">FEATURED WORK </h2>
      <div className="gallery-preview">
        <GalleryThumb id={1} title="Modern Apartment" src="/assets/photo-1.svg" />
        <GalleryThumb id={2} title="Cozy Living Room" src="/assets/photo-2.svg" />
        <GalleryThumb id={3} title="Office Renovation" src="/assets/photo-3.JPG" />
        <GalleryThumb id={4} title="Luxury Villa" src="/assets/photo-4.svg" />
      </div>
    </section>
  );
}