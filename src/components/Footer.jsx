import { Link } from 'react-router-dom'
import { Phone, Envelope, MapPin, InstagramLogo } from '@phosphor-icons/react'

const PHONE = '(559) 213-7176'
const PHONE_HREF = 'tel:5592137176'

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full overflow-hidden">
                <img
                  src="/logos.png"
                  alt="Sally's Lawn Care"
                  className="h-10 w-auto object-contain"
                  style={{ background: 'transparent' }}
                  onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
                />
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-none">Sally's Lawn Care</p>
                <p className="text-grass text-xs mt-0.5">Reliable Lawn Care Services</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Serving Fresno, Clovis, and the surrounding Central Valley. Quality lawn care you can count on, every single visit.
            </p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-white/60 hover:text-grass transition-colors text-sm"
              aria-label="Sally's Lawn Care on Instagram"
            >
              <InstagramLogo size={18} />
              <span>@sallyslawncare</span>
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Pricing', href: '/services#pricing' },
                { label: 'About Us', href: '/about' },
                { label: 'Book Now', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-white/60 hover:text-grass text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2.5 text-white/60 hover:text-grass text-sm transition-colors"
                >
                  <Phone size={16} className="shrink-0 text-grass" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@sallyslawncare.com"
                  className="flex items-center gap-2.5 text-white/60 hover:text-grass text-sm transition-colors"
                >
                  <Envelope size={16} className="shrink-0 text-grass" />
                  hello@sallyslawncare.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-white/60 text-sm">
                  <MapPin size={16} className="shrink-0 text-grass mt-0.5" />
                  Fresno, Clovis &amp; Surrounding Areas
                </span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-5 px-5 py-2.5 bg-grass text-white text-sm font-semibold rounded-full hover:bg-grass-light active:scale-[0.97] transition-all duration-200"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Sally's Lawn Care. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Fresno &bull; Clovis &bull; Central Valley, CA
          </p>
        </div>
      </div>
    </footer>
  )
}
