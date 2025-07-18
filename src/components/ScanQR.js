import React from 'react';
import '../App.css';

export default function ScanQR() {
  return (
    <div className="scan-page">
      <h2>Scan QR</h2>
      <p>Lakukan verifikasi izin usaha dengan 3 langkah mudah.</p>
      <button className="primary scan-btn">
        <img src="/images/scan1.png" alt="Scan Icon" className="btn-icon" /> Mulai Verifikasi Sekarang
      </button>
    </div>
  );
}