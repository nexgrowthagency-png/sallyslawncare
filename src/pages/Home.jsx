import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import {
  Scissors,
  Drop,
  Leaf,
  Sun,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  TreeEvergreen,
  Trash,
} from '@phosphor-icons/react'
import FadeIn from '../components/FadeIn'

const PHONE = '(559) 213-7176'
const PHONE_HREF = 'tel:5592137176'

const SERVICES = [
  {
    icon: Scissors,
    name: 'Mowing & Edging',
    desc: 'Precise, clean cuts every visit with sharp edges along walkways and driveways.',
  },
  {
    icon: TreeEvergreen,
    name: 'Bush & Shrub Trimming',
    desc: 'Shaped and healthy shrubs that keep your property looking polished year-round.',
  },
  {
    icon: Leaf,
    name: 'Flower Bed Cleanup',
    desc: 'Weeding, debris removal, and bed maintenance so your garden beds stay beautiful.',
  },
  {
    icon: Drop,
    name: 'Irrigation Repair',
    desc: 'Quick diagnosis and repair of sprinkler systems to keep your lawn properly watered.',
  },
  {
    icon: Sun,
    name: 'Tree Trimming',
    desc: 'Safe, precise trimming for overgrown trees that improves curb appeal and safety.',
  },
  {
    icon: Trash,
    name: 'Junk & Debris Removal',
    desc: 'Haul-away service for yard waste, junk, and cleanup after any project.',
  },
]

const TESTIMONIALS = [
  {
    body: "Sally's team has been caring for our yard for over a year. They're always on time, thorough, and our lawn has never looked better.",
    name: 'Maria G.',
    location: 'Fresno, CA',
  },
  {
    body: 'I called for a free quote and they were out the next day. Pricing was fair and the work was excellent. Highly recommend to anyone in Clovis.',
    name: 'David R.',
    location: 'Clovis, CA',
  },
  {
    body: "Finally a lawn care company that communicates well and shows up when they say they will. Our neighbors keep asking who we use!",
    name: 'Rosa M.',
    location: 'Fresno, CA',
  },
]

const WHY_ITEMS = [
  'Serving Fresno, Clovis & surrounding areas',
  'Free estimates, no hidden fees',
  'Fully insured and professional',
  'Satisfaction guaranteed on every visit',
]

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(15,30,8,0.92) 0%, rgba(25,50,12,0.80) 55%, rgba(45,80,22,0.35) 100%)',
        }} />

        {/* Hero content */}
        <div
          style={{ position: 'relative', zIndex: 10, width: '100%', paddingTop: '80px' }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
            style={{ background: 'rgba(107,175,52,0.12)', border: '1px solid rgba(107,175,52,0.25)' }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#6BAF34', display: 'inline-block' }} />
            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em' }}>
              Serving Fresno &amp; Clovis, CA
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ color: '#ffffff' }}>Your Lawn,</span>
            <br />
            <span style={{ color: '#6BAF34' }}>Done Right.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{
              color: 'rgba(255,255,255,0.70)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginBottom: '2.25rem',
              fontWeight: 300,
              letterSpacing: '0.01em',
              maxWidth: '460px',
              margin: '0 auto 2.25rem',
            }}
          >
            Reliable, affordable lawn care for Central Valley homeowners. Free quotes. Fast service.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-full active:scale-[0.97] transition-all duration-200 text-base"
              style={{
                background: '#6BAF34',
                color: '#ffffff',
                boxShadow: '0 8px 32px rgba(107,175,52,0.40)',
              }}
            >
              Get a Free Quote
              <ArrowRight size={18} weight="bold" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-full active:scale-[0.97] transition-all duration-200 text-base"
              style={{ border: '2px solid rgba(255,255,255,0.30)', color: '#ffffff' }}
            >
              <Phone size={18} weight="bold" />
              {PHONE}
            </a>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '180px',
            background: 'linear-gradient(to top, rgba(10,20,5,0.6), transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4">
                Everything your lawn needs.
              </h2>
              <p className="text-ink/60 text-lg max-w-md">
                From weekly mowing to one-time cleanup. We handle it all so you don't have to.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <FadeIn key={service.name} delay={i * 0.07}>
                  <div className="group bg-white rounded-2xl p-6 hover:shadow-lg hover:shadow-forest/10 hover:-translate-y-1 transition-all duration-300 border border-cream-dark">
                    <div className="w-11 h-11 bg-grass/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-grass/20 transition-colors">
                      <Icon size={22} className="text-grass" weight="duotone" />
                    </div>
                    <h3 className="font-bold text-ink text-lg mb-2">{service.name}</h3>
                    <p className="text-ink/60 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          <FadeIn delay={0.3} className="mt-10 text-center lg:text-left">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-grass font-semibold text-base hover:gap-3 transition-all duration-200"
            >
              See all services and pricing
              <ArrowRight size={18} weight="bold" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <img
                src="/about-img.png"
                alt="Professional lawn care team at work"
                className="rounded-2xl w-full aspect-[4/3] object-cover"
              />
            </FadeIn>

            <FadeIn direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                Why homeowners trust <span className="text-grass">Sally's</span>.
              </h2>
              <ul className="space-y-4 mb-8">
                {WHY_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={22}
                      className="text-grass shrink-0 mt-0.5"
                      weight="fill"
                    />
                    <span className="text-white/80 text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-grass text-white font-semibold rounded-full hover:bg-grass-light active:scale-[0.97] transition-all duration-200"
                >
                  Request a Quote
                  <ArrowRight size={18} weight="bold" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  Our Story
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-12">
              What our customers say.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 flex flex-col h-full border border-cream-dark">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} className="text-grass" weight="fill" />
                    ))}
                  </div>
                  <p className="text-ink/70 text-base leading-relaxed flex-1 mb-5">
                    "{t.body}"
                  </p>
                  <div>
                    <p className="font-bold text-ink text-sm">{t.name}</p>
                    <p className="text-ink/50 text-xs mt-0.5">{t.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/greengrass.avif"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(45,80,22,0.55)' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
              Ready for a better lawn?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Contact us today and get a free, no-obligation quote for your property.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-grass text-white font-bold rounded-full hover:bg-grass-light active:scale-[0.97] transition-all duration-200 text-base shadow-lg shadow-grass/30"
              >
                Request a Free Quote
                <ArrowRight size={18} weight="bold" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-200 text-base"
              >
                <Phone size={18} weight="bold" />
                {PHONE}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
