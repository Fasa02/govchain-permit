import React, { useState } from 'react';
import './App.css'; 

export default function RegistrationFlow() {
  const [step, setStep] = useState(1);

  // navigasi next/back
  const next = () => setStep(s => Math.min(s + 1, 3));
  const prev = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="reg-flow">
      {/* Step indicator */}
      <div className="stepper">
        {['Unggah','Penerbitan NFT','Sukses'].map((label, i) => (
          <div key={i} className={`step ${step > i ? 'active' : ''}`}>
            <div className="circle">{step > i ? '✔' : i+1}</div>
            <div className="label">{label}</div>
            {i < 2 && <div className="bar" />}
          </div>
        ))}
      </div>

      {/* Konten tiap langkah */}
      <div className="step-content">
        {step === 1 && (
          <div className="step-panel">
            <div className="upload-box">
              <img src="/images/folder.png" alt="" className="upload-icon"/>
              <p>Letakkan dokumen di sini</p>
              <button className="btn-secondary">Unggah Gambar</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="step-panel">
            <div className="mint-summary">
              <div className="summary-card">
                <h3>Rangkuman</h3>
                {/* ... isi ringkasan ... */}
                <button className="btn-secondary">Lihat Tabel</button>
              </div>
              <div className="mint-card">
                <h3>Terbitkan NFT</h3>
                {/* ... ilustrasi alur ... */}
                <button className="btn-primary">Daftarkan ke Blockchain</button>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="step-panel">
            <div className="success-card">
              <h3>Daftar ke Blockchain Sukses</h3>
              <img src="/images/success.png" alt="sukses" className="success-icon"/>
              <button className="btn-primary">Lihat di Blockchain Explorer</button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="step-nav">
        {step > 1 && <button className="btn-secondary" onClick={prev}>Kembali</button>}
        {step < 3 && <button className="btn-primary" onClick={next}>Lanjut →</button>}
      </div>
    </div>
  );
}
