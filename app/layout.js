import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Yusuf Salih Akçayır — Portfolio',
  description: 'Karabük Üniversitesi Bilgisayar Mühendisliği Öğrencisi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}