import React from 'react';
import '../App.css';
import brands from '../ProductsData';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh'}}>
      <div style={{marginTop: '20vh'}}>
        <h2 className="sidebar-title">Markalar</h2>
        <ul className="sidebar-list">
          {brands.map((brand, idx) => (
            <li key={idx}>
              <Link to={"/products/" + brand.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>{brand.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
} 