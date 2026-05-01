import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        height: 64,
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
        backgroundColor: scrolled ? 'rgba(247, 250, 249, 0.85)' : 'rgba(247, 250, 249, 0.3)',
        borderBottom: scrolled ? '1px solid rgba(196, 163, 90, 0.1)' : '1px solid transparent',
      }}
    >
      <div className="flex items-center justify-between h-full" style={{ padding: '0 5vw' }}>
        <a href="#" className="font-medium tracking-wide" style={{ fontSize: 20, color: '#0D1B16', fontFamily: '"PP Neue Montreal", "Helvetica Neue", sans-serif' }}>
          VISION
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative transition-colors duration-300 hover:text-[#C4A35A]"
              style={{ fontSize: 15, color: '#0D1B16', fontWeight: 400 }}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/login"
            className="transition-colors duration-300 hover:text-[#C4A35A]"
            style={{ fontSize: 15, color: '#0D1B16', fontWeight: 400 }}
          >
            Sign In
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} color="#0D1B16" /> : <Menu size={24} color="#0D1B16" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full py-6 px-8 flex flex-col gap-4"
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(247, 250, 249, 0.95)',
            borderBottom: '1px solid rgba(196, 163, 90, 0.15)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="transition-colors duration-300 hover:text-[#C4A35A]"
              style={{ fontSize: 18, color: '#0D1B16' }}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/login"
            className="transition-colors duration-300 hover:text-[#C4A35A]"
            style={{ fontSize: 18, color: '#0D1B16' }}
            onClick={() => setMobileOpen(false)}
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  )
}
