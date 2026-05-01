import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your business, your customers, and your goals.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create visual concepts and refine them until they feel right.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'We build your website or app with clean, modern technology.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We go live and make sure everything runs smoothly.',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-title', {
        scrollTrigger: {
          trigger: '.process-title',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, i) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
        })
      })

      // Animate the connecting line
      gsap.from('.process-line', {
        scrollTrigger: {
          trigger: '.process-steps',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1,
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{ background: '#F7FAF9', padding: '160px 5vw' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Section header */}
        <div className="process-title" style={{ marginBottom: 100, textAlign: 'center' }}>
          <p className="font-mono-label" style={{ color: '#C4A35A', marginBottom: 16 }}>
            How We Work
          </p>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#0D1B16',
            }}
          >
            Our Process
          </h2>
        </div>

        {/* Timeline */}
        <div className="process-steps relative">
          {/* Connecting line - visible on md+ */}
          <div
            className="process-line hidden md:block absolute top-12 left-0 w-full"
            style={{
              height: 1,
              background: 'rgba(196, 163, 90, 0.3)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="process-step text-center md:text-left">
                {/* Number */}
                <div
                  className="inline-flex items-center justify-center mb-6"
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: '50%',
                    background: '#F7FAF9',
                    border: '2px solid rgba(196, 163, 90, 0.3)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: 28,
                      fontWeight: 400,
                      color: '#C4A35A',
                      fontFamily: '"Geist Mono", monospace',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 500,
                    color: '#0D1B16',
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: 16,
                    color: '#5C7A6E',
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
