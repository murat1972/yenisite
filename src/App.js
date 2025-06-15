import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Header shadow on scroll
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header>
        <nav>
          <div className="logo">G<span>TECHNIC</span></div>
          <ul className="nav-links">
            <li><a href="#home">Ana Sayfa</a></li>
            <li><a href="#products">Ürünler</a></li>
            <li><a href="#solutions">Çözümler</a></li>
            <li><a href="#about">Hakkımızda</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
          <a href="#demo" className="cta-button">Demo Talep Et</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Endüstriyel Geleceğinizi Şekillendirin</h1>
            <h2>INDUSTRIAL SOLUTIONS</h2>
            <p>1975'ten beri endüstriyel depolama ve organizasyon sistemlerinde lider. LUNA AI teknolojisi ile satış ve üretim süreçlerinizi optimize edin.</p>
            <div className="hero-buttons">
              <a href="#products" className="btn-primary">Ürünleri Keşfet</a>
              <a href="#contact" className="btn-secondary">Teklif Al</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="gradient-box">
              12 MARKA<br/>1 VİZYON
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Yıllık Deneyim</p>
          </div>
          <div className="stat-item">
            <h3>12</h3>
            <p>Entegre Marka</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Ürün Çeşidi</p>
          </div>
          <div className="stat-item">
            <h3>2000+</h3>
            <p>Günlük Lead</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <div className="section-header">
          <h2>Ürün Gruplarımız</h2>
          <p>Modüler yapıda, birbirine entegre edilebilen 12 marka</p>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-icon">📦</div>
            <h3>PORTABOX™</h3>
            <p>Taşınabilir, kilitlenebilir çanta sistemleri. Tüm sistemlerle entegre.</p>
            <a href="#">Detaylı İncele →</a>
          </div>
          <div className="product-card">
            <div className="product-icon">🚐</div>
            <h3>VANCRAFT™</h3>
            <p>Araç içi mobil atölye dönüşüm kitleri. 15 bayi ile Türkiye genelinde.</p>
            <a href="#">Detaylı İncele →</a>
          </div>
          <div className="product-card">
            <div className="product-icon">🏭</div>
            <h3>G-RACK</h3>
            <p>Ağır yük rafları ve açık hava depolama çözümleri.</p>
            <a href="#">Detaylı İncele →</a>
          </div>
          <div className="product-card">
            <div className="product-icon">🏗️</div>
            <h3>G-MEZZ</h3>
            <p>ResinDek zeminli, robot uyumlu çok katlı platform sistemleri.</p>
            <a href="#">Detaylı İncele →</a>
          </div>
          <div className="product-card">
            <div className="product-icon">🤖</div>
            <h3>G-BOTICS</h3>
            <p>AGV, ASRS ve robotik depo yönetim sistemleri.</p>
            <a href="#">Detaylı İncele →</a>
          </div>
          <div className="product-card">
            <div className="product-icon">🌱</div>
            <h3>AGRORACK PRO™</h3>
            <p>Dikey tarım ve şehir içi üretim sistemleri. %95 su tasarrufu.</p>
            <a href="#">Detaylı İncele →</a>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="ai-section">
        <div className="ai-content">
          <div className="ai-text">
            <h2>LUNA 4.2 AI Sistemi</h2>
            <p>8 katmanlı yapay zeka mimarisi ile satış, pazarlama ve müşteri yönetimi süreçlerinizi tamamen otomatikleştirin.</p>
            <div className="ai-features">
              <div className="ai-feature">
                <div className="ai-feature-icon">✓</div>
                <span>Günde 2000+ lead analizi</span>
              </div>
              <div className="ai-feature">
                <div className="ai-feature-icon">✓</div>
                <span>Otomatik içerik üretimi</span>
              </div>
              <div className="ai-feature">
                <div className="ai-feature-icon">✓</div>
                <span>7/24 müşteri karşılama</span>
              </div>
              <div className="ai-feature">
                <div className="ai-feature-icon">✓</div>
                <span>Kendi kendine öğrenen sistem</span>
              </div>
            </div>
            <a href="#" className="btn-primary" style={{ marginTop: '2rem' }}>LUNA'yı Keşfet</a>
          </div>
          <div className="ai-box">
            <h3>SERGIT AI</h3>
            <p>Web sitenizde 7/24 aktif</p>
            <div className="ai-emoji">🤖</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-content">
          <div className="section-header">
            <h2>Hemen İletişime Geçin</h2>
            <p>Endüstriyel çözümlerimiz hakkında detaylı bilgi almak için formu doldurun</p>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label>Adınız Soyadınız</label>
              <input type="text" placeholder="Adınız Soyadınız" required />
            </div>
            <div className="form-group">
              <label>Şirket</label>
              <input type="text" placeholder="Şirket Adı" required />
            </div>
            <div className="form-group">
              <label>E-posta</label>
              <input type="email" placeholder="ornek@sirket.com" required />
            </div>
            <div className="form-group">
              <label>Telefon</label>
              <input type="tel" placeholder="+90 5XX XXX XX XX" required />
            </div>
            <div className="form-group">
              <label>Mesajınız</label>
              <textarea rows="4" placeholder="Hangi ürünlerimiz hakkında bilgi almak istersiniz?" required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Gönder</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Şartları</a>
            <a href="#">KVKK</a>
            <a href="#">İletişim</a>
          </div>
          <p>&copy; 2025 G-TECHNIC. Tüm hakları saklıdır. | EST. 1975</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
