import React from 'react';
export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><h4>Rivano</h4><p>Refined interior design for discerning clients.</p></div>
        <div><h4>Explore</h4><ul><li>Portfolio</li><li>Services</li></ul></div>
        <div><h4>Contact</h4><address>rivano@icloud.com<br/>+967 777 226 888</address></div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} RIVANO — DESIGNED BY KAREM</div>
    </footer>
  );
}