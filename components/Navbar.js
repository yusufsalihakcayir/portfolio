'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.5rem 4rem',
      background: 'rgba(247,244,239,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'border-color 0.3s'
    }}>
      <Link href="/" style={{
        fontFamily: 'DM Serif Display, serif',
        fontSize: '1.3rem', color: 'var(--ink)',
        textDecoration: 'none', letterSpacing: '-0.02em'
      }}>
        Salih<span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>.</span>
      </Link>
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {[
          ['Hakkımda', '/about'],
          ['Projeler', '/projects'],
          ['Blog', '/blog'],
          ['İletişim', '/contact']
        ].map(([label, href]) => (
          <li key={href}>
            <Link href={href} style={{
              fontSize: '0.82rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--muted)',
              textDecoration: 'none'
            }}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}