import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Products from './Products';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import './App.css';
import SergitAssistant from './SergitAssistant';
import Vision from './components/Vision';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/vision" element={<Vision />} />
          </Routes>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 G TECHNIC Industrial Solutions. Tüm hakları saklıdır.</p>
      </footer>
      <SergitAssistant />
    </Router>
  );
}

export default App; 