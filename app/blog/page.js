const posts = [
  { date: '10 Mart 2025', title: "ROS'a Giriş: Robotik Yazılımın Temelleri" },
  { date: '20 Şub 2025', title: 'C Dili ile Bellek Yönetimi: Pointer Nedir?' },
  { date: '05 Şub 2025', title: 'Java mı C mi? Bir Mühendislik Öğrencisinin Gözünden' },
  { date: '15 Oca 2025', title: 'Üniversitenin İlk Yılında Öğrendiklerim' },
]

export default function Blog() {
  return (
    <main style={{ padding: '8rem 4rem 6rem', background: 'white', minHeight: '100vh' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
        Blog
      </p>
      <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '3rem' }}>
        Yazdıklarım.
      </h1>

      <div>
        {posts.map((post, i) => (
          <a key={i} href="#" style={{
            display: 'grid', gridTemplateColumns: '120px 1fr auto',
            alignItems: 'center', gap: '2rem',
            padding: '1.75rem 0', borderBottom: '1px solid var(--line)',
            textDecoration: 'none', color: 'inherit'
          }}>
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.05em', color: 'var(--muted)' }}>
              {post.date}
            </span>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.15rem' }}>
              {post.title}
            </span>
            <span style={{ color: 'var(--muted)', fontSize: '1.2rem' }}>→</span>
          </a>
        ))}
      </div>
    </main>
  )
}