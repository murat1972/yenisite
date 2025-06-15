import React from 'react';
import { FaCog, FaWeightHanging, FaPuzzlePiece, FaLock, FaTools, FaLayerGroup, FaMicrochip, FaBriefcase, FaCheck, FaStar, FaVolumeMute, FaShieldAlt, FaProjectDiagram, FaAtom, FaCogs, FaArchive, FaFeatherAlt, FaToolbox, FaMobileAlt, FaArrowsAlt, FaSuitcase, FaRecycle, FaShieldVirus, FaHardHat, FaShield, FaHeartbeat, FaCarCrash, FaIndustry, FaTrophy, FaCrown, FaLightbulb, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

import './VancraftDetail.css';

export default function VancraftDetail() {
  return (
    <div>
      <div className="header">
        <div className="container">
          <h1><FaCog style={{marginRight:8}}/> VANCRAFT</h1>
          <p className="subtitle">Profesyonel Araç İçi Modüler Çözümler</p>
        </div>
      </div>
      <div className="container">
        <div className="intro-section">
          <h2>Alüminyum Profil Teknolojisi ile Geleceğin Mobil İş İstasyonları</h2>
          <p>VANCRAFT, 20 yılı aşkın deneyimi ile araç içi düzenleme sistemlerinde Türkiye'nin öncü markasıdır. Yüksek kaliteli alüminyum profil teknolojisi, hafif ama son derece dayanıklı çekmeceli sistemler, güvenli kilitli dolaplar ve modüler yapı felsefesi ile aracınızı profesyonel bir mobil iş istasyonuna dönüştürüyoruz.</p>
          <div className="features-grid">
            <div className="feature-card">
              <FaWeightHanging />
              <h3>Ultra Hafif Yapı</h3>
              <p>Alüminyum profil teknolojisi ile %40 daha hafif, yakıt tasarrufu sağlayan çözümler</p>
            </div>
            <div className="feature-card">
              <FaPuzzlePiece />
              <h3>Modüler Tasarım</h3>
              <p>İhtiyacınıza göre genişletilebilir ve yeniden konfigüre edilebilir sistem</p>
            </div>
            <div className="feature-card">
              <FaLock />
              <h3>Güvenli Depolama</h3>
              <p>Kilitli dolaplar ve çekmeceler ile değerli ekipmanlarınızı koruma altına alın</p>
            </div>
            <div className="feature-card">
              <FaTools />
              <h3>Kolay Montaj</h3>
              <p>Alet gerektirmeyen geçmeli sistem ile 30 dakikada kurulum</p>
            </div>
          </div>
        </div>
        {/* Kategori 1: Zemin Kaplama Sistemleri */}
        <div className="category-section">
          <div className="category-header">
            <h2><FaLayerGroup style={{marginRight:8}}/> ZEMİN KAPLAMA SİSTEMLERİ (VC-FLR)</h2>
          </div>
          <div className="category-description">
            VANCRAFT zemin kaplama sistemleri, aracınızın tabanını profesyonel bir çalışma alanına dönüştürür. Özel EPDM kauçuk yüzey, marin kontraplak alt yapı ve ses izolasyon teknolojileri ile maksimum koruma ve konfor sağlar.
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-header">
                <div className="product-code">VC-FLR-01</div>
                <div className="product-name">Hafif Ticari Zemin Kaplama</div>
              </div>
              <table className="specs-table">
                <tbody>
                  <tr><th>Araç Tipi</th><td>Kangoo, Doblo, Partner, Berlingo</td></tr>
                  <tr><th>Kalınlık</th><td>12 mm marin kontraplak + 3 mm EPDM</td></tr>
                  <tr><th>Yük Kapasitesi</th><td>300 kg/m²</td></tr>
                  <tr><th>Su Direnci</th><td>IP65 - Tamamen su geçirmez</td></tr>
                </tbody>
              </table>
              <div className="tech-highlight">
                <FaMicrochip className="tech-icon"/>
                <strong>VANCRAFT Teknolojisi:</strong> Özel EPDM formülasyonu ile -40°C to +120°C sıcaklık dayanımı
              </div>
              <div className="applications">
                <h4><FaBriefcase/> Kullanım Alanları</h4>
                <ul>
                  <li><FaCheck/> Tesisatçı araçları</li>
                  <li><FaCheck/> Elektrikçi vanları</li>
                  <li><FaCheck/> Kurye araçları</li>
                  <li><FaCheck/> Temizlik servisleri</li>
                  <li><FaCheck/> Teknisyen araçları</li>
                  <li><FaCheck/> Kargo dağıtım</li>
                </ul>
              </div>
              <div className="benefit-box">
                <div className="benefit-label"><FaStar/> VANCRAF Avantajları</div>
                <div className="benefit-text">
                  Hafif ticari araçlar için özel olarak geliştirilmiş VANCRAFT VC-FLR-01, aracınızın zeminin korunması için en ekonomik çözümdür. EPDM yüzey teknolojisi sayesinde kimyasallara dayanıklı, kaymaz özellik sunar. Özel kenar bantları ile su sızıntısını %100 engeller. 5 yıl garanti kapsamında.
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-header">
                <div className="product-code">VC-FLR-04</div>
                <div className="product-name">Ses İzolasyonlu Zemin Paneli</div>
              </div>
              <table className="specs-table">
                <tbody>
                  <tr><th>Ses Azaltma</th><td>35 dB gürültü kesimi</td></tr>
                  <tr><th>Kalınlık</th><td>18 mm çok katmanlı yapı</td></tr>
                  <tr><th>Titreşim Kesici</th><td>Özel köpük tabaka</td></tr>
                  <tr><th>Isı İzolasyonu</th><td>%60 ısı transfer azaltma</td></tr>
                </tbody>
              </table>
              <div className="tech-highlight">
                <FaVolumeMute className="tech-icon"/>
                <strong>Akustik Teknoloji:</strong> Çok katmanlı ses yalıtım sistemi ile studio kalitesi sessizlik
              </div>
              <div className="benefit-box">
                <div className="benefit-label"><FaShieldAlt/> Profesyonel Konfor</div>
                <div className="benefit-text">
                  Hassas ekipman taşıyan, müşteri toplantıları yapan veya sessiz çalışma ortamına ihtiyaç duyan profesyoneller için geliştirilmiştir. Motor gürültüsü, yol sesi ve titreşimleri minimum seviyeye indirir. Özellikle elektro-akustik cihaz tamircileri, müzik ekipmanı taşıyıcıları ve ses teknisyenleri için idealdir.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Diğer kategoriler aynı şekilde eklenebilir... */}
      </div>
      <div className="footer">
        <div className="container">
          <h3>VANCRAFT ile İletişime Geçin</h3>
          <div className="contact-info">
            <div className="contact-item"><FaGlobe/><span>www.vancraft.com</span></div>
            <div className="contact-item"><FaEnvelope/><span>info@vancraft.com</span></div>
            <div className="contact-item"><FaPhone/><span>+90 212 XXX XX XX</span></div>
            <div className="contact-item"><FaMapMarkerAlt/><span>İstanbul, Türkiye</span></div>
          </div>
          <p style={{marginTop:'2rem', opacity:0.8}}>&copy; 2024 VANCRAFT - Alüminyum Profil Teknolojisi ile Mobil İş İstasyonu Çözümleri</p>
        </div>
      </div>
    </div>
  );
} 