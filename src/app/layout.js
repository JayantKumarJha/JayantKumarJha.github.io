import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Jayant Kumar Jha | Optimization & AI/ML Consultant',
  description:
    'Portfolio of Jayant Kumar Jha — Consultant specializing in optimization, decision systems, and AI/ML. IIT Bombay M.Tech graduate.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light dark:bg-dark w-full min-h-screen font-mont">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
