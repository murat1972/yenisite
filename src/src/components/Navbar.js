import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../App.css';

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Link to="/" className="logo">
            <Logo />
          </Link>
        </div>
        <div className="nav-links" style={{marginLeft: 'auto', display: 'flex', gap: '2rem'}}>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/about">Kurumsal</Link>
          <Link to="/vision">Vizyonumuz</Link>
          <Link to="/products">Ürünler</Link>
          <Link to="/references">Referanslar</Link>
          <Link to="/contact">İletişim</Link>
          <Link to="/careers">İnsan Kaynakları</Link>
        </div>
      </nav>
    </header>
  );
} 