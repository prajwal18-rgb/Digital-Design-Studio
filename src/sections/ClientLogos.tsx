import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const industries = [
  'DENTAL CLINICS',
  'RESTAURANTS',
  'MALL SHOPS',
  'FURNITURE STORES',
  'ELECTRONICS',
  'CAFES',
  'RETAIL',
  'HEALTHCARE',
]

export default function ClientLogos() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.marquee-section', {
        scrollTrigger: {
          trigger: '.marquee-section',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const marqueeContent = industries.join(' \u2022 ') + ' \u2022 '

  return (
    <section
      ref={sectionRef}
      className="marquee-section"
      style={{ background: '#1A2E26', padding: '60px 0', overflow: 'hidden' }}
    >
      <div
        className="flex overflow-hidden gap-4"
        style={{ position: 'relative' }}
      >
        <div
          className="flex shrink-0 items-center animate-marquee"
          style={{
            gap: '1rem',
            minWidth: '100%',
          }}
        >
          {industries.map((industry, i) => (
            <span key={i} className="flex items-center gap-4 shrink-0">
              <span
                className="font-mono-label whitespace-nowrap"
                style={{
                  fontSize: 14,
                  color: 'rgba(196, 163, 90, 0.6)',
                  letterSpacing: '0.15em',
                }}
              >
                {industry}
              </span>
              <span style={{ color: 'rgba(196, 163, 90, 0.3)' }}>{'\u2022'}</span>
            </span>
          ))}
          {industries.map((industry, i) => (
            <span key={`dup-${i}`} className="flex items-center gap-4 shrink-0">
              <span
                className="font-mono-label whitespace-nowrap"
                style={{
                  fontSize: 14,
                  color: 'rgba(196, 163, 90, 0.6)',
                  letterSpacing: '0.15em',
                }}
              >
                {industry}
              </span>
              <span style={{ color: 'rgba(196, 163, 90, 0.3)' }}>{'\u2022'}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
