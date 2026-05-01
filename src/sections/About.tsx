import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slide in from left
      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      // Text fade in from right with stagger
      gsap.from('.about-text > *', {
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      })

      // Parallax on image
      if (imageRef.current) {
        gsap.to(imageRef.current.querySelector('img'), {
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          y: -30,
          ease: 'none',
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ background: '#F7FAF9', padding: '160px 5vw' }}
    >
      <div
        className="flex flex-col md:flex-row items-center gap-12 md:gap-0"
        style={{ maxWidth: 1280, margin: '0 auto' }}
      >
        {/* Image */}
        <div className="about-image w-full md:w-1/2" ref={imageRef}>
          <div
            className="overflow-hidden"
            style={{ borderRadius: 16, aspectRatio: '3/4' }}
          >
            <img
              src="/images/about-portrait.jpg"
              alt="VISION Studio workspace"
              className="w-full h-full object-cover"
              style={{ transform: 'scale(1.1)', willChange: 'transform' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div className="about-text w-full md:w-1/2" style={{ paddingLeft: '0', paddingTop: '40px' }}>
          <div style={{ paddingLeft: '0', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            <p className="font-mono-label" style={{ color: '#C4A35A', marginBottom: 24 }}>
              About the Studio
            </p>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: '#0D1B16',
                marginBottom: 32,
              }}
            >
              Design That Grows Your Business
            </h2>
            <p
              style={{
                fontSize: 18,
                color: '#5C7A6E',
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              We are a team of designers and developers who believe every business deserves a beautiful digital presence. From local dental clinics to bustling restaurants, from boutique mall shops to furniture showrooms — we craft digital experiences that bring customers through your doors.
            </p>
            <p
              style={{
                fontSize: 18,
                color: '#5C7A6E',
                lineHeight: 1.6,
              }}
            >
              No templates. No shortcuts. Every project is built from the ground up to match your brand and goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
