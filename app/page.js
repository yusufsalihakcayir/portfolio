import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '0 4rem',
      gap: '4rem'
    }}>
      <div style={{ paddingTop: '6rem' }}>
        <p style={{
          fontSize: '0.78rem', letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'var(--accent)',
          marginBottom: '1.5rem'
        }}>
          Bilgisayar Mühendisliği Öğrencisi
        </p>

        <h1 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(3rem, 5vw, 5.5rem)',
          lineHeight: 1.05, letterSpacing: '-0.03em',
          marginBottom: '1.5rem'
        }}>
          Merhaba, ben{' '}
          <em style={{ color: 'var(--accent)' }}>Yusuf Salih.</em>
        </h1>

        <p style={{
          fontSize: '1rem', color: 'var(--muted)',
          maxWidth: '380px', lineHeight: 1.7,
          marginBottom: '2.5rem'
        }}>
          Karabük Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim.
          Robotik ve yazılım geliştirmeye tutkuyla yaklaşıyorum.
        </p>

        <Link href="/projects" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          fontSize: '0.85rem', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--ink)',
          textDecoration: 'none', borderBottom: '1px solid var(--ink)',
          paddingBottom: '2px'
        }}>
          Projelerimi Gör →
        </Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '340px', height: '420px' }}>
          <div style={{
            position: 'absolute',
            width: '280px', height: '360px',
            background: 'var(--line)', borderRadius: '2px',
            top: '30px', left: '30px'
          }} />
          <div style={{
            position: 'relative',
            width: '280px', height: '360px',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <Image
              src="/profile.jpeg"
              alt="Yusuf Salih Akçayır"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', bottom: '-16px', right: '-16px',
              background: 'var(--accent)', color: 'white',
              fontSize: '0.72rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', padding: '0.5rem 1rem'
            }}>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}