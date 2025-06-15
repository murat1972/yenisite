import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import brands from './ProductsData';

export default function Products() {
  return (
    <main className="products-page">
      <h1>Ürünlerimiz & Markalarımız</h1>
      <p className="products-intro">Gökdoğan çatısı altında tüm markalar, modüler tasarım prensibiyle yapılandırılmıştır. Her ürün birbiriyle entegre olabilir, yeni çözümler üretilebilir.</p>
      <div className="brands-grid">
        {brands.map((brand, idx) => (
          <div className="brand-card" key={idx}>
            <h2>{brand.name}</h2>
            <p>{brand.description}</p>
          </div>
        ))}
      </div>
      {/* Ürün Detayları */}
      <section className="product-details-showcase">
        {/* G-TOWER */}
        <Link to="/products/g-tower" className="product-card-link">
          <div className="product-card">
            <h2>G‑TOWER™</h2>
            <p>Akıllı Dikey Otomatik Raf Sistemleri. Yerli üretim, ileri teknoloji ve güvenilir çözümler.</p>
            <p className="product-card-more">Detayları Gör →</p>
          </div>
        </Link>
        {/* G-MEZZ */}
        <Link to="/products/g-mezz" className="product-card-link">
          <div className="product-card">
            <h2>G‑MEZZ™</h2>
            <p>Yeni Nesil Çok Katlı Depolama Sistemleri. Endüstriyel depolama alanınızı maksimum verimlilik ve akıllı operasyon merkezi haline getirin.</p>
            <p className="product-card-more">Detayları Gör →</p>
          </div>
        </Link>
      </section>
    </main>
  );
} 