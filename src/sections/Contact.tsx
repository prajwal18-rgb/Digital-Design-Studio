import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { trpc } from '@/providers/trpc'
import { Send, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true)
      setFormData({ name: '', email: '', businessType: '', message: '' })
    },
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content > *', {
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    contactMutation.mutate(formData)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden"
      style={{ padding: '160px 5vw' }}
    >
      {/* Nature image background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/nature-contact.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(13, 27, 22, 0.78)' }} />

      {/* Content */}
      <div
        className="contact-content relative z-10"
        style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}
      >
        <p className="font-mono-label" style={{ color: '#C4A35A', marginBottom: 16 }}>
          Get in Touch
        </p>

        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#F7FAF9',
            marginBottom: 20,
          }}
        >
          Ready to Build Something Great?
        </h2>

        <p
          style={{
            fontSize: 18,
            color: 'rgba(247, 250, 249, 0.7)',
            marginBottom: 48,
          }}
        >
          Tell us about your project and we will get back to you within 24 hours.
        </p>

        {submitted ? (
          <div
            className="flex flex-col items-center gap-4"
            style={{
              padding: '60px 40px',
              borderRadius: 20,
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(196, 163, 90, 0.3)',
            }}
          >
            <CheckCircle size={48} color="#C4A35A" />
            <h3 style={{ fontSize: 24, color: '#F7FAF9', fontWeight: 500 }}>
              Message Sent!
            </h3>
            <p style={{ fontSize: 16, color: 'rgba(247, 250, 249, 0.7)' }}>
              Thank you for reaching out. We will be in touch soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                marginTop: 16,
                color: '#C4A35A',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 15,
                textDecoration: 'underline',
              }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            style={{
              padding: '48px',
              borderRadius: 20,
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(196, 163, 90, 0.15)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="glass-input"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass-input"
                required
              />
            </div>

            <select
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="glass-input"
              style={{ color: formData.businessType ? '#F7FAF9' : 'rgba(247, 250, 249, 0.5)' }}
            >
              <option value="" style={{ background: '#1A2E26', color: '#F7FAF9' }}>
                Business Type
              </option>
              <option value="dental" style={{ background: '#1A2E26', color: '#F7FAF9' }}>
                Dental Clinic
              </option>
              <option value="restaurant" style={{ background: '#1A2E26', color: '#F7FAF9' }}>
                Restaurant / Cafe
              </option>
              <option value="retail" style={{ background: '#1A2E26', color: '#F7FAF9' }}>
                Retail / Mall Shop
              </option>
              <option value="furniture" style={{ background: '#1A2E26', color: '#F7FAF9' }}>
                Furniture Store
              </option>
              <option value="electronics" style={{ background: '#1A2E26', color: '#F7FAF9' }}>
                Electronics Shop
              </option>
              <option value="other" style={{ background: '#1A2E26', color: '#F7FAF9' }}>
                Other
              </option>
            </select>

            <textarea
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="glass-input"
              rows={4}
              required
            />

            <button
              type="submit"
              disabled={contactMutation.isPending}
              className="flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 disabled:opacity-60"
              style={{
                background: '#C4A35A',
                color: '#0D1B16',
                padding: '16px 40px',
                borderRadius: 40,
                fontSize: 16,
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                marginTop: 8,
              }}
            >
              {contactMutation.isPending ? 'Sending...' : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
