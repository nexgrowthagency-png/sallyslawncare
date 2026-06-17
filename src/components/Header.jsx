import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { List, X } from '@phosphor-icons/react'

const PHONE = '(559) 213-7176'
const PHONE_HREF = 'tel:5592137176'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  const showSolidBg = scrolled || !isHome

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg
          ? 'bg-forest shadow-lg shadow-forest/20'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight shrink-0">
            <span className="font-bold text-base leading-none" style={{ color: '#6BAF34' }}>
              Sally's Lawn Care
            </span>
            <span className="text-white text-[11px] font-medium tracking-wide mt-0.5">
              Fresno &amp; Clovis
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === href
                    ? 'text-grass'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {PHONE}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-grass text-white text-sm font-semibold rounded-full hover:bg-grass-light active:scale-[0.97] transition-all duration-200 shadow-sm"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-forest border-t border-white/10 overflow-hidden"
          >
            <nav className="px-4 pt-2 pb-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  className={`px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === href
                      ? 'bg-white/10 text-grass'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={PHONE_HREF}
                  className="px-5 py-3 border border-white/20 text-white text-base font-semibold rounded-full text-center hover:bg-white/10 transition-colors"
                >
                  Call {PHONE}
                </a>
                <Link
                  to="/contact"
                  className="px-5 py-3 bg-grass text-white text-base font-semibold rounded-full text-center hover:bg-grass-light transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
