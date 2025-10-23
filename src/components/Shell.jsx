import React from 'react';
import Header from './ui/Header';
import Footer from './ui/Footer';

export default function Shell({children}){
  return (
    <div className="site">
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
}