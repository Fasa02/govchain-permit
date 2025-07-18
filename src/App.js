import React from 'react';
import './App.css';

const Header = () => (
  <header className="header">
    <div className="container navbar">
      <div className="navbar-content">
        <img src="/images/logoo.png" alt="GovChain Permit Logo" className="navbar-logo" />
        <nav className="nav-links">
          <a href="#about">Tentang</a>
          <a href="#institusi">Kementrian/Lembaga</a>
          <a href="#blockchain">Blockchain</a>
          <a href="#verifikasi">Verifikasi</a>
        </nav>
        <button className="button">
          Connect Wallet
          <svg className="icon ml-2" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zm-5 8a5 5 0 0110 0H3z" /></svg>
        </button>
        <div className="hamburger">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </div>
      </div>
    </div>
  </header>
);

const utama = () => (
  <section className="utama">
    <div className="utama-text">
      <h1>Perizinan UMKM Transparan, Akuntabel Dengan Blockchain</h1>
      <p>Ucapkan selamat tinggal pada keraguan dan proses yang rumit. Dengan GovChain Permit, pastikan keaslian surat izin dari Pemerintah Kota secara instan menggunakan teknologi blockchain yang transparan dan tidak dapat diubah.</p>
      <div className="utama-buttons">
        <a href="#verifikasi" className="primary">Verifikasi Sekarang</a>
        <a href="#daftar" className="secondary">Daftarkan Izin</a>
      </div>
    </div>
    <div className="utama-image">
      <img src="/images/Illustration.png" alt="Ilustrasi user dengan laptop dan blockchain" />
    </div>
  </section>
);

const Partners = () => (
  <section className="partners" id="partners">
    <div className="container">
      <h2>Didukung Oleh</h2>
      <div className="partners-logos">{[1,2,3,4,5].map(i => <img key={i} src={`/images/logo${i}.png`} alt={`Logo ${i}`} />)}</div>
    </div>
  </section>
);

const FeatureCard = ({ img, title, children }) => (
  <div className="feature-card">
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
);

const WhyBlockchain = () => (
  <section className="why" id="why-blockchain">
    <div className="container">
      <h2>Mengapa Blockchain?</h2>
      <p>Secara sederhana, bayangkan blockchain sebagai sebuah buku besar digital yang super aman. Teknologi ini adalah fondasi yang membuat setiap verifikasi di GovChain Permit memiliki integritas tertinggi.</p>
      <div className="features">
        <FeatureCard img="/images/silang.png" title="Tidak dapat diubah">Sekali sebuah catatan izin dicatat, ia tidak dapat dihapus atau diubah. Ini menciptakan bukti digital permanen yang mustahil untuk dipalsukan.</FeatureCard>
        <FeatureCard img="/images/desentral.png" title="Teredesentralisasi">Catatan tidak disimpan di satu server pusat, melainkan disebar di banyak titik— membuatnya sangat tahan terhadap kegagalan dan serangan siber.</FeatureCard>
        <FeatureCard img="/images/transparan.png" title="Transparan">Semua pihak yang berwenang dapat melihat dan memverifikasi catatan izin dengan jelas, menciptakan jejak audit yang masuk akal dan meningkatkan akuntabilitas.</FeatureCard>
      </div>
    </div>
  </section>
);

const MethodCard = ({ img, title }) => (
  <div className="method-card">
    <img src={img} alt={title} />
    <h3>{title}</h3>
  </div>
);

const Verification = () => (
  <section className="verification" id="metode-verifikasi">
    <div className="container">
      <h2>Metode Verifikasi</h2>
      <div className="methods">
        {[{img:'/images/scan.png', title:'Scan QR'},{img:'/images/upload.png', title:'Upload'},{img:'/images/input.png', title:'Input Nomor Izin'}].map(m => <MethodCard key={m.title} {...m} />)}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-container">
      <div className="footer-section">
        <h3>PT. Blockchain Perintahtama</h3>
        <div className="footer-links"><a href="#tentang">Tentang Kami</a><a href="#pendukung">Lembaga Pendukung</a><a href="#apa-itu">Apa itu Blockchain</a></div>
      </div>
      <div className="social-icons">
        {['instagram','whatsapp','github'].map(n => (
          <a key={n} href="#">
            <img src={`/images/icon-${n}.png`} alt={n} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <utama />
        <Partners />
        <WhyBlockchain />
        <Verification />
      </main>
      <Footer />
    </div>
  );
};