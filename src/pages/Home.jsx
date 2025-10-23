import React from 'react';
import Hero from '../sections/Hero';
import ServicesPreview from '../sections/ServicesPreview';
import GalleryPreview from '../sections/GalleryPreview';

export default function Home(){
  return (
    <>
      <Hero />
      <section className="container">
        <ServicesPreview />
        <GalleryPreview />
      </section>
    </>
  );
}