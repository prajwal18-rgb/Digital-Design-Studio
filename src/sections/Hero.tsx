import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.from('.hero-label', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from('.hero-headline', {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.5')
        .from('.hero-sub', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.6')
        .from('.hero-cta', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.5')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCtaClick = () => {
    const target = document.querySelector('#work')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: 600 }}
    >
      {/* Nature video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        <source src="/videos/nature-hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 27, 22, 0.55) 0%, rgba(13, 27, 22, 0.3) 50%, rgba(13, 27, 22, 0.55) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex items-center justify-center h-full"
        style={{ padding: '0 5vw' }}
      >
        <div
          ref={contentRef}
          className="text-center"
          style={{
            maxWidth: 800,
            padding: '60px 48px',
            borderRadius: 20,
            background: 'rgba(247, 250, 249, 0.12)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <p
            className="hero-label font-mono-label"
            style={{ color: '#C4A35A', marginBottom: 24, letterSpacing: '0.12em' }}
          >
            Digital Design Studio
          </p>

          <h1
            className="hero-headline font-display"
            style={{
              fontSize: 'clamp(44px, 7vw, 96px)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#F7FAF9',
              letterSpacing: '-0.04em',
              marginBottom: 24,
            }}
          >
            We Design Digital Experiences
          </h1>

          <p
            className="hero-sub"
            style={{
              fontSize: 20,
              color: 'rgba(247, 250, 249, 0.85)',
              lineHeight: 1.6,
              marginBottom: 40,
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Websites and mobile apps for businesses that want to stand out.
          </p>

          <button
            onClick={handleCtaClick}
            className="hero-cta transition-all duration-300 hover:scale-105"
            style={{
              background: '#C4A35A',
              color: '#0D1B16',
              padding: '16px 40px',
              borderRadius: 40,
              fontSize: 16,
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            View Our Work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'bounce 2s infinite' }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, transparent, rgba(196, 163, 90, 0.6))',
          }}
        />
      </div>
    </section>
  )
}
