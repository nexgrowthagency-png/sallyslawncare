import { Link } from 'react-router-dom'
import {
  Scissors,
  Drop,
  Leaf,
  Sun,
  Trash,
  TreeEvergreen,
  Dog,
  ArrowRight,
  Phone,
  CheckCircle,
  Tag,
} from '@phosphor-icons/react'
import FadeIn from '../components/FadeIn'

const PHONE = '(559) 213-7176'
const PHONE_HREF = 'tel:5592137176'

const SERVICES_DETAIL = [
  {
    icon: Scissors,
    name: 'Mowing & Edging',
    price: 'Starting at $29.99',
    priceTag: '$29.99+',
    desc: 'Full lawn mowing with crisp, clean edging along all walkways, driveways, and garden borders. We leave your yard looking sharp every single visit.',
    includes: ['Front and back lawn mowing', 'Edge trimming along all hardscapes', 'Clipping cleanup and blow-down'],
  },
  {
    icon: TreeEvergreen,
    name: 'Bush Shrubbing',
    price: '$15 - $20 per bush',
    priceTag: '$15-$20 / bush',
    desc: 'Hand-shaped shrub trimming for a neat, uniform appearance. We work with your existing landscaping to keep growth healthy and controlled.',
    includes: ['Shape and size trimming', 'Dead branch removal', 'Debris cleanup included'],
  },
  {
    icon: TreeEvergreen,
    name: 'Bush Removal',
    price: 'Starting at $29.99',
    priceTag: '$29.99+',
    desc: 'Full removal of unwanted bushes including root ball extraction. We haul everything away so your yard is clear and ready for replanting.',
    includes: ['Complete bush extraction', 'Root ball removal', 'Full debris hauling'],
  },
  {
    icon: Sun,
    name: 'Overgrown Tree Trimming',
    price: 'Starting at $19.99 per tree',
    priceTag: '$19.99+ / tree',
    desc: 'Safe, precise trimming for overgrown or unruly trees. Improves the health of the tree, reduces hazard risk, and boosts your curb appeal.',
    includes: ['Crown thinning and shaping', 'Dead limb removal', 'Debris hauled away'],
  },
  {
    icon: Trash,
    name: 'Junk Pickup & Removal',
    price: 'Starting at $49.99',
    priceTag: '$49.99+',
    desc: 'Haul-away service for yard debris, junk, old furniture, and anything else cluttering your outdoor space. Fast removal, no mess left behind.',
    includes: ['Same-day or next-day pickup available', 'Yard waste and debris', 'Furniture, equipment, and more'],
  },
  {
    icon: Leaf,
    name: 'Flower Bed Cleanup',
    price: 'Starting at $19.99',
    priceTag: '$19.99+',
    desc: 'Complete flower bed maintenance including weeding, edging, and debris removal. We restore your beds to a fresh, tidy state.',
    includes: ['Full bed weeding', 'Edge definition', 'Mulch and debris removal'],
  },
  {
    icon: Dog,
    name: 'Dog Waste Removal',
    price: '$24.99 per visit',
    priceTag: '$24.99',
    desc: 'Clean and sanitary yard cleanup for pet owners. We remove all waste so your lawn is safe, clean, and ready to enjoy.',
    includes: ['Full yard waste removal', 'Sanitary disposal', 'Available as recurring service'],
  },
  {
    icon: Drop,
    name: 'Irrigation Repair',
    price: 'Starting at $10.99',
    priceTag: '$10.99+',
    desc: 'Inspection, diagnosis, and repair of sprinkler heads, lines, and timers. Keep your irrigation running efficiently to protect your lawn and save water.',
    includes: ['System inspection', 'Head replacement and adjustment', 'Timer and valve troubleshooting'],
  },
]

export default function Services() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <img
            src="https://picsum.photos/seed/garden-tools-professional/1920/600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-grass font-semibold text-sm uppercase tracking-widest mb-3">
              What we offer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              Services & Pricing
            </h1>
            <p className="text-white/70 text-lg max-w-md">
              Transparent pricing. No surprises. Every job backed by our satisfaction guarantee.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES + PRICING ────────────────────────────────────── */}
      <section id="pricing" className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-3">
                  Clear prices. Quality work.
                </h2>
                <p className="text-ink/60 text-base max-w-lg">
                  All services include a free on-site estimate. Final price may vary based on property size and condition.
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-grass text-white font-semibold rounded-full hover:bg-grass-light active:scale-[0.97] transition-all duration-200 text-sm shadow-sm"
              >
                Get a Free Quote
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES_DETAIL.map((service, i) => {
              const Icon = service.icon
              return (
                <FadeIn key={service.name} delay={i * 0.06}>
                  <div className="group bg-white rounded-2xl p-6 border border-cream-dark hover:border-grass/30 hover:shadow-lg hover:shadow-forest/8 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 bg-grass/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-grass/20 transition-colors">
                          <Icon size={22} className="text-grass" weight="duotone" />
                        </div>
                        <h3 className="font-bold text-ink text-lg leading-tight">{service.name}</h3>
                      </div>
                      {/* Price badge */}
                      <div className="shrink-0 flex items-center gap-1.5 bg-forest/8 px-3 py-1.5 rounded-full">
                        <Tag size={12} className="text-forest" weight="bold" />
                        <span className="text-forest font-bold text-xs whitespace-nowrap">
                          {service.priceTag}
                        </span>
                      </div>
                    </div>

                    <p className="text-ink/60 text-sm leading-relaxed mb-4">{service.desc}</p>

                    <ul className="space-y-1.5">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                          <CheckCircle size={15} className="text-grass shrink-0" weight="fill" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PRICING CTA BANNER ──────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                  Not sure what you need?
                </h2>
                <p className="text-white/70 text-base max-w-md">
                  We'll walk your property and give you a free, no-pressure quote. No guessing, no surprises.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-grass text-white font-bold rounded-full hover:bg-grass-light active:scale-[0.97] transition-all duration-200 text-base shadow-lg shadow-grass/30"
                >
                  Get a Free Quote
                  <ArrowRight size={18} weight="bold" />
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 px-7 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-200 text-base"
                >
                  <Phone size={18} weight="bold" />
                  {PHONE}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA NOTE ─────────────────────────────────────── */}
      <section className="py-14 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-ink/50 text-sm uppercase tracking-widest font-medium mb-2">
              Service area
            </p>
            <p className="text-ink/70 text-base">
              Proudly serving <strong className="text-ink">Fresno</strong>, <strong className="text-ink">Clovis</strong>, and surrounding Central Valley communities.
              Not sure if we cover your area? Give us a call.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
