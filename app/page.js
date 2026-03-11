export default function About() {
  const skills = [
    { name: 'C Dili', level: 'Temel' },
    { name: 'Java', level: 'Temel' },
    { name: 'ROS (Robot Operating System)', level: 'Temel' },
  ]

  return (
    <main style={{ padding: '8rem 4rem 6rem', background: 'white', minHeight: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>

        <div>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
            Hakkımda
          </p>
          <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '2rem' }}>
            Kodu bir <em style={{ fontStyle: 'italic' }}>araç</em> olarak görüyorum.
          </h1>
          <div style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.8 }}>
            <p>Aksaray doğumluyum, Karabük Üniversitesi-nde Bilgisayar Mühendisliği 2. sınıf öğrencisiyim.</p>
            <p style={{ marginTop: '1.2rem' }}>C ve Java ile programlamanın temellerini öğrenirken, <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>ROS (Robot Operating System)</strong> ile robotik alanına adım attım.</p>
            <p style={{ marginTop: '1.2rem' }}>Hedefim: Robotik ve yazılım dünyasında kendimi geliştirerek anlamlı projeler üretmek.</p>
          </div>
        </div>

        <div>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>
            Teknolojiler
          </p>
          <ul style={{ listStyle: 'none' }}>
            {skills.map((skill, i) => (
              <li key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1rem 0', borderBottom: '1px solid var(--line)'
              }}>
                <span style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>{skill.name}</span>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>{skill.level}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </main>
  )
}