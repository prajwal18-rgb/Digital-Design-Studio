import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, Smartphone, Palette, ShoppingCart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Custom, responsive websites that look stunning on every device. We design for dental clinics, restaurants, retail shops, and more.',
    size: 'large',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native iOS and Android apps built for your business. Smooth, intuitive, and built to perform.',
    size: 'small',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Complete visual identity systems — logos, color palettes, typography, and brand guidelines that make you memorable.',
    size: 'large',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Online stores that convert. From product catalogs to secure checkout, we build shopping experiences that sell.',
    size: 'small',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-title', {
        scrollTrigger: {
          trigger: '.services-title',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.utils.toArray<HTMLElement>('.service-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.12,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden"
      style={{ padding: '160px 5vw' }}
    >
      {/* Nature video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        <source src="/videos/nature-services.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(13, 27, 22, 0.72)' }} />

      {/* Content */}
      <div className="relative z-10" style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Section header */}
        <div className="services-title" style={{ marginBottom: 80 }}>
          <p className="font-mono-label" style={{ color: '#C4A35A', marginBottom: 16 }}>
            What We Do
          </p>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#F7FAF9',
            }}
          >
            Our Services
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isLarge = service.size === 'large'
            return (
              <div
                key={service.title}
                className="service-card group transition-all duration-300"
                style={{
                  gridColumn: isLarge ? 'span 3' : 'span 2',
                  padding: 60,
                  borderRadius: 20,
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(196, 163, 90, 0.15)',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(196, 163, 90, 0.15)'
                }}
              >
                <div
                  className="flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: 'rgba(196, 163, 90, 0.15)',
                  }}
                >
                  <Icon size={28} color="#C4A35A" />
                </div>
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 500,
                    color: '#F7FAF9',
                    marginBottom: 12,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    color: 'rgba(247, 250, 249, 0.7)',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
