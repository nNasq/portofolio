import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Work from '@/components/Work'
import About from '@/components/About'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
