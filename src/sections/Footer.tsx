import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer style={{ background: '#0D1B16', padding: '80px 5vw 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Top row - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8" style={{ marginBottom: 60 }}>
          {/* Brand */}
          <div>
            <h3
              style={{
                fontSize: 24,
                fontWeight: 500,
                color: '#F7FAF9',
                marginBottom: 16,
                letterSpacing: '0.05em',
              }}
            >
              VISION
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(247, 250, 249, 0.6)', lineHeight: 1.6 }}>
              Digital design studio building websites and apps for businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-mono-label"
              style={{ color: '#C4A35A', marginBottom: 20 }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {['Website Design', 'Mobile Apps', 'Brand Identity', 'E-Commerce'].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="transition-colors duration-300 hover:text-[#C4A35A]"
                    style={{ fontSize: 15, color: 'rgba(247, 250, 249, 0.7)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4
              className="font-mono-label"
              style={{ color: '#C4A35A', marginBottom: 20 }}
            >
              Industries
            </h4>
            <ul className="flex flex-col gap-3">
              {['Dental', 'Restaurants', 'Retail', 'Furniture', 'Electronics'].map((item) => (
                <li key={item}>
                  <span style={{ fontSize: 15, color: 'rgba(247, 250, 249, 0.7)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-mono-label"
              style={{ color: '#C4A35A', marginBottom: 20 }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@visionstudio.com"
                  className="transition-colors duration-300 hover:text-[#C4A35A]"
                  style={{ fontSize: 15, color: 'rgba(247, 250, 249, 0.7)' }}
                >
                  hello@visionstudio.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15552345678"
                  className="transition-colors duration-300 hover:text-[#C4A35A]"
                  style={{ fontSize: 15, color: 'rgba(247, 250, 249, 0.7)' }}
                >
                  +1 (555) 234-5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(196, 163, 90, 0.15)', marginBottom: 32 }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="font-mono-label"
            style={{ color: 'rgba(247, 250, 249, 0.4)', fontSize: 12 }}
          >
            2026 VISION Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="transition-colors duration-300 hover:text-[#C4A35A]"
              style={{ fontSize: 14, color: 'rgba(247, 250, 249, 0.5)' }}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
