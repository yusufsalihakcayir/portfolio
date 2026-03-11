'use client'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit() {
    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <main style={{ padding: '8rem 4rem 6rem', minHeight: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>

        <div>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
            İletişim
          </p>
          <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '2rem' }}>
            Seninle tanışalım.
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Bir fikrin mi var, iş birliği yapmak mı istiyorsun? Her türlü mesajını bekliyorum.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="https://github.com/yusufsalihakcayir" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'none' }}>
              <span style={{ width: '24px', textAlign: 'center' }}>⌥</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/yusuf-salih-a-b27a4b18a/" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'none' }}>
              <span style={{ width: '24px', textAlign: 'center' }}>↗</span> LinkedIn
            </a>
            <a href="mailto:akcayiryusufsalih@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'none' }}>
              <span style={{ width: '24px', textAlign: 'center' }}>✉</span> akcayiryusufsalih@gmail.com
            </a>
          </div>
        </div>

        <div>
          {[['İsim', 'text', 'Adın Soyadın'], ['E-posta', 'email', 'ornek@email.com']].map(([label, type, placeholder]) => (
            <div key={label} style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                {label}
              </label>
              <input type={type} placeholder={placeholder} style={{
                width: '100%', background: 'transparent', border: 'none',
                borderBottom: '1px solid var(--line)', padding: '0.6rem 0',
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
                color: 'var(--ink)', outline: 'none'
              }} />
            </div>
          ))}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>
              Mesaj
            </label>
            <textarea placeholder="Merhaba..." rows={4} style={{
              width: '100%', background: 'transparent', border: 'none',
              borderBottom: '1px solid var(--line)', padding: '0.6rem 0',
              fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
              color: 'var(--ink)', outline: 'none', resize: 'none'
            }} />
          </div>
          <button onClick={handleSubmit} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            background: sent ? '#5a8a5a' : 'var(--ink)', color: 'var(--cream)',
            border: 'none', padding: '1rem 2rem',
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem',
            letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
            transition: 'background 0.2s'
          }}>
            {sent ? '✓ Gönderildi' : 'Gönder →'}
          </button>
        </div>

      </div>
    </main>
  )
}