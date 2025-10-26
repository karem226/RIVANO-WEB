import React, {useState, useEffect, useRef} from 'react';

const items = [
  {id:1,title:'Modern Apartment',src:'/assets/photo-1.svg'},
  {id:2,title:'Cozy Living Room',src:'/assets/photo-2.svg'},
  {id:3,title:'Office Renovation',src:'/assets/photo-3.JPG'},
  {id:4,title:'Luxury Villa',src:'/assets/photo-4.svg'},
  {id:5,title:'Minimal Kitchen',src:'/assets/photo-5.svg'}
];

export function GalleryThumb({id,title,src}){
  function openLightbox(e) {
    const ev = new CustomEvent('openLightbox', { detail: { id, src, title } });
    window.dispatchEvent(ev);
  }
  return (
    <figure className="thumb" onClick={openLightbox} tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter') openLightbox(); }}>
      <img data-src={src} alt={title} loading="lazy" className="lazy" />
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export function Gallery(){ 
  return (
    <div className="gallery-grid">
      {items.map(i=> <figure key={i.id} className="showcase-card"><img src={i.src} alt={i.title} /><figcaption>{i.title}</figcaption></figure>)}
    </div>
  );
}

// Lightbox component mounted by script in index: listens to 'openLightbox' event and shows modal.
// We'll provide a small script file to handle lightbox and lazy-loading.
