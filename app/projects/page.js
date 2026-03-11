const projects = [
,
]

export default function Projects() {
  return (
    <main style={{ padding: '8rem 4rem 6rem', minHeight: '100vh' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
        Projeler
      </p>
      <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '3rem' }}>
        Yaptığım çalışmalar.
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', background: 'var(--line)' }}>
        {projects.map((p) => (
          <div key={p.num} style={{ background: 'var(--cream)', padding: '2.5rem 2rem' }}>
            <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '0.85rem', color: 'var(--line)', marginBottom: '1.5rem' }}>
              {p.num}
            </div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.4rem', letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              {p.title}
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {p.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--line)', padding: '0.25rem 0.6rem', color: 'var(--muted)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}