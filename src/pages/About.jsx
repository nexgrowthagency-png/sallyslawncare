import { Link } from 'react-router-dom'
import { CheckCircle, MapPin, Phone, Heart, ArrowRight } from '@phosphor-icons/react'
import FadeIn from '../components/FadeIn'

const PHONE = '(559) 213-7176'
const PHONE_HREF = 'tel:5592137176'

const VALUES = [
  {
    title: 'Reliability',
    desc: "We show up when we say we will. Every time. Your time matters and we take that seriously.",
  },
  {
    title: 'Affordability',
    desc: "Fair, transparent pricing with no hidden fees. Quality lawn care shouldn't break the bank.",
  },
  {
    title: 'Communication',
    desc: "We keep you in the loop before, during, and after every job. No guesswork, no surprises.",
  },
  {
    title: 'Quality',
    desc: "We treat every lawn like it's our own. If you're not satisfied, we'll make it right.",
  },
]

const AREAS = [
  'Fresno', 'Clovis', 'Sanger', 'Selma', 'Reedley',
  'Madera', 'Fowler', 'Kerman', 'Kingsburg',
]

export default function About() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <img
            src="https://picsum.photos/seed/central-valley-landscape/1920/600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              About Sally's Lawn Care
            </h1>
            <p className="text-white/70 text-lg max-w-md">
              A local lawn care company built on reliability, quality work, and genuine care for our community.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <img
                src="/about-img.png"
                alt="Sally's Lawn Care team at work in Fresno"
                className="rounded-2xl w-full aspect-[4/3] object-cover"
              />
            </FadeIn>

            <FadeIn direction="left">
              <p className="text-grass font-semibold text-sm uppercase tracking-widest mb-4">
                Our story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-6">
                Rooted in the Central Valley.
              </h2>
              <div className="space-y-4 text-ink/70 text-base leading-relaxed">
                <p>
                  Sally's Lawn Care was founded right here in the Central Valley with one simple goal: to give Fresno and Clovis homeowners a lawn care service they could truly depend on.
                </p>
                <p>
                  We know how important your home looks - it's your biggest investment and your family's space. That's why we bring the same level of care and attention to every single yard we touch, no matter the size of the job.
                </p>
                <p>
                  From weekly mowing to full property cleanups, we're built on showing up on time, doing the job right, and leaving every lawn better than we found it.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <Heart size={20} className="text-grass" weight="fill" />
                <span className="text-ink font-semibold">Proudly local. Community first.</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-12">
              What drives us.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 h-full border border-cream-dark">
                  <div className="w-10 h-10 bg-grass/10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle size={20} className="text-grass" weight="fill" />
                  </div>
                  <h3 className="font-bold text-ink text-lg mb-2">{v.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-4">
                We come to you.
              </h2>
              <p className="text-ink/60 text-base leading-relaxed mb-8 max-w-md">
                We proudly serve Fresno, Clovis, and the surrounding communities throughout the Central Valley. Not sure if we cover your area? Just give us a call.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {AREAS.map((area) => (
                  <span
                    key={area}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-cream rounded-full text-sm text-ink/70 border border-cream-dark"
                  >
                    <MapPin size={13} className="text-grass" weight="fill" />
                    {area}
                  </span>
                ))}
              </div>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest text-white font-semibold rounded-full hover:bg-forest-light active:scale-[0.97] transition-all duration-200"
              >
                <Phone size={18} weight="bold" />
                Call {PHONE}
              </a>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-forest rounded-2xl p-8 text-white">
                <h3 className="font-bold text-xl mb-2">Not local yet?</h3>
                <p className="text-white/70 text-sm mb-6">
                  We're growing fast across the Central Valley. If your area isn't listed, reach out and we'll let you know if we can make it work.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-grass text-white font-semibold rounded-full hover:bg-grass-light transition-all duration-200 text-sm"
                >
                  Ask about your area
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-grass">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Let's get your lawn looking great.
            </h2>
            <p className="text-white/80 text-base mb-8">
              Free quote, no commitment. We'll walk your property and tell you exactly what it needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest font-bold rounded-full hover:bg-cream active:scale-[0.97] transition-all duration-200 text-base shadow-lg"
            >
              Book a Free Visit
              <ArrowRight size={18} weight="bold" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
