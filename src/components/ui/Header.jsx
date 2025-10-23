import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={`nav ${open?'open':''}`} aria-label="Primary">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <button className="menu-toggle" aria-label="Menu" onClick={()=>setOpen(s=>!s)} aria-expanded={open}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}