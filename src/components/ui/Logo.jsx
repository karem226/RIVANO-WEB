import React from 'react';
export default function Logo(){
  return (
    <div className="logo-wrap">
      <img src="/assets/hero.JPG" alt="Rivano visual" className="logo-img" />
      <div className="logo-texts">
        <strong className="brand">RIVANO</strong>
        <small className="brand-sub">Elevated Interiors</small>
      </div>
    </div>
  );
}