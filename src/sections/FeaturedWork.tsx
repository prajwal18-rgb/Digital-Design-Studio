import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'DR. SMILE DENTAL',
    description: 'A modern, calming website for a premium dental clinic. Clean appointment booking, service showcases, and patient testimonials.',
    image: '/images/project-dental.jpg',
    link: '#',
  },
  {
    title: 'SPICE GARDEN RESTAURANT',
    description: 'An inviting digital presence for a farm-to-table restaurant. Online reservations, seasonal menus, and event bookings.',
    image: '/images/project-restaurant.jpg',
    link: '#',
  },
  {
    title: 'LUXE FURNITURE CO.',
    description: 'A sophisticated e-commerce platform for a contemporary furniture brand. Virtual showroom, AR product previews, and seamless checkout.',
    image: '/images/project-furniture.jpg',
    link: '#',
  },
]

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from('.fw-title', {
        scrollTrigger: {
          trigger: '.fw-title',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
      })

      // Project cards stagger animation
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 80,
          duration: 1,
          delay: i * 0.15,
          ease: 'power3.out',
        })
      })

      // Project images parallax
      gsap.utils.toArray<HTMLElement>('.project-image').forEach((img) => {
        gsap.to(img, {
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          y: -40,
          ease: 'none',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="work"
      style={{ background: '#F7FAF9', padding: '160px 5vw' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Section header */}
        <div className="fw-title" style={{ marginBottom: 80 }}>
          <p className="font-mono-label" style={{ color: '#C4A35A', marginBottom: 16 }}>
            Featured Work
          </p>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#0D1B16',
              fontFamily: '"PP Neue Montreal", "Helvetica Neue", sans-serif',
            }}
          >
            Projects We Are Proud Of
          </h2>
        </div>

        {/* Project cards */}
        <div className="flex flex-col" style={{ gap: 120 }}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card flex flex-col md:flex-row items-center gap-12"
              style={{ flexDirection: index % 2 === 1 ? 'row-reverse' : undefined }}
            >
              {/* Image */}
              <div
                className="w-full md:w-3/5 overflow-hidden"
                style={{ borderRadius: 16, aspectRatio: '16/10' }}
              >
                <div className="project-image w-full h-full" style={{ willChange: 'transform' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ transform: 'scale(1.1)' }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/5">
                <h3
                  style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    fontWeight: 400,
                    color: '#0D1B16',
                    marginBottom: 16,
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: 18,
                    color: '#5C7A6E',
                    lineHeight: 1.6,
                    marginBottom: 24,
                  }}
                >
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#C4A35A]"
                  style={{ fontSize: 15, color: '#0D1B16', fontWeight: 500 }}
                >
                  View Case Study
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
