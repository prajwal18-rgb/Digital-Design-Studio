import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './sections/Header'
import Hero from './sections/Hero'
import FeaturedWork from './sections/FeaturedWork'
import Services from './sections/Services'
import ClientLogos from './sections/ClientLogos'
import About from './sections/About'
import Process from './sections/Process'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Login from './pages/Login'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf as any)
    }
  }, [])

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={
        <>
          <Header />
          <main>
            <Hero />
            <FeaturedWork />
            <Services />
            <ClientLogos />
            <About />
            <Process />
            <Contact />
          </main>
          <Footer />
        </>
      } />
    </Routes>
  )
}

export default App
